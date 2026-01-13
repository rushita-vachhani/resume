export default function Home() {
  return (
    <div className="section-container">
      <section
        className="rounded-2xl border border-gray-200 bg-white p-10
                   dark:border-[#2f3033] dark:bg-darkCard"
      >
        <h1 className="text-4xl font-extrabold leading-tight">
          Discover my Amazing{" "}
          <span className="text-yellow-400">Dev Space!</span>
        </h1>

        <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
          I craft modern web and mobile applications using React, Next.js,
          React Native, Node.js, Supabase and cloud services. Clean code,
          performance, and delightful user experience are my priorities.
        </p>

        <a
          href="/projects"
          className="mt-8 inline-block rounded-md bg-yellow-500 px-6 py-3 text-lg font-semibold text-black hover:bg-yellow-400 transition"
        >
          Explore My Work
        </a>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Years Experience
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">160+</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Projects Completed
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">75+</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Happy Clients
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
