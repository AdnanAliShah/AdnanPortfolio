import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-gray-300 py-10 border-t border-zinc-800 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6
                        px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600 opacity-20 blur-3xl flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-600 opacity-20 blur-3xl flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
        
        {/* Branding / Copyright */}
        <p className="text-sm text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 text-center">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Adnan Ali Shah</span>. All Rights Reserved.
        </p>

        {/* Quick Links
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </li>
        </ul> */}

        {/* Social Icons */}
        <div className="flex gap-5 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
          <a
            href="mailto:adnanali.becoder@gmail.com"
            className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-blue-600 transition duration-300 shadow-md
                        text-sm sm:text-base md:text-lg hover:text-blue-400"
          >
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href="https://github.com/AdnanAliShah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-gray-700 transition duration-300 shadow-md
                      text-sm sm:text-base md:text-lg hover:text-blue-400"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/adnan-ali-shah-ad2484"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-blue-500 transition duration-300 shadow-md
                        text-sm sm:text-base md:text-lg hover:text-blue-400"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
