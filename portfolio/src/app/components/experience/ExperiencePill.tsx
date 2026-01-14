import { ExperienceItem } from "@/data/experience";

interface Props {
  item: ExperienceItem;
}

export default function ExperiencePill({ item }: Props) {
  return (
    <div
      className="
        flex items-center gap-10
        rounded-[6rem]
        px-8 py-6
        bg-body-bg
        border border-card-border
        transition-shadow
        shadow-[
          12px_12px_30px_rgba(0,0,0,0.08),
          -12px_-12px_30px_rgba(255,255,255,0.7)
        ]
        dark:shadow-[
          12px_12px_30px_rgba(0,0,0,0.6),
          -12px_-12px_30px_rgba(255,255,255,0.06)
        ]
      "
    >
      {/* YEAR CIRCLE */}
      <div
        className="
          flex-shrink-0 w-28 h-28 rounded-full
          flex items-center justify-center
          text-4xl font-semibold
          bg-body-bg
          text-body-text
          shadow-[
            inset_4px_4px_10px_rgba(0,0,0,0.12),
            inset_-4px_-4px_10px_rgba(255,255,255,0.75)
          ]
          dark:shadow-[
            inset_4px_4px_10px_rgba(0,0,0,0.6),
            inset_-4px_-4px_10px_rgba(255,255,255,0.08)
          ]
        "
      >
        {item.year}
      </div>

      {/* INNER CONTENT (PRESSED) */}
      <div
        className="
          flex-1
          rounded-[5.5rem]
          px-12 py-8
          bg-card-bg
          border border-card-border
          shadow-[
            inset_6px_6px_14px_rgba(0,0,0,0.14),
            inset_-6px_-6px_14px_rgba(255,255,255,0.7)
          ]
          dark:shadow-[
            inset_6px_6px_14px_rgba(0,0,0,0.65),
            inset_-6px_-6px_14px_rgba(255,255,255,0.06)
          ]
        "
      >
        <h3 className="text-xl font-semibold mb-3 text-body-text">
          {item.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[0.95rem]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
