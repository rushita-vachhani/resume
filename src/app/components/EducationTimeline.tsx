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
      <div className="space-y-3 relative pb-12">
        <EducationItem
          year="2025 – Present"
          title="Master of Science in Computer Software Engineering"
          institution="Northeastern University, Boston"
          gpa="3.94"
          description="Courses: Data Science Engineering Methods, Program Structure & Algorithms (A+), Data Management and Database Design (A+), Web Design/User Experience Engineering (A+), User Experience Design/Testing (A+), Concpts of Object-Oriented Design (A+), Career Managmnt for Engineers (A+), Operating Systems (A+)"
        />

        <EducationItem
          year="2016 – 2019"
          title="Bachelor of Computer Applications (BCA) - Gold Medalist"
          institution="GLS University"
          gpa="3.88"
          description="Courses: Advance Object-Oriented Programming (A+), Python (A+), Advanced Java (A+), DBMS (A+), Information Security (A+), Data Structures (A+), Data Communication & Networks (A+)"
        />
      </div>
    </div>
  );
}
