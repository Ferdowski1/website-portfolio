"use client";
import { useState } from "react";

export default function About() {

  const [videoId, setVideoId] = useState("n8QjQh5BHks"); 

  const videos = {
    bitcoin: "n8QjQh5BHks",
    litecoin: "lzR6HhcrE3Q",
    cardano: "4-Y7KIuI5rQ",
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="mb-4">
        Hi, I’m Nathan Ferdowski. I graduated from the University of Illinois Urbana-Champaign with a degree in Computer Engineering. Since then, I've worked as a software developer at <strong>AT&T</strong> and <strong>SkillStorm</strong>, where I contributed to building scalable systems and enterprise applications.
      </p>

      <p className="mb-4">
        Outside of work, I’m deeply interested in <strong>cryptocurrencies</strong> and love analyzing, trading, and investing in digital assets. I’ve been building tools to track and visualize crypto performance and market trends.
      </p>

      <p className="mb-4">
        I’m also a big sports fan — particularly <strong>soccer</strong> and <strong>golf</strong>. I enjoy following leagues, stats, and sometimes building apps around them (like my Premier Fantasy App).
      </p>

      <p className="mb-8">
        I'm always looking to learn, build, and connect with others in the tech, finance, and sports analytics space.
      </p>

      <h2 className="text-xl font-semibold text-center mb-2">
        My most recent YouTube videos
      </h2>
      <div className="flex mt-6 bg-gray-100 rounded-lg shadow-md overflow-hidden">
        {/* Sidebar */}
        <div className="w-2/12 bg-gray-200 flex flex-col justify-start items-center py-4 space-y-4">
          <button
            onClick={() => setVideoId(videos.bitcoin)}
            className="px-2 py-1 text-sm bg-white rounded hover:bg-gray-100 w-full cursor-pointer"
          >
            Bitcoin
          </button>
          <button
            onClick={() => setVideoId(videos.litecoin)}
            className="px-2 py-1 text-sm bg-white rounded hover:bg-gray-100 w-full cursor-pointer"
          >
            Litecoin
          </button>
          <button
            onClick={() => setVideoId(videos.cardano)}
            className="px-2 py-1 text-sm bg-white rounded hover:bg-gray-100 w-full cursor-pointer"
          >
            Cardano
          </button>
        </div>

        {/* Video Player */}
        <div className="w-10/12">
          <iframe
            className="w-full h-[400px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Crypto Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-center mt-8 mb-2">
        My golf swing (still working on it)
      </h2>

      <div className="flex justify-center mt-6">
        <video controls className="w-[640px] h-[360px] rounded-lg shadow-lg">
          <source src="/golf_swing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}
