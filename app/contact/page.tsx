export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center text-black">
      <h1 className="text-5xl font-bold mb-2">Contact Me</h1>
      <p className="text-gray-600 mb-12">Get in touch with me or just say hello!</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center">

        {/* LinkedIn */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a
                href="https://www.linkedin.com/in/nathan-ferdowski/"
                target="_blank"
                className="flex items-center justify-center w-full h-full"
              >
              <img src="/linkedin3.png" alt="LinkedIn" className="w-[60%] h-[60%]  rounded-full" />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">LinkedIn</span>
          <a className="text-sm text-blue-600 mt-1">
            Connect
          </a>
        </div>

        {/* YT */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
          <a
            href="https://www.youtube.com/@skiis1"
            target="_blank"
            className="flex items-center justify-center w-full h-full"
          >
            <img src="/youtube4.png" alt="YouTube" className="w-full h-full rounded-full"  />
          </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">YouTube</span>
          <p className="text-sm text-blue-600 mt-1">Subscribe</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <img src="/email.png" alt="Email" className="w-full h-full" />
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">Email</span>
          <p className="text-sm text-blue-600 mt-1">
            nathanferdowski@gmail.com
          </p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a
              href="https://github.com/Ferdowski1"
              target="_blank"
              className="flex items-center justify-center w-full h-full"
            >
              <img src="/github1.png" alt="GitHub" className="w-[95%] h-[95%]" />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">GitHub</span>
          <a className="text-sm text-blue-600 mt-1">
            View
          </a>
        </div>

        {/* Twitter */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
            <a
              href="https://x.com/skiis121"
              target="_blank"
              className="flex items-center justify-center w-full h-full"
            >
              <img src="/x2.png" alt="Twitter" className="w-[80%] h-[80%] justify-center" />
            </a>
          </div>
          <span className="uppercase text-xs text-pink-500 tracking-wide">X</span>
          <a className="text-sm text-blue-600 mt-1">
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}

{/*
  
  export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <p className="mb-4">
        I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me through any of the following methods:
      </p>

      <ul className="mb-4">
        <li><strong>Email:</strong> <a className="text-blue-600">nathanferdowski@gmail.com</a></li>

        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nathan-ferdowski" className="text-blue-600" target="_blank">linkedin.com/in/nathan-ferdowski</a></li>
      </ul>

      <p>
        I look forward to connecting with you!
      </p>
    </div>
  );
}
  
  
  */}