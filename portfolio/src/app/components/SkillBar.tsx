type SkillBarProps = {
  label: string;
  level: number; // 0–100
};

export default function SkillBar({ label, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-text">{label}</span>
        <span className="text-muted">{level}%</span>
      </div>

      <div className="h-2 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
