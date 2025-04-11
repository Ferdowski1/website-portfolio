export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Experience</h1>
        <a
          href="/NathanFerdowskiResume.pdf" 
          download
          className="bg-gray-500 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* SkillStorm */}
      <div className="mb-10">
        <Entry
            title="SkillStorm"
            date="Jul 2024 – Oct 2024"
            tech="Power Platform Developer (C#, JavaScript, TypeScript, HTML)"
            bullets={[
              "Utilized Power Platform such as dataverse, canvas apps, model driven apps, power automate and power pages to create applications for external users and internal employees.",
              "Created custom REST APIs using azure functions to perform CRUD operations on CosmosDB.",
              "Managed environments and security by utilizing business units, security groups and security roles."
            ]}
          />
      </div>

      {/* AT&T */}
      <div className="mb-16">
      <Entry
            title="AT&T"
            date="Feb 2019 – Dec 2021"
            tech="Software Engineer (TypeScript, JavaScript, HTML)"
            bullets={[
              "Front-End developer for a cybersecurity visualization web application using Angular, Node.js, Vega-Lite and a Micro-Frontend architecture.",
              "Performed data analysis on internal AT&T data, created reports, and presented to executives.",
              "Investigated log data in Splunk, and built a rule based heuristic model to detect security threats."
            ]}
          />
      </div>

      {/* Projects */}
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="space-y-10">
        <Entry
          title="Premier Fantasy App"
          date="Mar 2025 – Apr 2025"
          tech="Spring Boot, PostgreSQL, Next.js, Tailwind"
          bullets={[
            "Built an interactive FIFA Ultimate Team-style web app allowing users to visually build their Premier League fantasy soccer team.",
            "Engineered a full-stack architecture with a Spring Boot backend (Render) and PostgreSQL database (Supabase), exposing RESTful APIs.",
            "Automated the extraction of player statistics via web scraping for persistent storage and API consumption."
          ]}
        />

        <Entry
          title="Litecoin Analysis"
          date="Mar 2025 – Apr 2025"
          tech="Python, Matplotlib, Pine Script"
          bullets={[
            "Created a log-log power model to analyze Litecoin price trends.",
            "Exported the model to TradingView using custom Pine Script for real-time visualization.",
            "Produced YouTube videos to present model findings and share technical analysis.",
            "Automated detection of major Litecoin wallet activity using Python."
          ]}
        />

        <Entry
          title="Personal Website"
          date="Feb 2025"
          tech="Next.js, Tailwind CSS, Vercel, GitHub"
          bullets={[
            "Developed a responsive portfolio site to showcase professional experience and projects.",
            "Deployed on Vercel via GitHub for CI/CD and high availability."
          ]}
        />

        <Entry
          title="Bookmarker Chrome Extension"
          date="Feb 2025"
          tech="JavaScript, HTML"
          bullets={[
            "Built a Chrome Extension for YouTube allowing users to save timestamp bookmarks.",
            "Injected interactive UI into YouTube's video player using DOM manipulation and MutationObservers."
          ]}
        />

        <Entry
          title="Loan Application App"
          date="Jul 2024 – Aug 2024"
          tech="JavaScript, HTML"
          bullets={[
            "Built a Power Platform app for authenticated users to apply for loans.",
            "Created Power Pages for applicants and Canvas/Model-Driven Apps for employees.",
            "Managed data via Dataverse and automated logic with Power Automate."
          ]}
        />

        <Entry
          title="Portfolio Tracker"
          date="Jan 2024 – Feb 2024"
          tech="React, PostgreSQL, AWS EC2, AWS Lambda"
          bullets={[
            "Created a crypto portfolio tracker using React and PostgreSQL.",
            "Hosted backend on EC2 and automated nightly value updates with AWS Lambda + CloudWatch.",
            "Connected Lambda securely to the DB for scheduled updates."
          ]}
        />

        <Entry
          title="NFT Collection"
          date="Jan 2023 – Feb 2023"
          tech="JavaScript, Solidity, Ganache, Truffle"
          bullets={[
            "Minted 500 NFTs on OpenSea Testnet with custom ERC721 smart contract.",
            "Wrote and deployed Solidity contracts using Truffle, tested with Ganache."
          ]}
        />
      </div>

      {/* Skills & Certifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p className="mb-4">Angular, Data Analysis, Java, JavaScript, PostgreSQL, Python, React, Spring Boot, Web Development</p>

        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <p>
          AWS Solutions Architect Associate, Microsoft Power Platform Functional Consultant, Google Data Analytics Professional
        </p>
      </div>
    </div>
  );
}

function Entry({ title, date, tech, bullets }: { title: string; date: string; tech: string; bullets: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{date} | {tech}</p>
      <ul className="list-disc ml-8 mt-2 space-y-1">
        {bullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
