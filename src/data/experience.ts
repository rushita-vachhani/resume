export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "SAP - Software Engineer Intern",
    company: "SAP, Newtown Square, PA",
    period: "May 2026 - Present",
    description: [
      "Developing full-stack audit functionality using Nuxt 3, NestJS, and TypeScript, enabling change tracking, readable change histories, field-level revert, and deep-link navigation across 15+ entity types.",
      "Implementing server-side search, debounced queries, and lazy pagination to support efficient browsing of thousands of audit records.",
      "Implemented optimistic locking and conflict handling to detect concurrent modifications during field-level revert operations.",
      "Applied input validation, field allowlists, and safe rendering practices to audit interfaces and update workflows.",
      "Consolidated 3 audit views into a reusable table component, centralizing search, sorting, pagination, and refresh logic.",
    ],
    skills: ["TypeScript", "Nuxt 3", "NestJS", "Vue 3"],
  },
  {
    id: 2,
    role: "Teaching Assistant",
    company: "Northeastern University, Boston, MA",
    period: "Jan 2026 - April 2027",
    description: [
      "Reviewed database schemas and SQL queries across 15+ student systems, providing feedback on normalization, indexing, and data integrity.",
      "Helped diagnose concurrency issues by analyzing transaction isolation levels and locking mechanisms.",
      "Mentored 25+ students in database design, query development, and troubleshooting.",
    ],
    skills: ["SQL", "Database Design", "Indexing", "Transactions"],
  },
  {
    id: 3,
    role: "Northeastern University",
    company: "Masters of Computer Software Engineering",
    period: "Jan 2025 - Present",
    description: [
      "Pursuing an M.S. in Computer Software Engineering, with expected graduation in April 2027.",
      "Completed academic software projects and gained practical experience through a database teaching assistant appointment and an ongoing internship at SAP.",
      "Courses: Data Science Engineering Methods, Program Structure & Algorithms (A+), Data Management and Database Design (A+), Web Design/User Experience Engineering (A+), User Experience Design/Testing (A+), Concpts of Object-Oriented Design (A+), Career Managmnt for Engineers (A+), Operating Systems (A+)",
    ],
    skills: ["3.95/4"],
  },
  {
    id: 4,
    role: "Senior Software Engineer & Product Owner",
    company: "Outright Solutions, Gujarat, India",
    period: "Apr 2024 - Nov 2024",
    description: [
      "Developed Java and Spring Boot backend services for JOTS360, a healthcare data platform, implementing REST APIs and role-based access control.",
      "Modernized legacy backend functionality into modular services to improve maintainability and support continued product development.",
      "Diagnosed API data-flow failures and implemented structured monitoring and logging to improve production reliability.",
      "Collaborated with QA, product, and engineering stakeholders to deliver healthcare features across four production releases.",
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "RBAC", "Cloud Deployment"],
  },
  {
    id: 5,
    role: "Senior Technical Analyst & Software Engineer",
    company: "Square Infosoft, Gujarat, India",
    period: "Jul 2019 - Apr 2024",
    description: [
      "Developed Android, iOS, and React Native applications for products including KukuFM, SpeakeasyGo, and Noticeboard.",
      "Built modular Node.js services to support backend reporting workflows.",
      "Integrated Plaid and Apple HealthKit to support financial and health data workflows.",
      "Implemented crash monitoring, analytics instrumentation, and notification systems to improve mobile application stability."
    ],
    skills: ["React Native", "React", "Node.js", "Mobile Development", "API Integrations"],
  },
  {
    id: 6,
    role: "Industry Hackathon Recognition",
    company: "GLS University, Gujarat, India",
    period: "Feb 2018 - Apr 2018",
    description: [
      "Participated in the National Hackathon organized by the Government of Gujarat.",
      "Developed DigiMed solution for healthcare and wellness department to digitize their entire processes by implementing a web-based platform.",
      "Secured 1st Rank  in the Health & Wellness Department and got the Sponsorship for the project.",
    ],
    skills: ["React", "C/C++", "Java", "MongoDB", "Figma"],
  },
  {
    id: 7,
    role: "GLS University (Student - Gold Medalist)",
    company: "Bachelor of Computer Applications",
    period: "Jul 2016 - Mar 2019",
    description: [
      "Courses: Advance Object-Oriented Programming (A+)",
      "Python (A+)",
      "Advanced Java (A+)",
      "DBMS (A+)",
      "Information Security (A+)",
      "Data Structures (A+)",
      "Data Communication & Networks (A+)",
    ],
    skills: ["3.88/4"],
  },
];