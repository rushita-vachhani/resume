import EducationTimeline from "../components/EducationTimeline";

export default function EducationPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-body-text mb-4">
          Education
        </h1>
        <p className="text-text-secondary text-lg">
          My academic journey reflects a continuous process of learning,
          exploration, and applying theory to real-world software systems.
        </p>
      </header>

      {/* Timeline */}
      <EducationTimeline />
    </div>
  );
}
