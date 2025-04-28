"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const allLoaded = loadedCount === 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center text-black">
      <h1 className="text-5xl font-bold mb-2">Contact Me</h1>
      <p className="text-gray-600 mb-12">Get in touch with me or just say hello!</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center">

        {/* LinkedIn */}
        <div
          className={`flex flex-col items-center transform transition-opacity transition-transform duration-700 ease-out ${
            mounted && allLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `0ms` }}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a href="https://www.linkedin.com/in/nathan-ferdowski/" target="_blank" className="flex items-center justify-center w-full h-full">
              <img src="/linkedin3.png" alt="LinkedIn" className="w-[60%] h-[60%]" onLoad={handleLoad} />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">LinkedIn</span>
          <a href="https://www.linkedin.com/in/nathan-ferdowski/" target="_blank" className="text-sm text-blue-600 mt-1">
            Connect
          </a>
        </div>

        {/* YouTube */}
        <div
          className={`flex flex-col items-center transform transition-opacity transition-transform duration-700 ease-out ${
            mounted && allLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `100ms` }}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a href="https://www.youtube.com/@skiis1" target="_blank" className="flex items-center justify-center w-full h-full">
              <img src="/youtube4.png" alt="YouTube" className="w-full h-full rounded-full" onLoad={handleLoad} />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">YouTube</span>
          <a href="https://www.youtube.com/@skiis1" target="_blank" className="text-sm text-blue-600 mt-1">
            Subscribe
          </a>
        </div>

        {/* Email */}
        <div
          className={`flex flex-col items-center transform transition-opacity transition-transform duration-700 ease-out ${
            mounted && allLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `200ms` }}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <img src="/email.png" alt="Email" className="w-full h-full" onLoad={handleLoad} />
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">Email</span>
          <p className="text-sm text-blue-600 mt-1">nathanferdowski@gmail.com</p>
        </div>

        {/* GitHub */}
        <div
          className={`flex flex-col items-center transform transition-opacity transition-transform duration-700 ease-out ${
            mounted && allLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `300ms` }}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a href="https://github.com/Ferdowski1" target="_blank" className="flex items-center justify-center w-full h-full">
              <img src="/github1.png" alt="GitHub" className="w-[95%] h-[95%]" onLoad={handleLoad} />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">GitHub</span>
          <a href="https://github.com/Ferdowski1" target="_blank" className="text-sm text-blue-600 mt-1">
            View
          </a>
        </div>

        {/* X (Twitter) */}
        <div
          className={`flex flex-col items-center transform transition-opacity transition-transform duration-700 ease-out ${
            mounted && allLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `400ms` }}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a href="https://x.com/skiis121" target="_blank" className="flex items-center justify-center w-full h-full">
              <img src="/x2.png" alt="X" className="w-[80%] h-[80%]" onLoad={handleLoad} />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">X</span>
          <a href="https://x.com/skiis121" target="_blank" className="text-sm text-blue-600 mt-1">
            Follow
          </a>
        </div>

      </div>
    </div>
  );
}
