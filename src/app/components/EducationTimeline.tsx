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
          year="2025 – Present (Expected graduation: April 2027)"
          title="Master of Science in Computer Software Engineering"
          institution="Northeastern University, Boston, MA"
          gpa="3.95"
          description="Relevant coursework: Data Science Engineering Methods (A+), Program Structure & Algorithms (A+), Data Management and Database Design (A+), Web Design/User Experience Engineering (A+), User Experience Design/Testing (A+), Concpts of Object-Oriented Design (A+), Career Managmnt for Engineers (A+), Operating Systems (A+)"
        />

        <EducationItem
          year="2016 – 2019"
          title="Bachelor of Computer Applications (BCA) - Gold Medalist"
          institution="GLS University"
          gpa="3.88"
          description="Relevant coursework: Data Structures (A+), Database Management Systems (A+), Advanced Java (A+), Data Communication & Networks (A+)"
        />

        <section aria-labelledby="honors-heading" className="pt-6">
          <h2 id="honors-heading" className="mb-4 text-xl font-bold text-body-text">
            Honors &amp; Awards
          </h2>
          <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {[
              {
                title: "University Gold Medal - GLS University",
                description: "Recognized as the gold medalist of the graduating batch.",
                icon: "bi-award",
              },
              {
                title: "Hackathon Winner - Health Category",
                description: "Winning participant in a hackathon organized by the Government of Gujarat.",
                icon: "bi-trophy",
              },
            ].map((award) => (
              <li key={award.title} className="flex items-start gap-3 rounded-2xl border border-sidebar-border bg-body-bg p-4">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg text-primary">
                  <i className={`bi ${award.icon}`} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-6 text-body-text">{award.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{award.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
