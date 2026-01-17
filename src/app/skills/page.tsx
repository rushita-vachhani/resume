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
          My technical toolbox. I treat these not just as items on a list, but as instruments to solve complex problems.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
        <SkillSection
          title="Programming Languages"
          icon="bi-code-square"
          description="Strong foundations in object-oriented and data-driven programming."
          skills={[
            { name: "Java", level: 85, icon: "bi-cup-hot" },
            { name: "Python", level: 85, icon: "bi-terminal" },
            { name: "TypeScript", level: 90, icon: "bi-file-code" },
            { name: "JavaScript", level: 90, icon: "bi-filetype-js" },
            { name: "SQL", level: 80, icon: "bi-database" },
          ]}
        />

        <SkillSection
          title="Frontend Development"
          icon="bi-window-desktop"
          description="Building accessible, responsive, and maintainable UIs."
          skills={[
            { name: "React", level: 90, icon: "bi-filetype-jsx" },
            { name: "Next.js", level: 85, icon: "bi-arrow-right-square" },
            { name: "Tailwind CSS", level: 90, icon: "bi-palette" },
            { name: "HTML5", level: 95, icon: "bi-filetype-html" },
            { name: "CSS3", level: 95, icon: "bi-filetype-css" },
            { name: "Framer Motion", level: 70, icon: "bi-film" },
          ]}
        />

        <SkillSection
          title="Backend & Systems"
          icon="bi-hdd-rack"
          description="Designing APIs and backend services with scalability in mind."
          skills={[
            { name: "Node.js", level: 85, icon: "bi-hexagon" },
            { name: "Express", level: 85, icon: "bi-hdd-network" },
            { name: "Spring Boot", level: 80, icon: "bi-gear-wide-connected" },
            { name: "REST APIs", level: 90, icon: "bi-cloud-arrow-down" },
            { name: "PostgreSQL", level: 80, icon: "bi-database-fill" },
          ]}
        />

        <SkillSection
          title="Data & Machine Learning"
          icon="bi-graph-up-arrow"
          description="Working with data pipelines, analytics, and ML fundamentals."
          skills={[
            { name: "Pandas / NumPy", level: 80, icon: "bi-table" },
            { name: "Scikit-Learn", level: 70, icon: "bi-robot" },
            { name: "Data Visualization", level: 75, icon: "bi-pie-chart" },
            { name: "Feature Engineering", level: 70, icon: "bi-sliders" },
          ]}
        />

        <SkillSection
          title="Cloud, DevOps & Tools"
          icon="bi-tools"
          description="Tools and platforms used for collaboration and deployment."
          skills={[
            { name: "Git", level: 90, icon: "bi-git" },
            { name: "GitHub", level: 90, icon: "bi-github" },
            { name: "Docker", level: 75, icon: "bi-box-seam" },
            { name: "AWS", level: 70, icon: "bi-cloud" },
            { name: "Postman", level: 85, icon: "bi-send" },
          ]}
        />
      </div>
    </div>
  );
}
