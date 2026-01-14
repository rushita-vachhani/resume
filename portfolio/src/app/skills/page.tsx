import SkillSection from "../components/SkillSection";

export default function SkillsPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold text-text mb-2">
          Technical Skills
        </h1>
        <p className="text-muted max-w-2xl">
          A snapshot of the technologies and tools I use to design, build,
          and maintain scalable software systems.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <SkillSection
          title="Programming Languages"
          description="Strong foundations in object-oriented and data-driven programming."
          skills={[
            { name: "Java", level: 85 },
            { name: "Python", level: 85 },
            { name: "JavaScript / TypeScript", level: 90 },
            { name: "SQL", level: 80 },
          ]}
        />

        <SkillSection
          title="Frontend Development"
          description="Building accessible, responsive, and maintainable UIs."
          skills={[
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 90 },
            { name: "HTML & CSS", level: 95 },
          ]}
        />

        <SkillSection
          title="Backend & Systems"
          description="Designing APIs and backend services with scalability in mind."
          skills={[
            { name: "Node.js / Express", level: 85 },
            { name: "Spring Boot", level: 80 },
            { name: "REST APIs", level: 90 },
            { name: "Authentication & Security", level: 75 },
          ]}
        />

        <SkillSection
          title="Data & Machine Learning"
          description="Working with data pipelines, analytics, and ML fundamentals."
          skills={[
            { name: "Data Processing (Pandas, NumPy)", level: 80 },
            { name: "Machine Learning Basics", level: 70 },
            { name: "Data Visualization", level: 75 },
            { name: "Feature Engineering", level: 70 },
          ]}
        />

        <SkillSection
          title="Cloud, DevOps & Tools"
          description="Tools and platforms used for collaboration and deployment."
          skills={[
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "AWS (Basics)", level: 70 },
            { name: "CI/CD Pipelines", level: 70 },
          ]}
        />
      </div>
    </div>
  );
}
