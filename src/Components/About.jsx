import { FaReact, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import img from "../assets/image/Adnan.png";
import CV from "../assets/image/CV.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-screen bg-gradient-to-b from-zinc-900 to-black px-6 py-20"
    >
      <div className="max-w-6xl w-full text-center flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-blue-500 mb-6">About Me</h2>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-10">
          I’m <span className="text-blue-400">Adnan Ali Shah</span>, a passionate{" "}
          <span className="text-indigo-400">Frontend Web Developer</span> who loves
          transforming creative ideas into impactful digital solutions. My goal is
          to deliver clean, responsive, and user-friendly applications while
          ensuring an exceptional user experience.
        </p>

        {/* Profile Image */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-blue-500 hover:scale-110 transition-transform">
          <img src={img} alt="Adnan Ali Shah" className="w-full h-full object-cover object-[center_10%]" />
        </div>

        {/* Skills Icons */}
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">My Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-8 text-5xl mb-12">
          <FaReact className="text-blue-500 hover:scale-125 transition-transform" />
          <SiTailwindcss className="text-sky-400 hover:scale-125 transition-transform" />
          <SiHtml5 className="text-orange-500 hover:scale-125 transition-transform" />
          <SiCss3 className="text-blue-600 hover:scale-125 transition-transform" />
          <SiJavascript className="text-yellow-400 hover:scale-125 transition-transform" />
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-white mb-3">🚀 Mission</h3>
            <p className="text-gray-300">
              To design and develop modern, scalable web applications that solve
              real-world problems and create unforgettable user experiences.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-white mb-3">🤝 Why Work With Me?</h3>
            <p className="text-gray-300">
              I combine creativity with technical expertise, ensuring each project
              is delivered with precision, innovation, and professionalism.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-white mb-3">💡 Strengths</h3>
            <p className="text-gray-300">
              Strong problem-solving, adaptability, teamwork, and a growth mindset
              that ensures continuous improvement in my craft.
            </p>
          </div>
        </div>

{/* Timeline */}
<h3 className="text-2xl font-semibold text-white mt-10 mb-6">My Journey</h3>
<div className="relative border-l-2 border-blue-500 pl-8 max-w-3xl mx-auto space-y-10">

  {/* Timeline Item */}
  <div className="relative">
    <div className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900"></div>
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h4 className="text-xl text-white font-semibold">2022 – Started Web Development</h4>
      <p className="text-gray-400 mt-2">
        Began learning HTML, CSS, and JS to build static websites and
        understand the basics of frontend development.
      </p>
    </div>
  </div>

  {/* Timeline Item */}
  <div className="relative">
    <div className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h4 className="text-xl text-white font-semibold">2023 – Mastered React & Tailwind</h4>
      <p className="text-gray-400 mt-2">
        Built multiple personal and freelance projects using React.js and
        Tailwind, improving UI/UX design practices.
      </p>
    </div>
  </div>

  {/* Timeline Item */}
  <div className="relative">
    <div className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-purple-500 border-4 border-gray-900"></div>
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h4 className="text-xl text-white font-semibold">2024 – Freelancing & Real Projects</h4>
      <p className="text-gray-400 mt-2">
        Worked with clients worldwide to deliver responsive, business-driven
        applications tailored to their needs.
      </p>
    </div>
  </div>

  {/* Timeline Item */}
  <div className="relative">
    <div className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-green-500 border-4 border-gray-900"></div>
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h4 className="text-xl text-white font-semibold">2025 – Expanding Skills</h4>
      <p className="text-gray-400 mt-2">
        Diving deeper into Next.js, backend APIs, and cloud deployments to
        become a full-stack developer.
      </p>
    </div>
  </div>
</div>


        {/* Resume Download Button */}
        <div className="mt-12">
          <a
            href={CV}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
