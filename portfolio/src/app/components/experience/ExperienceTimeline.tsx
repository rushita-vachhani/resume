// import ExperiencePill from "./ExperiencePill";
// import { experienceData } from "@/data/experience";

// // Height of each timeline segment
// const ROW_HEIGHT = 220; 

// // The center vertical line of the SVG
// const CENTER_X = 130;

// // How far the curve bulges out to "hug" the card
// // Increased to 90 so it wraps around the card edge
// const CURVE_WIDTH = 90; 

// export default function ExperienceTimeline() {
//   const svgHeight = experienceData.length * ROW_HEIGHT + 100;

//   return (
//     <div className="relative mt-12 w-full max-w-[1000px] mx-auto" style={{ minHeight: svgHeight }}>
      
//       {/* BACKGROUND SVG SNAKE LINE 
//          z-0: Behind the cards
//          pointer-events-none: So you can click text through it if needed
//       */}
//       <svg
//         width="260"
//         height={svgHeight}
//         viewBox={`0 0 260 ${svgHeight}`}
//         className="absolute left-1/2 -translate-x-1/2 top-0 z-0 pointer-events-none overflow-visible"
//       >
//         {/* Glow Effect Definition */}
//         <defs>
//             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//             <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//             </feMerge>
//             </filter>
//         </defs>

//         <path
//           d={`
//             M${CENTER_X} 0
//             ${experienceData
//               .map((_, i) => {
//                 const y = i * ROW_HEIGHT;
//                 const nextY = y + ROW_HEIGHT;
                
//                 // LOGIC: 
//                 // Even index (0, 2) = Left Card. Curve should bulge LEFT to cup it.
//                 // Odd index (1, 3) = Right Card. Curve should bulge RIGHT to cup it.
//                 const isLeft = i % 2 === 0;
                
//                 // Control Point X: Pulls the line out to the side
//                 const cpX = isLeft 
//                     ? CENTER_X - CURVE_WIDTH  // Pull Left
//                     : CENTER_X + CURVE_WIDTH; // Pull Right

//                 // Control Point Y: Smoothes the transition
//                 const cpY1 = y + (ROW_HEIGHT * 0.45);
//                 const cpY2 = y + (ROW_HEIGHT * 0.55);

//                 return `
//                   C ${cpX} ${cpY1},
//                     ${cpX} ${cpY2},
//                     ${CENTER_X} ${nextY}
//                 `;
//               })
//               .join("")}
//           `}
//           fill="none"
//           stroke="#3b82f6" /* Blue matching your screenshot */
//           strokeWidth="6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           filter="url(#glow)"
//           className="opacity-80"
//         />
//       </svg>

//       {/* CARDS RENDER LOOP */}
//       {experienceData.map((item, index) => {
//         const isLeft = index % 2 === 0;

//         return (
//           <div
//             key={`${item.year}-${index}`}
//             className="absolute w-1/2 flex"
//             style={{
//               top: `${index * ROW_HEIGHT + 40}px`, // +40px pushes card down into the curve's "belly"
//               left: isLeft ? "0" : "50%",
//               justifyContent: isLeft ? "flex-end" : "flex-start",
              
//               // PADDING LOGIC:
//               // The curve bulges out 90px. 
//               // We pad the card 50px from center.
//               // Result: The card sits 40px "inside" the curve.
//               paddingRight: isLeft ? "50px" : 0,
//               paddingLeft: !isLeft ? "50px" : 0,
//             }}
//           >
//             <ExperiencePill item={item} side={isLeft ? "left" : "right"} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
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
              top: `${index * ROW_HEIGHT - 20}px`,
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
