import Image from "next/image";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      {/*********************** Project 1 ******************************/}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/fantasy.png" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Premier League Fantasy App</h2>
          <p className="">
            I'm a huge soccer fan. Especially for the Premier League. I created this Premier League Fantasy app where you can create your own starting 11. This app uses a Postgresql database with Spring Boot for apis.
          </p>
          <a 
            href="/projects/premier-fantasy/my-team"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/*********************** Project 2 ******************************/}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/ada.png" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">YouTube Channel</h2>
          <p className="">
            I love to do analysis on Bitcoin and other Cryptocurrencies. My YouTube channel looks at charts and data in order to get a better understanding of where the asset class is heading. 
          </p>
          <a 
            href="https://www.youtube.com/@skiis1" 
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/*********************** Project 3 ******************************/}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/ltc_pgr.webp" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Litecoin Indicators</h2>
          <p className="">
            I'm really interested in Litecoin (and Bitcoin). I love to do anaylsis on Litecoin's chart. I created my own indicator Litecoin Power Bands (shown in the picture), as a way to measure Litecoin's price over time. I plan to create more indicators for Litecoin such as Litecoin Risk Indicator, in order to make better trades and investments. 
          </p>
          <a 
            href="https://www.youtube.com/playlist?list=PLna8qj1ZuaSUsT7QA0mTehDO5_UXw2ijR" 
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
{/*
      {/*********************** Project 4 *****************************
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/ltc_pgr.webp" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Movie Picker</h2>
          <p className="">
            Movie Picker Description
          </p>
          <a 
            href="https://www.youtube.com/playlist?list=PLna8qj1ZuaSUsT7QA0mTehDO5_UXw2ijR" 
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/*********************** Project 5 ******************************
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/ltc_pgr.webp" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Portfolio Tracker</h2>
          <p className="">
            Portfolio tracker round 2 
          </p>
          <a 
            href="https://www.youtube.com/playlist?list=PLna8qj1ZuaSUsT7QA0mTehDO5_UXw2ijR" 
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/*********************** Project 6 ******************************
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/ltc_pgr.webp" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Snake AI</h2>
          <p className="">
            Snake ai 
          </p>
          <a 
            href="https://www.youtube.com/playlist?list=PLna8qj1ZuaSUsT7QA0mTehDO5_UXw2ijR" 
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
      */}

    </section>
  )
}