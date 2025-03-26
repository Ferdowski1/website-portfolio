import Image from "next/image";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/project1.jpg" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Project Title</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Brief description of the project.
          </p>
          <a 
            href="/projects/premier-fantasy"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/project1.jpg" 
            alt="Project 1" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Project Title</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Brief description of the project.
          </p>
          <a 
            href="https://github.com/yourusername/project-repo" 
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  )
}