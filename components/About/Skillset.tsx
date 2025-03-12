import React from "react";

const FE_SKILLS = ["TypeScript", "React", "Next.js", "CSS", "HTML"];
const BE_SKILLS = ["Node.js", "Express", "Neo4j"];
const API_TECHNOLOGIES = ["GraphQL", "REST APIs"];
const TOOLS_AND_TESTING = ["Jest", "Testing Library", "Git"];

export default function Skillset() {
  return (
    <>
      <h3 className="font-semibold">Skillset</h3>
      <div className="flex gap-x-2">
        {FE_SKILLS.map((skill) => (
          <span key={skill} className="bg-green-600 px-2 py-1 text-white">
            {skill}
          </span>
        ))}
        {BE_SKILLS.map((skill) => (
          <span key={skill} className="bg-orange-500 px-2 py-1">
            {skill}
          </span>
        ))}
        {TOOLS_AND_TESTING.map((skill) => (
          <span key={skill} className="bg-rose-500 px-2 py-1 text-white">
            {skill}
          </span>
        ))}
        {API_TECHNOLOGIES.map((skill) => (
          <span key={skill} className="bg-blue-500 px-2 py-1 text-white">
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
