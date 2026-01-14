import ExperiencePillList from "../components/experience/ExperiencePillList";

export default function ExperiencePage() {
  return (
    <section className="section-container">
      <header className="max-w-4xl mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A chronological story of growth, leadership, and technical depth.
        </p>
      </header>

      <ExperiencePillList />
    </section>
  );
}
