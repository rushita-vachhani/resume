export interface Project {
  title: string;
  description: string;
  skills: string[];
  gitUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Arias Menu - AI Meal Planner",
    description: "React Native + Supabase app that creates personalized meal plans and grocery lists using AI. Features include dietary restriction filtering and automated shopping list generation.",
    skills: ["React Native", "Supabase", "OpenAI API", "TypeScript"],
    gitUrl: "https://github.com/yourusername/arias-menu",
    demoUrl: "https://your-link-here.com"
  },
  {
    title: "Speedboat AI",
    description: "Next.js + Supabase platform helping agile teams manage risks and priorities with AI insights. Streamlines sprint planning and retrospective analysis.",
    skills: ["Next.js", "Tailwind CSS", "PostgreSQL", "AI Integration"],
    gitUrl: "https://github.com/yourusername/speedboat-ai"
  },
  {
    title: "LivingEd",
    description: "Homeschool planner app built with React Native and Supabase for lesson planning and tracking. Allows parents to schedule curriculum and track student progress.",
    skills: ["React Native", "Redux", "Node.js", "Mobile UI"],
    gitUrl: "https://github.com/yourusername/living-ed"
  },
  {
    title: "Portfolio Website",
    description: "A neumorphic personal portfolio website built with Next.js and Tailwind CSS, featuring dark mode and responsive design.",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    gitUrl: "https://github.com/yourusername/portfolio"
  }
];