import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900/70 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Adnan</h1>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-200">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          {/* <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link> */}
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
