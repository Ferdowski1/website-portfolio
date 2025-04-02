export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <p className="mb-4">
        I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me through any of the following methods:
      </p>

      <ul className="mb-4">
        <li><strong>Email:</strong> <a className="text-blue-600">nathanferdowski@gmail.com</a></li>
        {/*<li><strong>Phone:</strong> (123) 456-7890</li>*/}
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nathan-ferdowski" className="text-blue-600" target="_blank">linkedin.com/in/nathan-ferdowski</a></li>
      </ul>

      <p>
        I look forward to connecting with you!
      </p>
    </div>
  );
}
