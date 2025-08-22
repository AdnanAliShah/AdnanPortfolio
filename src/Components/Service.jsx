import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
            I provide high-quality, client-focused solutions to help businesses
            stand out digitally. From crafting modern interfaces to building
            responsive and scalable web applications, I deliver results that
            make an impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaCode className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">
              Frontend Development
            </h3>
            <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
              Building responsive, interactive, and user-friendly web apps with
              React.js, TailwindCSS, and modern frontend technologies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaMobileAlt className="text-5xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">
              Responsive Design
            </h3>
            <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
              Ensuring flawless experiences across devices with mobile-first,
              pixel-perfect responsive layouts that adapt seamlessly.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaRocket className="text-5xl text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">
              Performance Optimization
            </h3>
            <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
              Optimizing websites for speed, scalability, and smooth performance 
              to ensure excellent user experience and higher search engine rankings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
