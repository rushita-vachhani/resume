import EducationTimeline from "../components/EducationTimeline";

export default function EducationPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header className="mb-2 w-full">
        <h1 className="text-4xl font-bold text-body-text mb-4">
          Education
        </h1>
        <p className="text-text-secondary text-md">
          Academic preparation in software engineering, algorithms, database systems, and application development.
        </p>
      </header>

      {/* Timeline */}
      <EducationTimeline />
    </div>
  );
}
