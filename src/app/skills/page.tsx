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
          Focused on building scalable, reliable systems grounded in strong computer science fundamentals.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
        <SkillSection
          title="Programming Languages"
          icon="bi-braces"
          description="Building production-ready applications using Java, Python, and SQL with emphasis on clean design and maintainable code."
          skills={[
            { name: "Java", level: 85, icon: "bi-braces" },
            { name: "Python", level: 85, icon: "bi-code-slash" },
            { name: "SQL", level: 80, icon: "bi-database" },
            { name: "TypeScript", level: 90, icon: "bi-filetype-tsx" },
            { name: "JavaScript", level: 90, icon: "bi-filetype-js" },
          ]}
        />

        <SkillSection
          title="System Foundations"
          icon="bi-cpu"
          description="Grounded in Data Structures, Algorithms, concurrency fundamentals, and system-level thinking for building efficient software."
          skills={[
            { name: "Data Structures", level: 85, icon: "bi-diagram-3" },
            { name: "Algorithms", level: 85, icon: "bi-gear-wide-connected" },
            { name: "OOP", level: 80, icon: "bi-boxes" },
            { name: "Concurrency", level: 90, icon: "bi-arrow-repeat" },
            { name: "SDLC", level: 80, icon: "bi-kanban" },
          ]}
        />

        <SkillSection
          title="Backend & Systems"
          icon="bi-server"
          description="Designing and implementing modular backend systems with secure APIs, database optimization, and production-grade reliability."
          skills={[
            { name: "Spring Boot", level: 85, icon: "bi-server" },
            { name: "REST APIs", level: 85, icon: "bi-arrow-left-right" },
            { name: "PostgreSQL", level: 80, icon: "bi-database" },
            { name: "Architecture", level: 90, icon: "bi-layers" },
          ]}
        />

        <SkillSection
          title="Databases & Data"
          icon="bi-database"
          description="Designing normalized schemas and optimizing SQL queries to ensure data integrity and performance."
          skills={[
            { name: "SQL Optimization", level: 90, icon: "bi-speedometer2" },
            { name: "Normalization", level: 85, icon: "bi-diagram-2" },
            { name: "Transactions", level: 90, icon: "bi-arrow-repeat" },
          ]}
        />

        <SkillSection
          title="Cloud & DevOps"
          icon="bi-cloud-arrow-up"
          description="Containerizing services and deploying cloud-ready systems using Docker and AWS fundamentals."
          skills={[
            { name: "Docker", level: 80, icon: "bi-box-seam" },
            { name: "AWS", level: 70, icon: "bi-cloud" },
            { name: "CI/CD", level: 75, icon: "bi-arrow-repeat" },
            { name: "Git", level: 70, icon: "bi-git" },
          ]}
        />

        <SkillSection
          title="Frontend Development"
          icon="bi-layout-text-window"
          description="Building modular, reusable UI components with focus on performance and maintainability."
          skills={[
            { name: "React", level: 80, icon: "bi-code-slash" },
            { name: "Next.js", level: 70, icon: "bi-window" },
            { name: "Responsive UI", level: 75, icon: "bi-phone" },
          ]}
        />

        <SkillSection
          title="Data & Machine Learning"
          icon="bi-bar-chart-line"
          description="Implementing end-to-end data pipelines and applying ML fundamentals for analytics-driven applications."
          skills={[
            { name: "Pandas", level: 80, icon: "bi-table" },
            { name: "Scikit-Learn", level: 70, icon: "bi-cpu" },
            { name: "Feature Engineering", level: 75, icon: "bi-sliders" },
          ]}
        />
      </div>
    </div>
  );
}
