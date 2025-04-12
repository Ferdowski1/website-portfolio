"use client";
import { useState } from "react";

export default function About() {
  const [videoId, setVideoId] = useState("n8QjQh5BHks");
  const [youtubeLoaded, setYoutubeLoaded] = useState(false);
  const [golfLoaded, setGolfLoaded] = useState(true);

  const videos: { [key: string]: string } = {
    bitcoin: "n8QjQh5BHks",
    litecoin: "lzR6HhcrE3Q",
    cardano: "4-Y7KIuI5rQ",
  };
  

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black">
      <section className="max-w-3xl mx-auto px-6 py-12 text-black space-y-6">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <p>
          Hi, I’m Nathan Ferdowski. I graduated from the University of Illinois Urbana-Champaign with a degree in Computer Engineering. Since then, I've worked as a software developer at <strong>AT&T</strong> and <strong>SkillStorm</strong>, where I contributed to building scalable systems and enterprise applications.
        </p>
        <p>
          Outside of work, I’m deeply interested in <strong>cryptocurrencies</strong> and love analyzing, trading, and investing in digital assets. I’ve been building tools to track and visualize crypto performance and market trends.
        </p>
        <p>
          I’m also a big sports fan — particularly <strong>soccer</strong> and <strong>golf</strong>. I enjoy following leagues, stats, and sometimes building apps around them (like my Premier Fantasy App).
        </p>
        <p>
          I'm always looking to learn, build, and connect with others in the tech, finance, and sports analytics space.
        </p>
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto space-y-4 text-black">
        <h2 className="text-xl font-semibold text-center">
          My most recent YouTube videos
        </h2>

        <div className="flex mt-6 bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-700 ease-in-out
          opacity-0 translate-y-4"
          style={{
            opacity: youtubeLoaded ? 1 : 0,
            transform: youtubeLoaded ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {/* Sidebar */}
          <div className="w-2/12 bg-gray-200 flex flex-col justify-start items-center py-4 space-y-4">
            {Object.keys(videos).map((key) => (
              <button
                key={key}
                onClick={() => {
                  const newId = videos[key];
                  if (newId !== videoId) {
                    setYoutubeLoaded(false);
                    setVideoId(newId);
                  }
                }}
                className="px-2 py-1 text-sm bg-white rounded hover:bg-gray-100 w-full cursor-pointer"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className="w-10/12">
            <iframe
              className="w-full h-[400px]"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Crypto Video"
              onLoad={() => setYoutubeLoaded(true)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-4 text-black">
        <h2 className="text-xl font-semibold text-center">
          My golf swing (still working on it)
        </h2>

        <div
          className="flex justify-center "
          style={{
            opacity: golfLoaded ? 1 : 0,
            transform: golfLoaded ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <video
            controls
            className="w-[640px] h-[360px] rounded-lg shadow-lg"
            onLoadedData={() => {
              console.log("LOADED");
              setGolfLoaded(true)}
            }
            onCanPlay={() => setGolfLoaded(true)}

          >
            <source src="/golf_swing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      */}
    </div>
  );
}
