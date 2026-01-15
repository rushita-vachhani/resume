
// import { ExperienceItem } from "@/data/experience";

// interface Props {
//   item: ExperienceItem;
//   side: "left" | "right";
// }

// export default function ExperiencePill({ item, side }: Props) {
//   const isGoal = item.type === "goal";

//   return (
//     <div
//       className={`
//         relative flex items-center gap-6
//         py-6 px-8
//         max-w-[500px]
//         rounded-[50px]
//         transition-all duration-300 hover:scale-[1.02]
        
//         /* Glassmorphism / Neomorphism dark style similar to screenshot */
//         bg-[#151515]
//         border border-gray-800
//         shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]
        
//         /* FLIP LOGIC:
//            Left Side Card: Text on Left, Bubble on Right (closest to timeline)
//            Right Side Card: Bubble on Left (closest to timeline), Text on Right
//         */
//         ${side === "left" ? "flex-row-reverse text-right" : "flex-row text-left"}
//       `}
//     >
      
//       {/* YEAR BUBBLE 
//          (Sits on the edge closest to the timeline line)
//       */}
//       <div
//         className={`
//           flex-shrink-0 w-20 h-20 rounded-full
//           flex items-center justify-center
//           text-xl font-bold tracking-tight
//           shadow-inner
//           ${isGoal 
//              ? "text-gray-400 border border-gray-700 bg-gray-900/50" 
//              : "text-[#fbbf24] border border-[#fbbf24]/20 bg-[#1a1a1a]" // Amber/Yellow text
//           }
//         `}
//       >
//         {item.year}
//       </div>

//       {/* TEXT CONTENT */}
//       <div className="flex-1 min-w-0">
//         <h3 className={`text-lg font-bold leading-tight mb-1 ${isGoal ? "text-gray-300" : "text-[#fbbf24]"}`}>
//           {item.title}
//         </h3>
        
//         <p className="text-sm font-semibold text-gray-200 mb-2">
//           {item.company}
//         </p>
        
//         {item.context && (
//            <p className="text-xs text-gray-500 italic mb-2 font-medium">
//              {item.context}
//            </p>
//         )}

//         <p className="text-sm leading-relaxed text-gray-400 line-clamp-4">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// }

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
        shadow-[20px_20px_60px_rgba(0,0,0,0.08),_-20px_-20px_60px_rgba(255,255,255,0.8)]
        dark:shadow-[20px_20px_60px_rgba(0,0,0,0.6),_-20px_-20px_60px_rgba(255,255,255,0.05)]
        ${side === "left" ? "ml-auto flex-row" : "mr-auto flex-row-reverse"}
        max-w-[760px]
      `}
    >
      {/* YEAR CIRCLE — INSIDE THE CARD */}
      <div
        className="
          flex-shrink-0 w-35 h-35 rounded-full
          flex items-center justify-center
          text-2xl font-semibold text-primary
          bg-body-bg
          shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]
          dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]
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
          shadow-[inset_5px_5px_10px_rgba(0,0,0,0.12),inset_-5px_-5px_10px_rgba(255,255,255,0.85)]
          dark:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.04)]
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
          <p className="italic text-sm text-gray-500 mb-2">
            {item.type}
          </p>
        )}

        {/* 4. Skills / Description */}
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}
