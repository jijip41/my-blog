import React from "react";

export default function Experience() {
  return (
    <>
      <h3 className="font-semibold">Experience</h3>
      <div className="border-b-2 border-gray-400 pb-2">
        <h4 className="text-lg text-gray-700">
          Software Engineer | Vorboss, London (Jan 2023 - Mar 2025)
        </h4>
        <ul className="ml-4 list-disc">
          <li>
            <span className="font-semibold text-gray-700">
              Built an Asset Tracking UI Tool
            </span>
            – Developed a React + Tailwind CSS interface for efficient asset
            management.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Optimized Performance & Maintainability
            </span>
            – Integrated libraries to enhance UX and code quality.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Automated Contract Tracking –
            </span>
            Created a UI app for managing customer contracts, boosting
            transparency.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Enhanced Invoice Management –
            </span>
            Designed UI pages for seamless invoice history access.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              RESTful API Development
            </span>
            – Built APIs to generate PDFs, store them in AWS S3, and retrieve
            them on demand.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Test-Driven Development
            </span>
            – Implemented unit/integration tests using Vitest & React Testing
            Library.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Workflow Automation
            </span>
            – Integrated webhooks to streamline internal processes and improve
            productivity.
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg text-gray-700">
          Software Engineer | Spill, London (Sep 2021 - Dec 2022)
        </h4>
        <ul className="ml-4 list-disc">
          <li>
            <span className="font-semibold text-gray-700">
              Real-Time Data Insights
            </span>
            – Developed interactive Recharts-based visualizations to track team
            usage.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Dynamic Admin Dashboard
            </span>
            – Designed a rules-driven admin page adapting to MAU & company size
            for monitoring engagement.
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Automated Notifications
            </span>
            – Built a Slack webhook system for real-time alerts, enhancing user
            interaction.
          </li>
        </ul>
      </div>
    </>
  );
}
