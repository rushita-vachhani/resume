import SkillBar from "./SkillBar";

type Skill = {
  name: string;
  level: number;
};

type SkillSectionProps = {
  title: string;
  description?: string;
  skills: Skill[];
};

export default function SkillSection({
  title,
  description,
  skills,
}: SkillSectionProps) {
  return (
    <section className="card p-6 space-y-5">
      <header>
        <h2 className="text-xl font-semibold text-text">{title}</h2>
        {description && (
          <p className="text-sm text-muted mt-1">{description}</p>
        )}
      </header>

      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            label={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}
