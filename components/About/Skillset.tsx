import { skills } from "@/data/about/skills";
import SkillChip from "../SkillChip";

export default function Skillset() {
  const allSkills = Object.values(skills).flatMap(({ data, theme }) =>
    data.map((skill) => ({ skill, theme }))
  );

  return (
    <>
      <h3 className="font-semibold">Skillset</h3>
      <div className="flex max-w-lg flex-wrap gap-2 text-ellipsis">
        {allSkills.map(({ skill, theme }) => {
          return (
            <SkillChip skill={skill} bgColor={getColor(theme)} key={skill} />
          );
        })}
      </div>
    </>
  );
}

enum Color {
  orange = "orange",
  green = "green",
  rose = "rose",
  blue = "blue",
}

function getColor(color: string) {
  switch (color) {
    case "orange":
      return Color.orange;
    case "green":
      return Color.green;
    case "rose":
      return Color.rose;
    case "blue":
      return Color.blue;
  }
}
