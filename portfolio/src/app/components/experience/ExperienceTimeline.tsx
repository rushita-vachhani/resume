import ExperiencePill from "./ExperiencePill";
import { experienceData } from "@/data/experience";

const ROW_HEIGHT = 180; // 🔥 tighter vertical spacing

const CENTER_X = 130;
const CURVE_X = 200; // 🔥 deeper but shorter curve

export default function ExperienceTimeline() {
  const svgHeight = experienceData.length * ROW_HEIGHT + 100;

  return (
    <div className="relative mt-24" style={{ minHeight: svgHeight }}>
      {/* CONNECTED COMPACT CURVE */}
      <svg
        width="260"
        height={svgHeight}
        viewBox={`0 0 260 ${svgHeight}`}
        className="absolute left-1/2 -translate-x-1/2 top-0"
      >
        <path
          d={`
            M${CENTER_X} 0
            ${experienceData
              .map((_, i) => {
                const y = i * ROW_HEIGHT;
                const nextY = y + ROW_HEIGHT;
                const right = i % 2 === 0;

                return `
                  C ${right ? CURVE_X : 60} ${y + ROW_HEIGHT * 0.3},
                    ${right ? CURVE_X : 60} ${y + ROW_HEIGHT * 0.7},
                    ${CENTER_X} ${nextY}
                `;
              })
              .join("")}
          `}
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="drop-shadow(0 6px 10px rgba(0,0,0,0.15))"
        />
      </svg>

      {/* CARDS */}
      {experienceData.map((item, index) => {
        const side = index % 2 === 0 ? "left" : "right";

        return (
          <div
            key={`${item.year}-${index}`}
            className="absolute w-1/2"
            style={{
              top: `${index * ROW_HEIGHT + 50}px`,
              left: side === "left" ? "5%" : "45%",
              paddingRight: side === "left" ? "70px" : undefined,
              paddingLeft: side === "right" ? "70px" : undefined,
            }}
          >
            <ExperiencePill item={item} side={side} />
          </div>
        );
      })}
    </div>
  );
}
