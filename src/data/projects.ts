export interface Project {
  title: string;
  description: string;
  skills: string[];
  gitUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Glimpse AI - Sports Commentary Platform",
    description: "Built real-time React + Node.js UI pipelines to display AI-generated multilingual content safely and responsively. Implemented modular UI components and optimized client–server communication for high-frequency updates. Applied performance tuning and structured error handling to maintain system reliability.",
    skills: ["React", "Node.js", "OpenAI API", "MongoDB", "WebSockets", "Swagger"],
    gitUrl: "https://github.com/rushita-vachhani/GLIMPSE.git",    
  },
  {
    title: "Comprehensive Rail Reservation System",
    description: "Developed a production-grade rail ticketing system using Oracle SQL and PL/SQL, featuring advanced booking validation, waitlist management, transactional integrity, and secure API-style access. Created multi-dimensional reporting views to analyze passenger demographics, class utilization, and weekday vs weekend demand.",
    skills: ["Oracle SQL", "PL/SQL", "Database Design", "Stored Procedures", "Exception Handling", "Data Integrity", "Analytical Views", "Secure Architecture", "Transaction Management"],
    gitUrl: "https://github.com/rushita-vachhani/damg6210-crs-project.git"
  },
  {
    title: "MiNd TuNes - Music Player Application",
    description: "Built interactive Android UI with emotion-recognition APIs to personalize user playlists in real-time. Designed efficient data flows and responsive components to improve user trust and interface experience.",
    skills: ["Android", "Kotlin", "Java", "MongoDB", "RESTful API", "Face Recognition"]
  },
  // {
  //   title: "Glimpse AI - Sports Commentary Platform",
  //   description: "Built real-time React + Node.js UI pipelines to display AI-generated multilingual content safely and responsively. Implemented modular UI components and optimized client–server communication for high-frequency updates. Applied performance tuning and structured error handling to maintain system reliability.",
  //   skills: ["React", "Node.js", "OpenAI API", "MongoDB", "WebSockets", "Swagger"],
  //   gitUrl: "https://github.com/rushita-vachhani/GLIMPSE.git",
  //   demoUrl: "https://your-link-here.com"
  // },
];