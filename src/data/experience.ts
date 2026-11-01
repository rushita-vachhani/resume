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
      "Architecting an enterprise live streaming platform using AWS, Akamai CDN, and WebRTC eCDN offloading, with real-time AI captioning in 7 languages and ephemeral event-based pipeline teardowns.",
      "Leading migration of a monolith to a NestJS and Nuxt 3 monorepo deployed across Kubernetes clusters in 3 regions, with automated feature branch environments and horizontal scaling.",
      "Engineering event and collaboration infrastructure using Socket.IO and Redis Pub/Sub across 10 namespaces, powering moderated Q&A, live polls, slide synchronization, and viewer analytics for 9k+ concurrent attendees.",
      "Implementing multi-provider authentication (SAML2, OIDC, MSAL, JWT), XSS/CSRF mitigations, PII encryption, ClamAV file scanning, and OWASP-aligned audit logging with optimistic locking and field-level reverts.",
      "Automating CI/CD with GitHub Actions and SAP Piper, HashiCorp Vault secret injection, Kaniko containerization, and automated TLS/DNS provisioning for multi-environment rollouts.",
    ],
    skills: ["TypeScript", "Nuxt 3", "NestJS", "AWS", "Kubernetes", "Socket.IO", "Redis", "CI/CD"],
  },
  {
    id: 2,
    role: "Teaching Assistant",
    company: "Northeastern University, Boston, MA",
    period: "Jan 2026 - Apr 2026",
    description: [
      "Improved database design accuracy by 25% across 15+ student systems by reviewing normalized schemas, SQL queries, and distributed data models.",
      "Helped diagnose concurrency issues by analyzing transaction isolation levels and locking mechanisms.",
      "Mentored 25+ students in database architecture, indexing strategies, schema normalization, and distributed storage.",
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
    period: "Apr 2024 - Dec 2024",
    description: [
      "Architected and evolved HIPAA-compliant healthcare backend services supporting 1,000+ providers using secure Java Spring Boot APIs, RBAC authorization, and real-time updates via Kafka and Spring Events.",
      "Reduced production incidents by 30% through log monitoring, live debugging, alerting, synthetic monitoring, error monitoring, and anomaly monitors.",
      "Enhanced scalability and resiliency through microservices, asynchronous processing, multithreading, and caching to support high transaction volumes.",
    ],
    skills: ["Java", "Spring Boot", "Kafka", "Microservices", "RBAC", "Monitoring"],
  },
  {
    id: 5,
    role: "Technical Analyst",
    company: "Square Infosoft, Gujarat, India",
    period: "Jul 2019 - Mar 2024",
    description: [
      "Developed Android, iOS, and React Native applications used by 10M+ users, including KukuFM, SpeakeasyGo, and Noticeboard.",
      "Scaled backend infrastructure with Node.js and Spring Boot microservices and concurrent processing.",
      "Integrated Plaid and Apple HealthKit to support financial and health data workflows.",
      "Increased mobile application stability by 25% through crash monitoring, analytics instrumentation, and notification systems."
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
    company: "Bachelor of Computer Science",
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