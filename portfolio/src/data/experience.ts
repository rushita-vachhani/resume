export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Tech Company",
    period: "Jan 2024 - Present",
    description:
      "Developing scalable web applications using React, Next.js, and TypeScript. Collaborating with cross-functional teams to improve user experience and performance.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Solutions Inc.",
    period: "Jun 2021 - Dec 2023",
    description:
      "Built and maintained RESTful APIs using Node.js and Express. Designed and optimized database schemas in PostgreSQL. Implemented CI/CD pipelines.",
    skills: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "Jan 2020 - May 2021",
    description:
      "Created responsive landing pages and email templates. Assisted in frontend development using JavaScript and jQuery.",
    skills: ["JavaScript", "HTML/CSS", "Figma", "Bootstrap"],
  },
];