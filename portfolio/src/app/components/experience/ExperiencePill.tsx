import { ExperienceItem } from "@/data/experience";

interface Props {
  item: ExperienceItem;
  side: "left" | "right";
}

export default function ExperiencePill({ item, side }: Props) {
  return (
    <div
      className={`
        relative flex items-center gap-6
        rounded-[8rem] p-4
        bg-body-bg
        border border-card-border
        shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
        ${side === "left" ? "ml-auto flex-row" : "mr-auto flex-row-reverse"}
        max-w-[760px]
      `}
    >
      {/* YEAR CIRCLE - INSIDE THE CARD */}
      <div
        className="
          flex-shrink-0 w-35 h-35 rounded-full
          flex items-center justify-center
          text-5xl font-thin text-primary
          bg-body-bg
          shadow-[inset_6px_6px_12px_var(--shadow-inner-dark),inset_-6px_-6px_12px_var(--shadow-inner-light)]
        "
      >
        {item.year}
      </div>

      {/* INNER CONTENT PANEL */}
      <div
        className="
          flex-1 rounded-[7rem]
          px-10 py-7
          bg-body-bg
          shadow-[inset_5px_5px_10px_var(--shadow-inner-dark),inset_-5px_-5px_10px_var(--shadow-inner-light)]
        "
      >
        {/* 1. Title */}
        <h3 className="text-lg font-semibold text-primary mb-1">
          {item.title}
        </h3>

        {/* 2. Company / Location / Dates */}
        {item.company && (
          <p className="text-sm font-medium text-body-text mb-1">
            {item.company}
          </p>
        )}

        {/* 3. Project / Domain */}
        {item.type && (
          <p className="italic text-sm text-text-muted mb-2">
            {item.type}
          </p>
        )}

        {/* 4. Skills / Description */}
        <p className="text-sm leading-relaxed text-text-secondary">
          {item.description}
        </p>
      </div>
    </div>
  );
}
