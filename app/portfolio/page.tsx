'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Premier League Fantasy App",
    desc:
      "Fantasy app where users create their own custom Premier League team using a FIFA Ultimate Team-style interface. Powered by a Spring Boot backend and PostgreSQL, with over 600 players and a clean Next.js frontend.",
    img: "/top_fantasy.png",
    tech: ["Spring Boot", "PostgreSQL", "Next.js", "Tailwind CSS"],
    link: "/portfolio/premier-fantasy-team",
    github: "https://github.com/Ferdowski1/premier-fantasy-backend"
  },
  {
    title: "YouTube Channel",
    desc:
      "Educational content on Bitcoin and crypto. I share technical analysis, charts, market insights, and trading models for investors at all levels.",
    img: "/ada.png",
    tech: ["YouTube", "Crypto", "Finance", "Trading"],
    link: "https://www.youtube.com/@skiis1"
  },
  {
    title: "YouTube Bookmarker",
    desc:
      "Chrome Extension to add, name, and save YouTube video timestamps. Helps users quickly return to key video moments without manual scrubbing. I use this all the time.",
    img: "/yt-bookmarker.png",
    tech: ["JavaScript", "Chrome Extension", "HTML", "DOM"],
    github: "https://github.com/Ferdowski1/YouTube-Bookmarker"
  },
  {
    title: "Litecoin Indicators",
    desc:
      "Developed custom Litecoin indicators like Power Bands to visualize long-term price patterns and wallet activity. Also building a Litecoin Risk Indicator.",
    img: "/ltc_pgr.webp",
    tech: ["Python", "Matplotlib", "Pine Script"],
    link: "https://www.youtube.com/playlist?list=PLna8qj1ZuaSUsT7QA0mTehDO5_UXw2ijR"
  },
  {
    title: "Fish Frenzy",
    desc:
      "My NFT collection of 500 unique fish, launched on OpenSea on the Ethereum Goerli Testnet. Unfortunatley the Goerli Testnet has been depricated. I plan to relaunch on Cardano. This was the most rare fish minted in the collection",
    img: "/fishfrenzy.jpg",
    tech: ["JavaScript", "Solidity", "Ganache", "Truffle", "IPFS"]
  },
];

export default function Portfolio() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (loadedCount === projects.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-zinc-900 p-5 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-500 hover:scale-[1.03] hover:shadow-lg cursor-pointer
              ${imagesLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-600 ease-in-out`}
          >
            <div>
              <div className="w-auto h-40 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onLoad={() => setLoadedCount((prev) => prev + 1)}
                />
              </div>

              <h2 className="text-lg font-semibold mb-2 text-center">{project.title}</h2>
              <p className="text-sm text-gray-200">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-zinc-800 px-2 py-1 rounded whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {(project.github || project.link) && (
              <div className="mt-6 flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition"
                  >
                    <img
                      src="/github-white.png"
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    <img
                      src="/external-link.png"
                      alt="Link"
                      className="w-7 h-7"
                    />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
