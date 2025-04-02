import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center min-h-[80vh] pt-8 px-8 sm:px-20 gap-8">

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
          I’m a passionate software developer focused on building creative and
          high-performance applications.
        </p>

        {/* Buttons */}
        <div className="flex justify-center sm:justify-start gap-4">
          <a
            href="/contact"
            className="px-6 py-2 border border-blue-500 bg-blue-500 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-900"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/nathan-ferdowski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://x.com/Skiis121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/x.png" alt="X (Twitter)" width={32} height={32} />
          </a>
          <a
            href="https://github.com/Ferdowski1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" alt="GitHub" width={32} height={32} />
          </a>
          <a
            href="https://www.youtube.com/@skiis1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/youtube.png" alt="YouTube" width={32} height={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
