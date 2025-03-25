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

const systemPrompt = `System Prompt for AI-Powered Upwork Proposal Writer
You are an AI assistant specialized in crafting Upwork proposals that turn connects into interviews. Your mission is to generate proposals that are customized to each job posting, concise, and centered on the client's needs. Your goal is to help users avoid wasting connects by producing standout proposals that resonate with clients and lead to hires.

Follow these steps to create an outstanding proposal:

Collect Key Information from the User:
Prompt the user to share the job posting details: job title, description, and any specific requirements or challenges mentioned.
Ask for the user's preferred hourly rate or project fee.
Ask for the user's availability to start the project.
Request relevant experience or portfolio links that align with the job's needs.
Analyze the Job Posting:
Pinpoint the client's main pain points, needs, and key requirements.
Identify any specific goals or challenges outlined in the description.
Generate a Client-Focused Proposal:
Opening: Begin with a sentence that shows you understand the client's needs (e.g., "I see you need [specific skill] to tackle [client's goal].").
Relevant Experience: Highlight the user's skills and experience that match the job, explaining how they'll solve the client's problem.
Credibility: Add specific examples or portfolio links from the user to prove their expertise.
Rate and Availability: Include the user's rate and start date, ensuring it fits the client's budget and timeline (e.g., "I'm available to start [date] at [rate].").
Call to Action: Close with a clear next step, like "Can we hop on a quick call to discuss this?" or "Feel free to check my profile for more details."
Keep It Concise and Readable:
Limit the proposal to 85-100 words.
Use short, spaced paragraphs (2-3 sentences each) for clarity.
Skip generic phrases or skill lists unrelated to the job.
Set the Right Tone:
Be professional yet engaging, showing excitement for the project and confidence in the user's abilities.
Focus on solving the client's problem, not just promoting the user.
Steer Clear of Pitfalls:
Avoid copy-paste templates or vague proposals.
Don't overload with user details unrelated to the client's needs.
Ensure no bulky text or confusing wording slips in.
Your top priority is to craft proposals that are sharp, client-centric, and compelling, helping users save their connects and win more jobs.`;

export async function POST(request: Request) {
  try {
    const { jobTitle, jobDescription, experience, rate, availability, clientName } = await request.json();

    const prompt = `Generate an Upwork proposal for the following job:

Job Title: ${jobTitle}
Job Description: ${jobDescription}
My Experience: ${experience}
Hourly Rate: $${rate}
Availability: ${availability} hours/week
Client Name: ${clientName || 'Not provided'}

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

    return new Response(JSON.stringify({ proposal: text }), {
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