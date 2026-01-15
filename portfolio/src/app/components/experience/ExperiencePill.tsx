import { ExperienceItem } from "../../../data/experience";

export default function ExperiencePill({
  item,
  side,
}: {
  item: ExperienceItem;
  side: "left" | "right";
}) {
  return (
    <div
      className={`
        relative max-w-[620px] rounded-[999px]
        bg-card-bg border border-card-border
        px-12 py-8
        shadow-[10px_10px_24px_var(--shadow-dark),_-10px_-10px_24px_var(--shadow-light)]
        ${side === "left" ? "ml-auto pr-24" : "mr-auto pl-24"}
      `}
    >
      {/* INNER NEUMORPHIC CONTENT */}
      <div
        className="
          rounded-[999px] px-10 py-8
          bg-card-bg
          shadow-[inset_6px_6px_14px_var(--shadow-dark),inset_-6px_-6px_14px_var(--shadow-light)]
        "
      >
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-accent mb-1">
          {item.title}
        </h3>

        {/* ORG / DURATION */}
        <p className="text-sm font-medium text-muted mb-1">
          {item.org}
        </p>

        {/* META */}
        <p className="text-sm italic text-muted mb-2">
          {item.meta}
        </p>

        {/* STACK */}
        <p className="text-sm text-body leading-relaxed">
          {item.stack}
        </p>
      </div>

      {/* YEAR CIRCLE – visually ATTACHED */}
      <div
        className={`
          absolute top-1/2 -translate-y-1/2
          w-16 h-16 rounded-full
          flex items-center justify-center
          bg-card-bg border border-card-border
          text-accent font-semibold tracking-widest
          shadow-[6px_6px_14px_var(--shadow-dark),_-6px_-6px_14px_var(--shadow-light)]
          ${side === "left" ? "-right-8" : "-left-8"}
        `}
      >
        {item.year}
      </div>
    </div>
  );
}
