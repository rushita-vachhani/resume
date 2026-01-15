// import { ExperienceItem } from "./types"; // Assuming types are defined, or define interface here

export interface ExperienceItem {
  year: string;
  title: string;
  company?: string;
  context?: string;
  description: string;
  type?: "work" | "education" | "goal"; // Added to style future differently if needed
}

export const experienceData: ExperienceItem[] = [
  {
    year: "2016",
    title: "Bachelor of Computer Applications",
    company: "GLS University, India",
    context: "Gold Medalist | Hackathon Winner",
    description: "Secured 1st Rank in Health & Wellness at National Hackathon (Govt of Gujarat). Focus: OOP, C++, Java, and Data Structures[cite: 2, 4, 5, 25].",
    type: "education"
  },
  {
    year: "2019",
    title: "Sr. Technical Analyst & Head of Business Growth",
    company: "Square Infosoft, India",
    context: "Enterprise Web & Mobile Platforms",
    description: "Led end-to-end development of scalable applications. [cite_start]Managed CI/CD pipelines, UI/UX consistency, and RESTful API design using Java and SwiftUI[cite: 26, 27, 28].",
    type: "work"
  },
  {
    year: "2024",
    title: "Product Owner & Sr. Software Engineer",
    company: "Outright Solutions, India",
    context: "(JOTS360) HIPAA-compliant Healthcare App",
    description: "Owned product roadmap. [cite_start]Designed scalable backend architecture and real-time data pipelines using Advanced React, Node.js, and Express[cite: 7, 8].",
    type: "work"
  },
  {
    year: "2025",
    title: "Master’s Student – Computer Software Engineering",
    company: "Northeastern University, Boston, MA",
    context: "Expected Graduation: 2027",
    description: "Focused on System Design, Algorithms, and Cloud Computing. [cite_start]Building data-intensive applications and scalable architectures[cite: 29, 30, 31, 32].",
    type: "education"
  },
  {
    year: "2026",
    title: "Co-op: Software Engineer Intern",
    company: "Fortune 500 Company (Goal)",
    context: "Cloud/SaaS Platforms",
    description: "Targeting roles developing scalable cloud platforms and microservices architecture using AWS Lambda and React.js[cite: 14, 15, 16, 17].",
    type: "goal"
  },
  {
    year: "2027",
    title: "Software Engineer II (Full-time)",
    company: "Fortune 500 SaaS Product Company (Goal)",
    context: "Enterprise Software Solutions",
    description: "Building Data Analytics platforms and leading technical implementation of CI/CD and Containerization (Docker/Kubernetes)[cite: 33, 34, 35].",
    type: "goal"
  },
  {
    year: "2032",
    title: "Product Manager / Sr. Architect",
    company: "Established Tech Organization (Goal)",
    context: "Healthcare Technology",
    description: "Leading large SaaS projects integrating AI analytics for medical diagnostics. [cite_start]Strategic planning and architectural vision[cite: 20, 21, 23].",
    type: "goal"
  },
  {
    year: "2040",
    title: "VP of Engineering / CTO",
    company: "Global Tech Organization (Goal)",
    context: "Executive Leadership",
    description: "Defining technical strategy, overseeing engineering organizations, and driving innovation leadership and ethical AI[cite: 36, 37].",
    type: "goal"
  },
];