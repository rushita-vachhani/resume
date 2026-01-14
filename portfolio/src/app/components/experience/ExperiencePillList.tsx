import ExperiencePill from "./ExperiencePill";
import { experienceData } from "@/data/experience";

export default function ExperiencePillList() {
  return (
    <div className="space-y-14">
      {experienceData.map((item) => (
        <ExperiencePill key={item.year} item={item} />
      ))}
    </div>
  );
}
