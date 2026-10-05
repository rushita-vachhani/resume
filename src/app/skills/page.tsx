import SkillSection from "../components/SkillSection";

export default function SkillsPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header className="mb-2 w-full">
        <h1 className="text-4xl font-bold text-body-text mb-4">
          Technical Skills
        </h1>
        <p className="text-text-secondary text-md leading-relaxed">
          Technologies and engineering practices applied across professional work, graduate coursework, and software projects.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
        <SkillSection
          title="Programming Languages"
          icon="bi-braces"
          description="Languages used across application development, database work, and academic projects."
          skills={[
            { name: "Java", level: 85, icon: "bi-filetype-java" },
            { name: "TypeScript", level: 90, icon: "bi-code-square" },
            { name: "JavaScript", level: 90, icon: "bi-filetype-js" },
            { name: "SQL", level: 80, icon: "bi-database" },
            { name: "Python", level: 85, icon: "bi-filetype-py" },
          ]}
        />

        <SkillSection
          title="Backend Development"
          icon="bi-server"
          description="Built backend services and REST APIs for healthcare applications, reporting workflows, and enterprise audit features."
          skills={[
            { name: "Spring Boot", level: 85, icon: "bi-power" },
            { name: "Node.js", level: 90, icon: "bi-hdd-network" },
            { name: "NestJS", level: 90, icon: "bi-diagram-3" },
            { name: "REST APIs", level: 85, icon: "bi-arrow-left-right" },
            { name: "Role-Based Access Control", level: 80, icon: "bi-shield-lock" },
          ]}
        />

        <SkillSection
          title="Frontend & Mobile Development"
          icon="bi-layout-text-window"
          description="Developed web interfaces, reusable components, and mobile applications across SAP and previous industry roles."
          skills={[
            { name: "React", level: 80, icon: "bi-code-slash" },
            { name: "Nuxt 3", level: 70, icon: "bi-window-stack" },
            { name: "React Native", level: 70, icon: "bi-phone" },
            { name: "Responsive UI", level: 75, icon: "bi-display" },
          ]}
        />

        <SkillSection
          title="Databases & Data Integrity"
          icon="bi-database"
          description="Applied relational database design, query optimization, and concurrency concepts in projects and database teaching."
          skills={[
            { name: "PostgreSQL", level: 90, icon: "bi-database" },
            { name: "Oracle SQL", level: 85, icon: "bi-database-fill" },
            { name: "PL/SQL", level: 85, icon: "bi-filetype-sql" },
            { name: "Schema Design", level: 85, icon: "bi-diagram-3" },
            { name: "Indexing", level: 85, icon: "bi-list-ol" },
            { name: "Transactions", level: 90, icon: "bi-arrow-left-right" },
          ]}
        />

        <SkillSection
          title="Software Design & Reliability"
          icon="bi-shield-check"
          description="Applied modular design, reusable components, production debugging, and concurrency controls to improve maintainability and reliability."
          skills={[
            { name: "Modular Design", level: 85, icon: "bi-boxes" },
            { name: "Reusable Components", level: 85, icon: "bi-puzzle" },
            { name: "Debugging", level: 80, icon: "bi-bug" },
            { name: "Logging & Monitoring", level: 90, icon: "bi-activity" },
            { name: "Optimistic Locking", level: 80, icon: "bi-lock" },
          ]}
        />

        <SkillSection
          title="Computer Science Foundations"
          icon="bi-cpu"
          description="Academic grounding in algorithms, object-oriented design, operating systems, and database concurrency."
          skills={[
            { name: "Data Structures", level: 80, icon: "bi-diagram-3" },
            { name: "Algorithms", level: 70, icon: "bi-signpost-split" },
            { name: "OOP", level: 75, icon: "bi-box" },
            { name: "Operating Systems", level: 70, icon: "bi-pc-display" },
            { name: "Concurrency Fundamentals", level: 70, icon: "bi-shuffle" },
          ]}
        />

        <SkillSection
          title="Development Tools & Cloud Fundamentals"
          icon="bi-tools"
          description="Development tools and foundational cloud knowledge supporting coursework and software projects."
          skills={[
            { name: "Git", level: 80, icon: "bi-git" },
            { name: "Linux", level: 70, icon: "bi-terminal" },
            { name: "Docker", level: 75, icon: "bi-box-seam" },
            { name: "AWS", level: 75, icon: "bi-cloud" },
            { name: "CI/CD Fundamentals", level: 75, icon: "bi-arrow-repeat" },
          ]}
        />

        <SkillSection
          title="Machine Learning & Data Analysis"
          icon="bi-bar-chart-line"
          description="Built an academic churn prediction pipeline with preprocessing, feature engineering, and model evaluation."
          skills={[
            { name: "scikit-learn", level: 80, icon: "bi-cpu" },
            { name: "Logistic Regression", level: 70, icon: "bi-graph-up" },
            { name: "Random Forest", level: 75, icon: "bi-tree" },
            { name: "Feature Engineering", level: 75, icon: "bi-sliders" },
            { name: "Model Evaluation", level: 75, icon: "bi-clipboard-check" },
          ]}
        />
      </div>
    </div>
  );
}
