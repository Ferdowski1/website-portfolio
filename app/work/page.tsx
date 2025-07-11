export default function Work() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Work</h1>
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
            title="SkillStorm - Software Engineer - Full Stack"
            date="Jul 2024 – Apr 2025"
            tech=""
            bullets={[
              "Built full-stack web applications using React, Node.js, Express.js, and TypeScript, delivering scalable RESTful services and enhancing user experience and system performance.",
              "Designed and implemented secure JWT-based authentication with role-based access control, ensuring data protection for both internal and external users.",
              "Engineered database-driven features with MongoDB and PostgreSQL, enabling efficient CRUD operations and seamless integration between front-end and back-end systems."
            ]}
          />
      </div>

      {/* PMM */}
      <div className="mb-10">
        <Entry
            title="PMM - Senior Software Engineer - Cloud Architecture"
            date="Mar 2023 – Jun 2024"
            tech=""
            bullets={[
              "Architected and built a serverless backend on AWS using Amplify, Cognito, API Gateway, Lambda, S3, and DynamoDB, enabling secure, scalable user workflows and media storage.",
              "Designed and implemented a cart microservice using DynamoDB’s flexible schema and Redis caching to support low-latency, high-volume read/write operations for authenticated users.",
              "Integrated Stripe Checkout and webhooks to handle secure payments, leveraging AWS SQS to decouple and orchestrate post-payment workflows including order persistence and automated email confirmations via SES."
            ]}
          />
      </div>

      {/* AT&T */}
      <div className="mb-16">
      <Entry
            title="AT&T - Software Engineer - Cybersecurity"
            date="Apr 2021 – Jan 2023"
            tech=""
            bullets={[
              "Designed and implemented a rule-based heuristic detection model using log data from Splunk,improving the identification of potential security threats across internal network activity.",
              "Built and maintained a data health monitoring dashboard in Splunk, tracking the volume and integrity of incoming log data to ensure reliability and completeness of security analytics.",
              "Collaborated with cybersecurity teams to perform data analysis on internal traffic and anomaly patterns, generating dashboards and executive reports that informed policy and security decisions."
            ]}
          />
      </div>

      <div className="mb-16">
      <Entry
            title="AT&T - Software Engineer - Full Stack"
            date="Feb 2019 – Apr 2021"
            tech=""
            bullets={[
              "Developed a full-stack data visualization platform using React, featuring a customizable dashboard and secure user authentication for tailored access to charts and analytical tools.",
              "Built scalable microservices with Node.js, Express, and MongoDB to manage user preferences, chart configurations, and real-time data retrieval.",
              "Integrated CI/CD pipelines with Jenkins to automate testing and deployment of microservices, reducing release cycle time and ensuring reliable feature delivery."
            ]}
          />
      </div>

      {/* Projects */}
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="space-y-10">

        <Entry
            title="Litecoin Whale Watcher"
            date="Jan 2025 – Present"
            tech="Python, PostgreSQL, AWS EC2, Docker, Nginx, Node.js, Express"
            bullets={[
              "Built a full-stack crypto analytics tool that tracks the top 200 Litecoin addresses activity.",
              "Automated whale transaction detection using Python and APIs, sending alerts to a Telegram group.",
              "Containerized and deployed a PostgreSQL database with Docker on AWS EC2 to persist and query wallet transaction data.",
              "Created a secure REST API using Node.js and Express to serve tracked whale data, reverse-proxied behind NGINX with HTTPS via Let’s Encrypt."
            ]}
          />


        <Entry
            title="Distributed Logistics Tracker"
            date="Mar 2025 – Apr 2025"
            tech="Spring Boot, RabbitMQ, PostgreSQL, Docker"
            bullets={[
              "Built a microservices-based logistics simulation using Spring Boot, with services for intake, routing, and tracking packages.",
              "Implemented asynchronous communication between services using RabbitMQ queues to simulate real-world message passing in distributed systems.",
              "Built a containerized PostgreSQL environment using Docker to mirror production conditions and support isolated service testing."
            ]}
          />

        <Entry
          title="Premier Fantasy App"
          date="Mar 2025 – Mar 2025"
          tech="Spring Boot, PostgreSQL, Next.js, Tailwind"
          bullets={[
            "Built an interactive FIFA Ultimate Team-style web app allowing users to visually build their Premier League fantasy soccer team.",
            "Engineered a full-stack architecture with a Spring Boot backend and PostgreSQL database, exposing RESTful APIs.",
            "Automated the extraction of player statistics via web scraping for persistent storage and API consumption."
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
        <p className="mb-4">Java, Python, JavaScript, TypeScript, HTML, CSS, Angular, React, Next.js, Spring Boot, Express.js, Node.js, Vega-Lite, PostgreSQL, MongoDB, Cassandra, Cosmos DB, RabbitMQ, SQS, REST APIs, Webhooks, Splunk, Git, GitHub, Jenkins, Docker, NGINX, CI/CD Pipelines, Cloud, DevOps, and Architecture</p>

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
