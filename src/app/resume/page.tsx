export default function Resume() {
  return (
    <div className="section-container">
      <h1 className="mb-6 text-3xl font-bold">Resume</h1>

      <div
        className="card-base bg-white text-gray-900 border-gray-200
                   dark:bg-darkCard dark:text-gray-100 dark:border-[#2f3033]"
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          You can view or download my latest resume from Google Drive.
        </p>

        <a
          href="https://drive.google.com/your-resume-link"
          target="_blank"
          className="mt-4 inline-block rounded-md bg-yellow-500 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-400 transition"
        >
          Open Resume PDF
        </a>
      </div>
    </div>
  );
}
