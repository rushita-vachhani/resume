export interface Project {
  title: string;
  description: string;
  skills: string[];
  gitUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Glimpse AI - Real-Time Sports Commentary System",
    description: "Built a low-latency, real-time commentary platform delivering AI-generated multilingual sports insights. Designed modular React + Node.js pipelines to handle high-frequency updates with optimized client–server communication and structured error handling. • Implemented WebSocket-based real-time updates for live event streams • Reduced UI latency under high update frequency by optimizing data flow • Applied modular backend architecture with validated API contracts • Ensured system stability through structured exception handling",
    skills: ["React", "Node.js","WebSockets","REST APIs","MongoDB","Swagger","OpenAI API"],
    gitUrl: "https://github.com/rushita-vachhani/GLIMPSE.git",    
  },
  {
    title: "Comprehensive Rail Reservation System",
    description: "Engineered a production-style rail ticketing system using Oracle SQL and PL/SQL with strict transactional integrity and multi-layered booking validation. Designed schema constraints, stored procedures, and analytical views to simulate real-world demand scenarios. • Implemented ACID-compliant transaction workflows for booking & cancellation • Designed normalized relational schemas with indexing strategies • Built PL/SQL procedures for waitlist automation and seat allocation • Created analytical reporting views for demand and utilization metrics",
    skills: ["Oracle SQL","PL/SQL","Stored Procedures","Database Design","Transactions","Data Integrity"],
    gitUrl: "https://github.com/rushita-vachhani/damg6210-crs-project.git"
  },
  {
    title: "Customer Churn Prediction - Production ML Pipeline",
    description: "Developed an end-to-end churn prediction pipeline on 7,000+ customer records using Logistic Regression and Random Forest models. Focused on leakage prevention, threshold optimization, and statistically valid evaluation. • Achieved ~0.85 ROC-AUC using stratified validation • Tuned precision-recall thresholds to improve recall for high-risk users • Designed modular preprocessing pipelines to prevent data leakage • Evaluated model robustness using feature importance and cross-validation",
    skills: ["Python","scikit-learn","Pandas","Feature Engineering","ROC-AUC","Model Evaluation"],
    gitUrl: "https://github.com/rushita-vachhani/customer-churn-ml-pipeline.git"
  },
 {
    title: "JOTS360 - HIPAA-Compliant Healthcare Platform",
    description: "Architected a HIPAA-compliant backend platform securing healthcare data for 1,000+ providers. Designed Java and Spring Boot services with role-based access control (RBAC), secure REST APIs, and structured data validation. • Implemented secure authentication and RBAC-based authorization • Reduced production incidents by 30% through structured debugging • Migrated legacy services to modular REST-based architecture • Ensured compliance with federal healthcare data privacy standards",
    skills: ["Java","Spring Boot","REST APIs","RBAC","PostgreSQL","Secure Architecture"]
  },
  
];