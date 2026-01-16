import EducationItem from "./EducationItem";
import PencilIllustration from "./PencilIllustration";

export default function EducationTimeline() {
  return (
    <div className="relative grid grid-cols-[80px_1fr] gap-8 mt-12">
      {/* Pencil Column */}
      <div className="flex justify-center h-full">
        <PencilIllustration />
      </div>

      {/* Education Cards */}
      <div className="space-y-12 relative pb-12">
        <EducationItem
          year="2025 – Present"
          title="Master of Science in Computer Software Engineering"
          institution="Northeastern University, Boston"
          gpa="3.94"
          description="Focused on software architecture, data management, system design, and scalable application development. Engaged in project-based learning and research-driven coursework."
        />

        <EducationItem
          year="2016 – 2019"
          title="Bachelor of Engineering in Computer Engineering"
          institution="Gujarat Technological University"
          gpa="3.95"
          description="Built a strong foundation in algorithms, databases, operating systems, and web technologies. Participated in academic projects and technical workshops."
        />
      </div>
    </div>
  );
}
