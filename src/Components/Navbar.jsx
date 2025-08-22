import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Adnan.dev</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
          {/* <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li> */}
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-gray-800 text-lg font-medium shadow-lg">
          <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/services">Services</Link></li>
          {/* <li><Link onClick={() => setIsOpen(false)} to="/projects">Projects</Link></li> */}
          <li><Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
