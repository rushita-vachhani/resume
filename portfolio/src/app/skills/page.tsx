const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "React Native", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "Supabase / Firebase", level: 88 },
  { name: "PostgreSQL / MongoDB", level: 82 },
  { name: "AWS / DigitalOcean", level: 78 },
];

export default function Skills() {
  return (
    <div className="section-container">
      <h1 className="mb-6 text-3xl font-bold">Skills</h1>

      <div
        className="card-base space-y-5 bg-white text-gray-900 border-gray-200
                   dark:bg-darkCard dark:text-gray-100 dark:border-[#2f3033]"
      >
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between">
              <span className="text-sm">{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2 rounded-full bg-yellow-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
