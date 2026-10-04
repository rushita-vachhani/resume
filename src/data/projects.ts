export interface Project {
  title: string;
  description: string;
  skills: string[];
  gitUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Glimpse AI - Real-Time Sports Commentary",
    description: "Built a React and Node.js application for AI-generated sports commentary, connecting content generation with a live-updating user interface. • Developed client-server workflows for processing and displaying AI-generated commentary. • Optimized asynchronous data flow to handle frequent content updates. • Implemented error handling across content-processing and interface updates.",
    skills: ["React", "Node.js", "OpenAI API","REST APIs","MongoDB","Swagger"],
    gitUrl: "https://github.com/rushita-vachhani/GLIMPSE.git",    
  },
  {
    title: "JOTS360 - Healthcare Platform",
    description: "Contributed to healthcare backend development using Java and Spring Boot, focusing on access control, modular APIs, and production reliability. • Developed REST APIs with role-based access control for healthcare workflows. • Modernized legacy backend functionality into modular services. • Diagnosed API failures and implemented structured monitoring and logging. • Collaborated with product and QA teams across four production releases.",
    skills: ["Java","PL/SQL","Spring Boot","REST APIs","RBAC"]
  },
  {
    title: "Rail Reservation System - Database Design",
    description: "Built a database-backed reservation project using Oracle SQL and PL/SQL to model booking, cancellation, waitlisting, and seat allocation. • Designed normalized relational schemas with constraints to maintain booking data integrity. • Implemented booking and cancellation workflows using database transactions. • Developed PL/SQL procedures for waitlist processing and seat allocation. • Created reporting views for reservation demand and seat utilization.",
    skills: ["Oracle SQL","PL/SQL","Stored Procedures","Transactions"],
    gitUrl: "https://github.com/rushita-vachhani/damg6210-crs-project.git"
  },
 {
    title: "Customer Churn Prediction - ML Pipeline",
    description: "Developed a churn prediction pipeline using Python and scikit-learn on 7,000+ customer records, focusing on preprocessing, leakage prevention, and model evaluation. • Trained and compared Logistic Regression and Random Forest models. • Trained and compared Logistic Regression and Random Forest models. • Built preprocessing and feature-engineering workflows to prevent data leakage. • Evaluated precision-recall tradeoffs to select a decision threshold for identifying customers at risk of churn.",
    skills: ["Python","scikit-learn","SQL"],
    gitUrl: "https://github.com/rushita-vachhani/customer-churn-ml-pipeline.git"
  },
  
];