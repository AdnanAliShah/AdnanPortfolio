import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek and responsive personal portfolio built with React.js and TailwindCSS showcasing my skills and projects.",
    image: "https://via.placeholder.com/600x400", // Replace with project screenshot
    github: "https://github.com/",
    demo: "https://yourportfolio.com",
    tech: ["React", "TailwindCSS"],
  },
  {
    title: "E-commerce Store",
    description:
      "A modern e-commerce web app with product listings, shopping cart, and responsive UI.",
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/",
    demo: "https://ecommerce-demo.com",
    tech: ["React", "CSS3", "HTML5"],
  },
  {
    title: "Dashboard App",
    description:
      "An interactive admin dashboard with charts and analytics for real-time insights.",
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/",
    demo: "https://dashboard-demo.com",
    tech: ["React", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-900 text-gray-200 py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <h2 className="text-4xl font-bold mb-6 text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Projects
        </h2>
        <p className="text-gray-400 mb-12 text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          Here are some of the projects I’ve worked on recently. Each project
          reflects my passion for building clean and user-friendly web
          applications.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl object-cover"
              />
              <div className="p-6 text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base md:text-lg lg:text-xl mt-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
