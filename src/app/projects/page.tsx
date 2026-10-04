import ProjectCard from "../components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <div className="section-container">
      <header className="mb-2 w-full">
        <h1 className="text-4xl font-bold mb-4 text-body-text">Recent Projects</h1>
        <p className="text-text-secondary text-md">
          Selected academic and professional projects across full-stack development, backend services, database systems, and machine learning.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2 pb-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
