"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [videoId, setVideoId] = useState("D8u6TSqAN1Y");
  const [youtubeLoaded, setYoutubeLoaded] = useState(false);
  const [golfLoaded, setGolfLoaded] = useState(true);
  const [currentSection, setCurrentSection] = useState("about-me");
  const [isOpen, setIsOpen] = useState(false);

  const videos: { [key: string]: string } = {
    bitcoin: "yFvej4ZDdo8",
    litecoin: "D8u6TSqAN1Y",
    cardano: "yZkO1tDnCZY",
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

    // Clean up scroll position and unlock scroll on page unload
    useEffect(() => {
      return () => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "";
      };
    }, []);
  
    // Lock/unlock scroll when modal is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }, [isOpen]);

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Dot Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
        {["about-me", "youtube-videos", "power-model", "golf-swing"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === id ? "bg-black scale-125" : "bg-gray-400"
            }`}
          ></a>
        ))}
      </div>

      {/* About Me Section */}
      <section
        id="about-me"
        className="snap-start h-screen px-6 py-12 max-w-5xl mx-auto text-black"
      >
        <div className="h-full flex flex-col justify-start pt-18 space-y-6">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
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
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section
        id="youtube-videos"
        className="snap-start h-screen px-6 py-18 max-w-5xl mx-auto text-black"
      >
        <div className="h-full flex flex-col justify-start pt-15 space-y-4">
          <h2 className="text-4xl font-semibold text-center">
            My most recent YouTube videos
          </h2>

          <div
            className="flex mt-6 bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-700 ease-in-out"
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
        </div>
      </section>

      {/* Power Model */}
      <section
      id="power-model"
      className="snap-start h-screen px-6 py-4 justify-start max-w-5xl mx-auto text-black"
      >
      <div className="h-full flex items-center justify-start">
        <div className="scale-[0.9] transform origin-center flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-semibold text-center">
            Litecoin Power Model & Market Analysis
          </h2>

          {/* Thumbnail image */}
          <img
            src="/power.png"
            alt="Litecoin Power Model"
            className="w-full cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          {/* Description */}
          <p>
            I developed a Litecoin Power Model to examine over a decade of historical price data using a log-log power regression. The model follows the form Price = a × Weekᵇ, designed to capture the long-term structural trend of Litecoin’s weekly closing prices. Around this fitted curve, I calculated standard deviation bands in logarithmic space to help quantify where price action sits relative to historical trend behavior, highlighting both overbought and oversold regions over time.

            In the chart, the blue line represents the core power model, while each green band reflects one standard deviation above or below it. The model and bands were generated in Python (using Matplotlib and SciPy), then deployed to TradingView using Pine Script for real-time visualization anchored to Litecoin's early price history.

            Notably, each market cycle has shown Litecoin peaking at a progressively lower deviation band, with the last top reaching just above +4σ. If this long-term pattern continues, the next significant peak could align with the +3σ band, forming a potential triple top structure across cycles.

            This model doesn’t aim to predict short-term fluctuations, but rather provides a long-term valuation framework to better understand where Litecoin currently stands within its broader market trajectory.
          </p>
        </div>
      </div>

      {/* Modal popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400 cursor-pointer focus:outline-none"
            aria-label="Close"
          >
            x
          </button>

          {/* Enlarged image */}
          <img
            src="/power.png"
            alt="Litecoin Fullscreen"
            className="max-w-full max-h-full rounded-md shadow-lg"
          />
        </div>
      )}
    </section>

    {/* Golf */}
    <section
      id="golf-swing"
      className="snap-start h-screen px-6 py-12 max-w-5xl mx-auto text-black overflow-y-auto"
    >
      <div className="min-h-full flex flex-col justify-center pt-15 space-y-4">
        <h2 className="text-4xl font-semibold text-center">My golf swing (Still working on it)</h2>
        
        <video
          className="w-full max-h-[500px] rounded-md shadow-lg"
          controls
          playsInline
        >
          <source src="/golf_swing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    
    {/* Trade
    <section
      id="Trade"
      className="snap-start h-screen px-6 py-4 justify-start max-w-5xl mx-auto text-black"
    >
      <div className="min-h-full flex flex-col justify-center pt-15 space-y-4">
      <div className="scale-[0.9] transform origin-center flex flex-col justify-center space-y-4">
        <h2 className="text-4xl font-semibold text-center">Trading</h2>
        <img
            src="/btctrade.png"
            alt="Bitcoin Trade"
            className="max-h-[80vh] w-auto mx-auto"
          />

        <p>
          BTC TRADE BABY
        </p>

      </div>
      </div>
    </section>
          */}

    </div>
  );
}