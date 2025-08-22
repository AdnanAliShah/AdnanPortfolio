import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import CV from "../assets/image/CV.pdf";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative bg-zinc-950 text-gray-200 py-16 sm:py-20 px-4 sm:px-8 lg:px-12 flex justify-center overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute -top-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 z-10">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
            Send a Message
          </h2>
          <p className="text-gray-400 mt-2 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
            Have an idea or opportunity? Drop me a line, I’ll reply soon!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-zinc-800 text-gray-200 
                         text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-zinc-800 text-gray-200 
                         text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-zinc-800 text-gray-200 
                         text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 sm:py-3 md:py-4 rounded-xl font-semibold 
                         text-base sm:text-lg md:text-xl text-white 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:opacity-90 transition duration-300 shadow-lg"
            >
              🚀 Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-green-400 font-medium animate-pulse">{status}</p>}
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mt-3 mb-8 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
            Whether it’s a project, collaboration, or just a hello — I’d love to
            connect. Here are my direct links:
          </p>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <FaEnvelope className="text-blue-400 text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base md:text-lg">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adnanali.becoder@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="send an email to Adnan"
                className="hover:text-blue-400 text-sm sm:text-base md:text-lg">
                adnanali.becoder@gmail.com</a></span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaPhone className="text-green-400 text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base md:text-lg">+92 3405167534</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaGithub className="text-white text-xl sm:text-2xl" />
              <a
                href="https://github.com/AdnanAliShah/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 text-sm sm:text-base md:text-lg"
              >
                github.com/adnan
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaLinkedin className="text-blue-600 text-xl sm:text-2xl" />
              <a
                href="https://www.linkedin.com/in/adnan-ali-shah-ad2484/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 text-sm sm:text-base md:text-lg"
              >
                linkedin.com/in/adnan-ali-shah-ad2484
              </a>
            </div>
          </div>

          {/* CV Button */}
          <a
            href={CV}
            download
            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-2 sm:py-3 md:py-4 
                       bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white 
                       text-sm sm:text-base md:text-lg font-medium hover:opacity-90 transition"
          >
            <FaDownload /> Download CV
          </a>

          {/* Social Icons */}
          <div className="flex gap-5 sm:gap-6 mt-8 sm:mt-10">
            <a
              href="https://github.com/AdnanAliShah/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                         bg-zinc-800 rounded-full hover:bg-blue-600 hover:scale-105 transition duration-300 shadow-md"
            >
              <FaGithub className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-ali-shah-ad2484/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                         bg-zinc-800 rounded-full hover:bg-purple-600 transition hover:scale-105 duration-300 shadow-md"
            >
              <FaLinkedin className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://profile.indeed.com/?hl=en&co=PK&from=gnav-homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                         bg-zinc-800 rounded-full hover:bg-sky-600 transition hover:scale-105 duration-300 shadow-md"
            >
              <SiIndeed className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
