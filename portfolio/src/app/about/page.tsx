export default function About() {
  return (
    <div className="section-container">
      <h1 className="mb-6 text-3xl font-bold">About Me</h1>

      <div
        className="card-base bg-white text-gray-900 border-gray-200
                   dark:bg-darkCard dark:text-gray-100 dark:border-[#2f3033]"
      >
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
          I&apos;m Harshit Vachhani, a full-stack developer passionate about
          building high-quality web and mobile applications. I work primarily
          with React, Next.js, React Native, Node.js, Supabase, and AWS /
          DigitalOcean.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          I enjoy collaborating with product owners and designers to transform
          ideas into performant, scalable, and maintainable software.
        </p>
      </div>
    </div>
  );
}
