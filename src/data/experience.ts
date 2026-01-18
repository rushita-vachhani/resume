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
    role: "Teaching Assistant",
    company: "Northeastern University, Boston, MA",
    period: "Jan 2026 - Present",
    description:
      "Data Management and Database Design",
    skills: ["Oracle", "SQL", "DBMS", "Pl/SQL"],
  },
  {
    id: 2,
    role: "Northeastern University (Student)",
    company: "Masters of Computer Software Engineering",
    period: "Jan 2025 - Present",
    description:
      "Courses: Data Science Engineering Methods, Program Structure & Algorithms (A+), Data Management and Database Design (A+), Web Design/User Experience Engineering (A+), User Experience Design/Testing (A+), Concpts of Object-Oriented Design (A+), Career Managmnt for Engineers (A+), Operating Systems (A+)",
    skills: ["3.94/4"],
  },
  {
    id: 3,
    role: "Product Owner & Senior Software Engineer",
    company: "Outright Solutions, Gujarat, India",
    period: "Apr 2024 - Dec 2024",
    description:
      "(JOTS360) Healthcare App | (HIPAA-compliant)",
    skills: ["React", "Node.js", "Express", "Scalable Architecture", "Real-time Data Processing", "Cloud Deployment"],
  },
  {
    id: 4,
    role: "Sr. Technical Analyst & Head of Business Growth",
    company: "Square Infosoft, Gujarat, India",
    period: "Jan 2020 - May 2021",
    description:
      "Created responsive landing pages and email templates. Assisted in frontend development using JavaScript and jQuery.",
    skills: ["Java", "Javascript", "SwiftUI", "AWS", "Git", "UI/UX Design", "CI/CD Pipelines", "Performance Optimization", "RESTful API Design"],
  },
  {
    id: 5,
    role: "Industry Hackathon Recognition",
    company: "GLS University, Gujarat, India",
    period: "Feb 2018 - Apr 2018",
    description:
      "Participated National Hackathon organized by the Government of Gujarat & Secured 1st Rank in Health & Wellness Department",
    skills: ["React", "Java", "MongoDB", "Figma"],
  },
  {
    id: 6,
    role: "GLS University (Student - Gold Medalist)",
    company: "Bachelor of Computer Applications",
    period: "Jul 2016 - Mar 2019",
    description:
      "Courses: Advance Object-Oriented Programming (A+), Python (A+), Advanced Java (A+), DBMS (A+), Information Security (A+), Data Structures (A+), Data Communication & Networks (A+)",
    skills: ["9.69/10"],
  },
];