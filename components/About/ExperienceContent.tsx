import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function ExperienceContent({
  data,
  company,
}: {
  data: Props[];
  company: string;
}) {
  return (
    <article>
      <h4 className="text-lg text-gray-700">{company}</h4>
      <ul className="ml-4 list-disc">
        {data.map(({ title, description }) => (
          <li key={title} className="gap-x-2">
            <p className="font-semibold text-gray-700">{title}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
