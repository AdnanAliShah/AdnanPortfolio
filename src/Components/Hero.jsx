import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiIndeed } from "react-icons/si";
import img from "../assets/image/Adnan.png";
import About from "./About";

export default function Hero() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-zinc-950 bg-opacity-90 px-4">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      {/* Hero Container with Shadow */}
      <div className="relative bg-gray-900 shadow-2xl rounded-4xl p-20 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100">
            Hi, I'm <span className="text-blue-600">Adnan Ali Shah</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-lg">
            I’m a Frontend Web Developer who transforms ideas into modern, responsive, and engaging web applications. With expertise in React.js, TailwindCSS, HTML5, and CSS3, I craft visually stunning, scalable, and business-driven digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-6  text-2xl text-gray-300">
            <a href="https://github.com/AdnanAliShah/" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-150 transition-transform duration-500 hover:bg-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/adnan-ali-shah-ad2484" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:text-4xl transition-all duration-500">
              <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/adnan-ali-shah-ad2484" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:text-4xl transition-all duration-500">
              <SiIndeed />
            </a>
            
          </div>
        </div>

        {/* Portrait / Side Div */}
        <div className="flex-1 relative  flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
            {/* Tech Stack Icons inside portrait */}
            <div className="absolute -top-6 left-6 text-4xl text-blue-600 hover:scale-200 transition-transform duration-200">
              <FaReact />
            </div>
            <div className="absolute -bottom-6 left-6 text-4xl text-sky-500 hover:scale-200 transition-transform duration-200">
              <SiTailwindcss />
            </div>
            <div className="absolute -top-6 right-6 text-4xl text-orange-600 hover:text-orange-400 hover:scale-200 transition-colors duration-100">
              <SiHtml5 />
            </div>
            <div className="absolute -bottom-6 right-6 text-4xl text-blue-700 hover:text-blue-400 hover:scale-200 transition-colors duration-100">
              <SiCss3 />
            </div>
            <div className="roounded-full ring-1 overflow-hidden w-100 h-70 ">
            <span className="text-white text-2xl font-semibold">
                <img src={img} alt="No image" />
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}

