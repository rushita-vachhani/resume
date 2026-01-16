import ExperienceTimeline from "../components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <section className="section-container">
      <h1 className="text-4xl font-bold mb-2">Experience & Timeline</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
        A chronological story of growth, leadership, and technical depth - shaped through real-world problem solving, ownership, and continuous learning.
      </p>

      <ExperienceTimeline />
    </section>
  );
}
