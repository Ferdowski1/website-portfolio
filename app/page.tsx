import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center min-h-screen px-8 sm:px-20 gap-8">
    {/* Left Side - Image */}
    <div className="w-full sm:w-1/2 flex justify-center">
      <Image 
        src="/placeholder.jpg"
        alt="Profile Picture" 
        width={300} 
        height={300} 
        className="rounded-full shadow-lg"
      />
    </div>

    {/* Right Side - Text & Buttons */}
    <div className="w-full sm:w-1/2 text-center sm:text-left space-y-4">
      <h1 className="text-3xl font-bold text-black">Hi, I'm Nathan Ferdowski</h1>
      <p className="text-lg text-black dark:text-black">
        I’m a passionate web developer focused on building creative and 
        high-performance applications.
      </p>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-start gap-4">
        <a href="/projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Projects
        </a>
        <a href="/contact" className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          Contact Me
        </a>
      </div>
    </div>
  </section>
  );
}
