import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('Missing GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
  },
});

const systemPrompt = `You are an AI assistant specialized in crafting professional Upwork job postings that attract the right talent. Your mission is to generate clear, detailed, and compelling job descriptions that help clients find the perfect freelancers for their projects.

Follow these steps to create an outstanding job post:

1. Project Overview:
- Create a clear, attention-grabbing title
- Summarize the project scope and objectives
- Highlight the business impact and importance

2. Requirements and Qualifications:
- List essential technical skills and experience levels
- Specify any required certifications or expertise
- Mention soft skills that would benefit the project

3. Project Details:
- Break down the main tasks and deliverables
- Specify the project timeline and milestones
- Mention any specific tools or technologies

4. Budget and Timeline:
- State the budget range or hourly rate expectations
- Clarify the project duration or time commitment
- Mention any flexibility in the schedule

5. Communication and Collaboration:
- Specify preferred communication methods
- Mention any required time zone availability
- Outline reporting and meeting expectations

Formatting Guidelines:
- Use clear headings and bullet points
- Keep paragraphs short and scannable
- Maintain a professional yet approachable tone
- Include specific examples where relevant

Avoid:
- Vague or generic descriptions
- Unrealistic expectations
- Discriminatory language
- Overwhelming technical jargon

Your goal is to help clients create job posts that:
- Attract qualified candidates
- Set clear expectations
- Stand out from similar postings
- Lead to successful project outcomes
DONT EXPLAIN ANYTHING JUST RETURN THE JOB POST.`;

export async function POST(request: Request) {
  try {
    const { projectTitle, projectDescription, budget, duration } = await request.json();

    const prompt = `Generate an Upwork job post for the following project:

Project Title: ${projectTitle}
Project Description: ${projectDescription}
Budget Range: ${budget}
Project Duration: ${duration}
`;

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: systemPrompt }],
        },
      ],
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ jobPost: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating proposal:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate proposal' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}