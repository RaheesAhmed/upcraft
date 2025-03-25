export interface Template {
  id: number;
  title: string;
  description: string;
  templates: string[];
  color: string;
  icon: string;
}

export const templateCategories: Template[] = [
  {
    id: 1,
    title: "Technical Development",
    description: "Templates for web, mobile, and software development proposals",
    templates: [
      // Full-Stack Development Prompts
      "Write a concise introduction as a full-stack developer with [X] years of experience, addressing [Client Name] and referencing their need for a [specific feature, e.g., scalable e-commerce platform].",
      "Explain how my skills in [e.g., React, Node.js, MongoDB] will deliver a seamless full-stack solution for [Client Name]'s [project type, e.g., SaaS app].",
      "Summarize [Client Name]'s job post for a full-stack project and show how my experience with [specific tech] meets their requirements.",
      "Propose a full-stack architecture for [Client Name]'s project, using [e.g., Next.js for frontend, Express for backend] to ensure scalability and performance.",
      "Break down a 4-week timeline for [Client Name]'s full-stack project, including design, frontend coding, backend integration, and testing.",
      "Suggest a competitive price for [Client Name]'s full-stack project, justifying it with my expertise in [specific tools] and the value of clean, maintainable code.",
      "Add links to my portfolio showcasing full-stack projects like [e.g., a React-Django app], with a note on how they relate to [Client Name]'s needs.",
      "Highlight how my full-stack experience will save [Client Name] time and money by handling both frontend and backend efficiently.",
      "Close my full-stack proposal with a call to action, inviting [Client Name] for a quick chat to discuss their project goals.",
      "Polish my full-stack proposal for [Client Name], ensuring it’s error-free, concise, and professionally formatted.",

      // Frontend Specialist Prompts
      "Introduce myself as a frontend developer with expertise in [e.g., Vue.js, Tailwind CSS], excited to work on [Client Name]'s [e.g., responsive landing page].",
      "Detail my frontend skills in [e.g., JavaScript, CSS animations] and how they’ll enhance [Client Name]'s [specific project goal, e.g., user engagement].",
      "Interpret [Client Name]'s frontend needs from their job post and align them with my experience in [e.g., building pixel-perfect UIs].",
      "Outline my frontend development process for [Client Name], including wireframing, coding with [specific framework], and browser testing.",
      "Provide a 2-week timeline for [Client Name]'s frontend project, with milestones like design approval and final deployment.",
      "Offer a pricing plan for [Client Name]'s frontend work, explaining how my efficiency in [e.g., React] keeps costs low.",
      "Link to a frontend project in my portfolio (e.g., [link]), noting how its [e.g., fast load time] benefits [Client Name]'s project.",
      "Emphasize how my frontend optimizations (e.g., SEO, accessibility) will boost [Client Name]'s site performance.",
      "End my frontend proposal with an enthusiastic invitation for [Client Name] to discuss their vision further.",
      "Refine my frontend proposal for [Client Name], ensuring clarity, professionalism, and no typos.",

      // Backend Architecture Prompts
      "Present myself as a backend developer skilled in [e.g., Python, PostgreSQL], eager to build [Client Name]'s [e.g., secure API].",
      "Show how my backend expertise in [e.g., Laravel, RESTful APIs] will support [Client Name]'s [specific feature, e.g., user authentication].",
      "Restate [Client Name]'s backend requirements and connect them to my success in [e.g., optimizing database queries].",
      "Describe my backend approach for [Client Name], using [e.g., Node.js with Express] for a robust, scalable system.",
      "Set a 3-week timeline for [Client Name]'s backend project, covering schema design, API development, and testing.",
      "Propose a fair rate for [Client Name]'s backend work, tied to my ability to deliver [e.g., secure, high-performance servers].",
      "Include a portfolio link to a backend project (e.g., [link]), explaining its relevance to [Client Name]'s goals.",
      "Stress how my backend skills will ensure [Client Name]'s project is reliable and future-proof.",
      "Wrap up my backend proposal with a confident call to action for [Client Name] to connect with me.",
      "Edit my backend proposal for [Client Name] to ensure it’s polished, technical yet accessible, and error-free.",

      // Mobile App Development Prompts
      "Introduce myself as a mobile app developer with [X] years in [e.g., Flutter, Swift], thrilled about [Client Name]'s [e.g., iOS app idea].",
      "Highlight my mobile dev skills in [e.g., React Native, Firebase] and their fit for [Client Name]'s [specific app feature].",
      "Break down [Client Name]'s mobile app needs from their post and match them to my experience with [e.g., cross-platform apps].",
      "Explain my mobile app development plan for [Client Name], using [e.g., Flutter] for fast, native-like performance.",
      "Offer a 5-week timeline for [Client Name]'s mobile app, including prototyping, coding, and app store submission.",
      "Suggest a pricing model for [Client Name]'s mobile app, reflecting my efficiency in [e.g., reusable code].",
      "Share a link to a mobile app I built (e.g., [link]), noting how it aligns with [Client Name]'s project.",
      "Describe how my mobile app expertise will give [Client Name] a user-friendly, bug-free product.",
      "Close my mobile app proposal with a friendly nudge for [Client Name] to schedule a call.",
      "Perfect my mobile app proposal for [Client Name], making it concise, professional, and typo-free.",

      // General Web Development Prompts
      "Craft an intro as a web developer with a passion for [e.g., modern frameworks], addressing [Client Name] and their [specific project].",
      "List my web dev skills (e.g., [HTML, CSS, WordPress]) and connect them to [Client Name]'s [e.g., blog site] needs.",
      "Rephrase [Client Name]'s web project goals and show how my experience in [e.g., custom themes] fits perfectly.",
      "Propose a web solution for [Client Name], detailing my use of [e.g., Shopify, JavaScript] for their [specific goal].",
      "Give a timeline for [Client Name]'s web project, like ‘Day 3: Design mockup; Day 10: Launch-ready site.’",
      "Quote a price for [Client Name]'s web project, explaining how my [e.g., fast turnaround] adds value.",
      "Link to a web project in my portfolio (e.g., [link]), tying its success to [Client Name]'s objectives.",
      "Focus on how my web dev work will improve [Client Name]'s [e.g., conversion rates, user experience].",
      "End my web proposal with a proactive call to action, asking [Client Name] to reply or chat soon.",
      "Revise my web proposal for [Client Name], ensuring it’s sharp, professional, and ready to impress."
    ],
    color: "bg-emerald-100 text-emerald-800",
    icon: "code"
  },
  {
    id: 2,
    title: "Creative & Design",
    description: "Templates for UI/UX, graphic design, and creative projects",
    templates: [
      // UI/UX Design Prompts
      "Introduce myself as a UI/UX designer with [X] years of experience, addressing [Client Name] and their need for [e.g., an intuitive app interface].",
      "Highlight my UI/UX skills in [e.g., Figma, user testing] and how they’ll improve [Client Name]'s [e.g., user retention].",
      "Summarize [Client Name]'s UI/UX goals from their job post and align them with my expertise in [e.g., wireframing].",
      "Propose a UI/UX process for [Client Name], including research, prototyping with [e.g., Adobe XD], and usability testing.",
      "Offer a 3-week timeline for [Client Name]'s UI/UX project, with phases like user flows and final design handoff.",
      "Suggest a fair price for [Client Name]'s UI/UX work, tied to my ability to deliver [e.g., user-centered designs].",
      "Link to a UI/UX portfolio piece (e.g., [link]), explaining how it relates to [Client Name]'s project.",
      "Emphasize how my UI/UX designs will enhance [Client Name]'s [e.g., conversion rates, brand appeal].",
      "Close my UI/UX proposal with a call to action, inviting [Client Name] to discuss their users’ needs.",
      "Polish my UI/UX proposal for [Client Name], ensuring it’s visually appealing and error-free.",

      // Brand Identity Prompts
      "Present myself as a brand identity designer eager to help [Client Name] with [e.g., a memorable logo].",
      "Detail my branding skills in [e.g., typography, color theory] and their fit for [Client Name]'s [e.g., startup launch].",
      "Restate [Client Name]'s branding needs and connect them to my success in [e.g., creating cohesive identities].",
      "Describe my brand identity process for [Client Name], including mood boards and final asset delivery.",
      "Provide a 2-week timeline for [Client Name]'s branding project, with milestones like concept drafts and revisions.",
      "Quote a price for [Client Name]'s branding work, justifying it with my [e.g., market research skills].",
      "Share a branding portfolio link (e.g., [link]), noting its relevance to [Client Name]'s vision.",
      "Focus on how my branding will give [Client Name] a strong, recognizable presence.",
      "End my branding proposal with a friendly nudge for [Client Name] to chat about their brand story.",
      "Refine my branding proposal for [Client Name], ensuring it’s creative and professional.",

      // Web Design Prompts
      "Introduce myself as a web designer with expertise in [e.g., responsive layouts], excited for [Client Name]'s [e.g., portfolio site].",
      "Show how my web design skills in [e.g., Sketch, CSS] will elevate [Client Name]'s [e.g., online visibility].",
      "Interpret [Client Name]'s web design needs and match them to my experience with [e.g., modern aesthetics].",
      "Outline my web design approach for [Client Name], using [e.g., Webflow] for a stunning, functional site.",
      "Set a 3-week timeline for [Client Name]'s web design, including mockups, revisions, and launch.",
      "Propose a pricing plan for [Client Name]'s web design, reflecting my [e.g., fast delivery].",
      "Include a web design project link (e.g., [link]), tying it to [Client Name]'s goals.",
      "Stress how my web design will improve [Client Name]'s [e.g., user engagement, bounce rates].",
      "Wrap up my web design proposal with an invitation for [Client Name] to discuss their style preferences.",
      "Edit my web design proposal for [Client Name], keeping it sleek and typo-free.",

      // Illustration Prompts
      "Present myself as an illustrator with [X] years in [e.g., digital art], thrilled about [Client Name]'s [e.g., book cover].",
      "Highlight my illustration skills in [e.g., Procreate, vector art] and their fit for [Client Name]'s [e.g., marketing campaign].",
      "Break down [Client Name]'s illustration needs and align them with my [e.g., custom character design] experience.",
      "Explain my illustration process for [Client Name], from sketches to final artwork in [e.g., Illustrator].",
      "Offer a 2-week timeline for [Client Name]'s illustration project, with steps like drafts and coloring.",
      "Suggest a price for [Client Name]'s illustration work, based on my [e.g., unique style].",
      "Link to an illustration portfolio piece (e.g., [link]), showing its connection to [Client Name]'s project.",
      "Describe how my illustrations will make [Client Name]'s [e.g., brand, story] stand out.",
      "Close my illustration proposal with a call to action for [Client Name] to share their creative brief.",
      "Perfect my illustration proposal for [Client Name], ensuring it’s vibrant and professional.",

      // General Creative Prompts
      "Craft an intro as a creative designer passionate about [e.g., storytelling], addressing [Client Name]'s [specific project].",
      "List my creative skills (e.g., [photography, layout design]) and connect them to [Client Name]'s [e.g., ad campaign].",
      "Rephrase [Client Name]'s creative goals and show how my [e.g., artistic vision] fits perfectly.",
      "Propose a creative solution for [Client Name], detailing my use of [e.g., Canva, Photoshop] for their [specific need].",
      "Give a timeline for [Client Name]'s creative project, like ‘Day 5: Initial concepts; Day 15: Final files.’",
      "Quote a price for [Client Name]'s creative work, explaining my [e.g., attention to detail].",
      "Link to a creative project in my portfolio (e.g., [link]), tying it to [Client Name]'s objectives.",
      "Focus on how my creative work will boost [Client Name]'s [e.g., brand impact, audience appeal].",
      "End my creative proposal with a proactive call to action, asking [Client Name] to reply soon.",
      "Revise my creative proposal for [Client Name], ensuring it’s inspiring and polished."
    ],
    color: "bg-purple-100 text-purple-800",
    icon: "smile"
  },
  {
    id: 3,
    title: "Business & Consulting",
    description: "Templates for business strategy and consulting proposals",
    templates: [
      // Business Strategy Prompts
      "Introduce myself as a business strategist with [X] years of experience, addressing [Client Name] and their goal of [e.g., scaling operations].",
      "Highlight my strategy skills in [e.g., SWOT analysis, growth planning] and how they’ll help [Client Name]'s [e.g., revenue goals].",
      "Summarize [Client Name]'s strategy needs from their job post and align them with my [e.g., competitive analysis] expertise.",
      "Propose a business strategy plan for [Client Name], including [e.g., market entry tactics] and deliverables.",
      "Offer a 4-week timeline for [Client Name]'s strategy project, with phases like research and final recommendations.",
      "Suggest a fair price for [Client Name]'s strategy work, tied to my [e.g., proven ROI results].",
      "Link to a strategy case study (e.g., [link]), explaining its relevance to [Client Name]'s business.",
      "Emphasize how my strategy will drive [Client Name]'s [e.g., market share, efficiency].",
      "Close my strategy proposal with a call to action, inviting [Client Name] to discuss their objectives.",
      "Polish my strategy proposal for [Client Name], ensuring it’s data-driven and professional.",

      // Market Research Prompts
      "Present myself as a market researcher eager to support [Client Name] with [e.g., customer insights].",
      "Detail my research skills in [e.g., surveys, data analysis] and their fit for [Client Name]'s [e.g., product launch].",
      "Restate [Client Name]'s research needs and connect them to my success in [e.g., identifying trends].",
      "Describe my market research process for [Client Name], using [e.g., Google Analytics, interviews].",
      "Provide a 3-week timeline for [Client Name]'s research project, with steps like data collection and reporting.",
      "Quote a price for [Client Name]'s research work, justifying it with my [e.g., actionable insights].",
      "Share a research portfolio link (e.g., [link]), noting its value to [Client Name]'s goals.",
      "Focus on how my research will give [Client Name] a competitive edge.",
      "End my research proposal with a friendly nudge for [Client Name] to discuss their market.",
      "Refine my research proposal for [Client Name], ensuring it’s clear and analytical.",

      // Financial Analysis Prompts
      "Introduce myself as a financial analyst with expertise in [e.g., forecasting], excited for [Client Name]'s [e.g., budget review].",
      "Show how my financial skills in [e.g., Excel, cost analysis] will benefit [Client Name]'s [e.g., profitability].",
      "Interpret [Client Name]'s financial needs and match them to my experience with [e.g., cash flow models].",
      "Outline my financial analysis approach for [Client Name], using [e.g., QuickBooks] for accurate insights.",
      "Set a 2-week timeline for [Client Name]'s financial project, including data review and recommendations.",
      "Propose a pricing plan for [Client Name]'s financial work, reflecting my [e.g., precision].",
      "Include a financial analysis link (e.g., [link]), tying it to [Client Name]'s objectives.",
      "Stress how my analysis will improve [Client Name]'s [e.g., financial health, decision-making].",
      "Wrap up my financial proposal with an invitation for [Client Name] to discuss their numbers.",
      "Edit my financial proposal for [Client Name], keeping it concise and professional.",

      // Project Management Prompts
      "Present myself as a project manager with [X] years in [e.g., Agile], thrilled about [Client Name]'s [e.g., team coordination].",
      "Highlight my PM skills in [e.g., Trello, risk management] and their fit for [Client Name]'s [e.g., tight deadlines].",
      "Break down [Client Name]'s PM needs and align them with my [e.g., on-time delivery] track record.",
      "Explain my project management plan for [Client Name], using [e.g., Jira] for seamless execution.",
      "Offer a 5-week timeline for [Client Name]'s project, with milestones like kickoff and closure.",
      "Suggest a price for [Client Name]'s PM work, based on my [e.g., team alignment skills].",
      "Link to a PM success story (e.g., [link]), showing its connection to [Client Name]'s project.",
      "Describe how my PM expertise will ensure [Client Name]'s project stays on track and budget.",
      "Close my PM proposal with a call to action for [Client Name] to schedule a planning call.",
      "Perfect my PM proposal for [Client Name], ensuring it’s structured and error-free.",

      // General Consulting Prompts
      "Craft an intro as a consultant passionate about [e.g., optimization], addressing [Client Name]'s [specific challenge].",
      "List my consulting skills (e.g., [process improvement, training]) and connect them to [Client Name]'s [e.g., growth plans].",
      "Rephrase [Client Name]'s consulting goals and show how my [e.g., strategic advice] fits perfectly.",
      "Propose a consulting solution for [Client Name], detailing my use of [e.g., data-driven methods].",
      "Give a timeline for [Client Name]'s consulting project, like ‘Week 1: Assessment; Week 3: Final report.’",
      "Quote a price for [Client Name]'s consulting work, explaining my [e.g., measurable results].",
      "Link to a consulting project in my portfolio (e.g., [link]), tying it to [Client Name]'s needs.",
      "Focus on how my consulting will boost [Client Name]'s [e.g., efficiency, profits].",
      "End my consulting proposal with a proactive call to action, asking [Client Name] to reply soon.",
      "Revise my consulting proposal for [Client Name], ensuring it’s sharp and professional."
    ],
    color: "bg-blue-100 text-blue-800",
    icon: "trending-up"
  }
];