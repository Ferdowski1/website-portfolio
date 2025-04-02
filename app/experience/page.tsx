export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>

      {/* SkillStorm */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold">SkillStorm</h2>
        <p className="text-sm text-gray-600 mb-2">Jul 2024 – Oct 2024 | Power Platform Developer (C#, JavaScript, TypeScript, HTML)</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Utilized Power Platform such as Dataverse, Canvas Apps, Model-Driven Apps, Power Automate, and Power Pages to create applications for external users and internal employees.
          </li>
          <li>
            Created custom REST APIs using Azure Functions to perform CRUD operations on CosmosDB.
          </li>
          <li>
            Managed environments and security by utilizing business units, security groups, and security roles.
          </li>
        </ul>
      </div>

      {/* AT&T */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold">AT&amp;T</h2>
        <p className="text-sm text-gray-600 mb-2">Feb 2019 – Dec 2021 | Software Engineer (TypeScript, JavaScript, HTML)</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Front-End developer for a cybersecurity visualization web application using Angular, Node.js, Vega-Lite, and a Micro-Frontend architecture.
          </li>
          <li>
            Built and monitored company dashboards of data visualizations using Splunk.
          </li>
          <li>
            Performed data analysis on internal AT&amp;T data, created reports, and presented to the team.
          </li>
        </ul>
      </div>
    </div>
  );
}
