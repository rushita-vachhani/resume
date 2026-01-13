import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="section-container">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Arias Menu – AI Meal Planner"
          description="React Native + Supabase app that creates personalized meal plans and grocery lists using AI."
          link="https://your-link-here.com"
        />
        <ProjectCard
          title="Speedboat AI"
          description="Next.js + Supabase platform helping agile teams manage risks and priorities with AI insights."
        />
        <ProjectCard
          title="LivingEd"
          description="Homeschool planner app built with React Native and Supabase for lesson planning and tracking."
        />
      </div>
    </div>
  );
}
