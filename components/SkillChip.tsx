import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "rounded px-2 py-1 text-white",
  variants: {
    bgColor: {
      orange: "bg-orange-500",
      green: "bg-green-500",
      rose: "bg-rose-500",
      blue: "bg-blue-500",
    },
  },
});

type ColorVariants = VariantProps<typeof style>;

interface Props extends ColorVariants {
  skill: string;
}

export default function SkillChip({ skill, bgColor }: Props) {
  return (
    <p key={skill} className={style({ bgColor })}>
      {skill}
    </p>
  );
}
