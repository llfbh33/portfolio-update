
export const experienceObject = {
  title: "Experience",
  intro:
    "A few areas I’ve worked on professionally, from interactive UI systems to data-driven product features.",
  jobs: [
    {
      company: "Valstorm",
      title: "Web Developer",
      started: 'July 2024',
      ended: "Present"
    }
  ],
  cards: [
    {
      title: "No-Code Dashboard System",
      action: "Collaborated on a no-code dashboard system where users could create and customize their own data-driven interfaces.",
      details: "Built features incrementally, focusing on small components, edge cases, and reliable end-to-end behavior.",
    },
    {
      title: "Query Builder & Data Tools",
      action: "Built core product features including an API query builder with a no-code interface, allowing users to construct and run custom data queries.",
      details: "Revisited SQL concepts to ensure the UI translated cleanly into valid queries, building features incrementally and testing regularly as complexity increased.",
    },
    {
      title: "Data Visualization",
      action: "Created interactive chart components including line, bar, pie, and multi-level visualizations using React and D3.js.",
      details: "Spent time working through D3’s documentation to understand how data maps to visuals, handling scales, formatting, and structure to produce accurate and readable charts.",
    },
    {
      title: "Dynamic UI Features",
      action: "Built dashboard-compatible UI components, including an activity feed that surfaced user events like calls, messages, emails, and notes, with quick access to related data.",
      details: "Structured event data to drive a real-time activity feed, handling ordering, interaction, and navigation so users could quickly move from high-level updates to detailed views.",
    },
    // {
    //   title: "API Integration",
    //   action: "Connected frontend components to backend APIs to drive dynamic, data-driven UI across the application.",
    //   details: "Worked with both global state and API data, shaping and updating information as needed while maintaining consistent structure and alignment with backend schemas.",
    // },
    {
      title: "Rich Text Editor",
      action: "Contributed to building a rich text editor from scratch, adding features for formatting, media embedding, and structured content creation.",
      details: "Expanded the editor with features like headings, lists, media input, and table of contents, focusing on keeping the editing experience flexible while maintaining structured output for consistent content creation.",
    },
    {
      title: "Small Team Collaboration",
      action: "Worked in a small team environment, contributing to planning, team discussions, and communication of product updates to stakeholders.",
      details: "Participated in daily standups and planning sessions, presented work, gave and received feedback, and documented completed features to produce a weekly product update for customers.",
    },
  ]
};

export const projectsObject = {
  title: "Projects",
  intro:
    "A few projects that reflect how I approach building interfaces and systems.",
  cards:
    [
      {
        title: "Pen Crafted",
        text: "A content-heavy application combining structured writing tools, rich text editing, and a social feedback system into a clean, intuitive user experience.",
        images: [
          "penCrafted-3.png",
          "penCrafted-4.png"
        ],
        url: "https://capstone-project-lm4v.onrender.com/",
        gitUrl: "https://github.com/llfbh33/Capstone-Project",
        error: "",
      },
      {
        title: "Fair Share",
        text: "A collaborative expense-sharing application where I contributed reusable UI components, focusing on clean structure and consistent user interactions.",
        images: [
          "fairShare-1.png",
          "fairShare-2.png",
        ],
        url: "https://fairshare-f8a7.onrender.com/",
        gitUrl: "https://github.com/OrangeTabia/fairshare",
        error: "Demo currently limited (backend offline)",
      }, 
      {
        title: "Portfolio",
        text: "A portfolio designed as a UI system, built around reusable components, consistent layout patterns, and interactions that keep complex structures simple and intuitive.",
        images: [
          "portfolio-1.png",
          "portfolio-2.png",
        ],
        url: null,
        gitUrl: "https://github.com/llfbh33/portfolio-update",
        error: "",
      }

    ]
};


export const skillsObject = {
  title: "Skills",
  categories: [
    {
      heading: "Frontend",
      items: ["JavaScript", "React", "TypeScript", "HTML", "CSS"]
    },
    {
      heading: "Tools",
      items: ["Git", "GitHub", "MongoDB", "D3.js"]
    },
    {
      heading: "Currently Learning",
      items: ["TypeScript", "Modern frontend patterns"]
    }
  ]
};


export const heroObject = {
  intro: "Hello, I'm Aubrie",
  introStatement: "I enjoy building interfaces that make complex systems feel simple.",
  workingOn: "I'm currently refining my portfolio and building interactive, component-driven UI systems."
}