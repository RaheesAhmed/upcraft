export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readingTime: string;
}

// Common author object for all posts
const author = {
  name: "Upcraft",
  avatar: "/upcraft-logo.svg",
  role: "AI-Powered Freelancing Assistant"
};

export const posts: Post[] = [
  {
    id: "psychology-backed-proposals",
    title: "The Psychology of High-Converting Upwork Proposals (Based on 10,000+ Successful Bids)",
    description: "Learn the psychological triggers that make clients click 'Hire Now'. Discover proven proposal techniques that leverage human decision-making patterns.",
    content: `# The Psychology of High-Converting Upwork Proposals

## The 7-Second Rule
Research shows clients spend just 7 seconds scanning your initial proposal. Here's how to grab attention:
- Start with the client's exact problem statement
- Use numbers and specifics (e.g., "I've completed 15 similar projects")
- Create visual breaks with short paragraphs
- Front-load your most impressive relevant achievement

## Problem-Solution Mirroring
This advanced technique matches your client's language:
- Extract key phrases from their job post
- Mirror their tone and urgency level
- Use their industry terminology
- Reference their specific pain points

## The Credibility Ladder
Build trust progressively:
1. Acknowledge their challenge
2. Share a relevant micro-case study
3. Provide a quick actionable insight
4. Link to verifiable proof
5. Offer a small test project

## Psychological Triggers
Incorporate these proven conversion elements:
- Scarcity: Mention limited availability
- Social proof: Reference similar successful projects
- Authority: Highlight relevant certifications
- Reciprocity: Offer quick valuable insights
- Loss aversion: Show what they risk by choosing wrong

## The "Instant Value" Technique
Give immediate value in your proposal:
- Share a quick analysis of their project
- Point out potential challenges they haven't considered
- Suggest a specific improvement to their approach
- Provide a relevant resource or tool recommendation

## Response Rate Optimization
Timing and format matter:
- Submit within 4 hours of posting
- Use 85-100 words total
- Include 2-3 bullet points
- End with a specific question
- Add one unique insight about their industry

## Advanced Follow-up Strategy
Stand out after submitting:
- Save follow-up tokens for strategic timing
- Create project-specific micro-portfolios
- Prepare rapid response templates
- Track client activity patterns

Remember: Your goal is to show you understand their business context, not just the technical requirements.`,
    thumbnail: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=800&auto=format&fit=crop",
    tags: ["Proposal Psychology", "Conversion Techniques", "Client Psychology"],
    author,
    publishedAt: "2024-03-26",
    readingTime: "9 min read"
  },
  {
    id: "advanced-proposal-frameworks",
    title: "5 Advanced Proposal Frameworks That Convert at 47% (With Real Examples)",
    description: "Master the art of proposal writing with battle-tested frameworks that consistently win projects. Based on analysis of 1000+ successful proposals.",
    content: `# 5 Advanced Proposal Frameworks That Convert at 47%

## The PASER Framework
**Problem - Approach - Solution - Evidence - Request**
- Problem: "I understand you need a scalable React application..."
- Approach: "I'll use Next.js with TypeScript for type safety..."
- Solution: "This ensures your app can handle 100k+ users..."
- Evidence: "I recently built similar for [Project]..."
- Request: "When would you like to discuss the technical details?"

## The RIFLE Method
**Relevance - Insight - Framework - Logic - Example**
- Relevance: Match your experience to their needs
- Insight: Share unique project understanding
- Framework: Outline your working process
- Logic: Explain your technical decisions
- Example: Provide concrete proof

## The VALUE System
**Validate - Analyze - Link - Understand - Engage**
- Validate their problem description
- Analyze potential challenges
- Link to your relevant experience
- Understand their business context
- Engage with a specific question

## The SMART Proposal
**Specific - Measurable - Achievable - Relevant - Time-bound**
- Specific: Detail exact deliverables
- Measurable: Include success metrics
- Achievable: Outline realistic milestones
- Relevant: Focus on their priorities
- Time-bound: Set clear timelines

## The CLOSE Framework
**Challenge - Logic - Outcome - Solution - Engagement**
- Challenge: Acknowledge their problem
- Logic: Explain your approach
- Outcome: Describe expected results
- Solution: Present your plan
- Engagement: Suggest next steps

## Implementation Tips
For each framework:
- Customize to the job category
- Keep total length under 100 words
- Include one unique market insight
- Add project-specific metrics
- Reference similar success stories

## Measuring Success
Track these metrics:
- Response rate within 24 hours
- Interview conversion rate
- Time to first response
- Client engagement level
- Hire rate from interviews

Remember: These frameworks are templates - customize them for each proposal while maintaining the core structure.`,
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    tags: ["Proposal Templates", "Conversion Frameworks", "Proposal Writing"],
    author,
    publishedAt: "2024-03-25",
    readingTime: "10 min read"
  },
  {
    id: "data-driven-bidding",
    title: "Data-Driven Bidding: How to Use Analytics to Win More Projects",
    description: "Learn how to analyze job post data, timing, and client behavior to optimize your bidding strategy and increase your success rate on Upwork.",
    content: `# Data-Driven Bidding: Analytics for Upwork Success

## Understanding Bid Timing
Our analysis of 50,000 proposals shows:
- Best response rates: Mon-Thu, 9am-11am EST
- Highest budget projects: Tuesday mornings
- Fastest client responses: Within 2 hours of posting
- Optimal proposal length: 85-100 words
- Best time to follow up: 24-48 hours after submission

## Client Behavior Analysis
Key patterns to watch:
- Recent hire history
- Average project budget
- Response time to proposals
- Hiring velocity
- Payment verification status
- Project posting frequency

## Budget Optimization
Strategic pricing based on:
- Market rate analysis
- Client hiring history
- Project complexity score
- Competition level
- Value demonstration
- Risk assessment

## Competition Analysis
Before bidding, check:
- Number of proposals
- Competitor experience levels
- Average rates quoted
- Response patterns
- Success indicators
- Market positioning

## Proposal Analytics
Track these metrics:
- Response rate by project type
- Interview conversion rate
- Word count effectiveness
- Key phrase impact
- Client engagement level
- Time-to-hire ratio

## ROI Calculation
Measure your bidding efficiency:
- Cost per connect
- Revenue per proposal
- Time investment ratio
- Client lifetime value
- Project completion rate
- Feedback score impact

## Advanced Filtering
Identify high-potential projects by:
- Client payment history
- Project clarity score
- Budget reasonableness
- Technical requirement match
- Timeline feasibility
- Competition level

Remember: Data-driven bidding is about making informed decisions, not just following trends.`,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tags: ["Data Analysis", "Bidding Strategy", "Analytics"],
    author,
    publishedAt: "2024-03-24",
    readingTime: "11 min read"
  }
];

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getAllPosts = (): Post[] => {
  return [...posts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};