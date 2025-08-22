import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiIndeed } from "react-icons/si";
import img from "../assets/image/Adnan.png";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center min-h-screen bg-zinc-950 bg-opacity-90 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
      {/* Animated Background Blobs */}
      <div className="absolute -top-20 -left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Hero Container */}
      <div className="relative bg-gray-900 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 mt-5 sm:mt-10 md:mt-20 lg:mt-25 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Portrait Section - TOP on mobile */}
        <div className="flex-1 relative flex justify-center order-1 md:order-2 mt-3 sm:mt-6 md:mt-12 lg:mt-18">
          <div className="w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[28rem] shadow-lg flex items-center justify-center relative">
            
            {/* Floating Tech Stack Icons */}
            <div className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl text-blue-600 transition-transform duration-200 hover:scale-125">
              <FaReact />
            </div>
            <div className="absolute -bottom-6 left-6 text-2xl sm:text-3xl md:text-4xl text-sky-500 transition-transform duration-200 hover:scale-125">
              <SiTailwindcss />
            </div>
            <div className="absolute -top-6 right-6 text-2xl sm:text-3xl md:text-4xl text-orange-600 hover:text-orange-400 transition-transform duration-200 hover:scale-125">
              <SiHtml5 />
            </div>
            <div className="absolute -bottom-6 right-6 text-2xl sm:text-3xl md:text-4xl text-blue-700 hover:text-blue-400 transition-transform duration-200 hover:scale-125">
              <SiCss3 />
            </div>

            {/* Portrait Image */}
            <div className="rounded-full ring-1 ring-white/8 overflow-hidden w-28 sm:w-40 md:w-56 lg:w-72 xl:w-60">
              <img src={img} alt="Adnan" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Text Section - BELOW image on mobile */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 leading-tight">
            Hi, I'm <span className="text-blue-600">Adnan Ali Shah</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-lg mx-auto md:mx-0">
            I’m a Frontend Web Developer who transforms ideas into modern, responsive, and engaging web applications. With expertise in React.js, TailwindCSS, HTML5, and CSS3, I craft visually stunning, scalable, and business-driven digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-xl sm:text-2xl text-gray-300">
            <a
              href="https://github.com/AdnanAliShah/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:scale-125 transition-transform duration-500 hover:bg-white rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-ali-shah-ad2484"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 hover:scale-125 transition-transform duration-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.indeed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:scale-125 transition-transform duration-500"
            >
              <SiIndeed />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
