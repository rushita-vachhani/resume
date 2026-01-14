import EducationTimeline from "../components/EducationTimeline";

export default function EducationPage() {
  return (
    <div className="section-container space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold text-text mb-3">
          Education
        </h1>
        <p className="text-muted max-w-2xl">
          My academic journey reflects a continuous process of learning,
          exploration, and applying theory to real-world software systems.
        </p>
      </header>

      {/* Timeline */}
      <EducationTimeline />
    </div>
  );
}
