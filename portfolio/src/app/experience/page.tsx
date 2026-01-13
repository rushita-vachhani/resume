export default function Experience() {
  return (
    <div className="section-container">
      <h1 className="mb-6 text-3xl font-bold">Experience</h1>

      <div className="space-y-5">
        <div
          className="card-base bg-white text-gray-900 border-gray-200
                     dark:bg-darkCard dark:text-gray-100 dark:border-[#2f3033]"
        >
          <h2 className="text-lg font-semibold">
            Full Stack Developer — Navy Infotech
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            2020 – Present
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>
              Built and maintained web/mobile apps with React, Next.js, React
              Native, Node.js, Supabase, and AWS.
            </li>
            <li>Led end-to-end development from requirements to deployment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
