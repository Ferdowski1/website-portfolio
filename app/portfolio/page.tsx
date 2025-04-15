'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Premier League Fantasy App",
    desc:
      "Fantasy app where users create their own custom Premier League team using a FIFA Ultimate Team-style interface. Powered by a Spring Boot backend and PostgreSQL, with over 600 players and a clean Next.js frontend.",
    img: "/myteam.png",
    tech: ["Spring Boot", "PostgreSQL", "Next.js", "Tailwind CSS"],
    link: "/portfolio/premier-fantasy-team",
    github: "https://github.com/Ferdowski1/premier-fantasy-backend"
  },
  {
    title: "Litecoin Whale Watcher",
    desc:
      "Full-stack tracker that monitors Litecoin blockchain activity and flags large wallet movements in real time. Built with Python and PostgreSQL on AWS EC2, and visualized through a dynamic Next.js frontend. Ideal for spotting buy/sell pressure from top holders.",
    img: "/ltcwhales.png",
    tech: ["Next.js", "PostgreSQL",  "AWS EC2",  "Blockchain",  "Python"],
    /*link: "/portfolio/litecoin-whales",
    github: " ",*/
    telegram: "https://t.me/litecointop200"
  },
  {
    title: "YouTube Channel",
    desc:
      "I share my personal views on the crypto market, covering Bitcoin, Litecoin, and altcoins. Videos include technical analysis, custom indicators, and market breakdowns, with a focus on long-term trends and on-chain activity.",
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
      <h1 className="text-3xl font-bold text-black text-center mb-12">My Portfolio</h1>

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

            {(project.github || project.link || project.telegram) && (
              <div className="mt-6 flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <img
                      src="/github-white.png"
                      alt="GitHub"
                      className="w-6 h-6"
                    />
                  </a>
                )}

                {project.telegram && (
                  <a
                    href={project.telegram}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <img
                      src="/telegram.png"
                      alt="Telegram"
                      className="w-7 h-7"
                    />
                  </a>
                )}  

                {project.link && (
                  <a
                    href={project.link}
                    className="hover:opacity-80"
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
