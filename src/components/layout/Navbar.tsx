import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled py-3' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span style={{ color: 'var(--primary-blue)' }}>RESPO</span>
              <span style={{ color: 'var(--primary-orange)' }}>_CODEUR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `hover:text-primary-blue transition-colors ${isActive ? 'font-semibold text-primary-blue' : ''}`
            }>
              Accueil
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `hover:text-primary-blue transition-colors ${isActive ? 'font-semibold text-primary-blue' : ''}`
            }>
              À propos
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              `hover:text-primary-blue transition-colors ${isActive ? 'font-semibold text-primary-blue' : ''}`
            }>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => 
              `hover:text-primary-blue transition-colors ${isActive ? 'font-semibold text-primary-blue' : ''}`
            }>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => 
              `hover:text-primary-blue transition-colors ${isActive ? 'font-semibold text-primary-blue' : ''}`
            }>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `hover:text-primary-blue transition-colors ${isActive ? 'font-semibold text-primary-blue' : ''}`
            }>
              Contact
            </NavLink>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-primary-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className={({ isActive }) => 
                `hover:text-primary-blue transition-colors px-3 py-2 rounded-md ${isActive ? 'font-semibold bg-gray-100' : ''}`
              } onClick={() => setIsOpen(false)}>
                Accueil
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `hover:text-primary-blue transition-colors px-3 py-2 rounded-md ${isActive ? 'font-semibold bg-gray-100' : ''}`
              } onClick={() => setIsOpen(false)}>
                À propos
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => 
                `hover:text-primary-blue transition-colors px-3 py-2 rounded-md ${isActive ? 'font-semibold bg-gray-100' : ''}`
              } onClick={() => setIsOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => 
                `hover:text-primary-blue transition-colors px-3 py-2 rounded-md ${isActive ? 'font-semibold bg-gray-100' : ''}`
              } onClick={() => setIsOpen(false)}>
                Portfolio
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => 
                `hover:text-primary-blue transition-colors px-3 py-2 rounded-md ${isActive ? 'font-semibold bg-gray-100' : ''}`
              } onClick={() => setIsOpen(false)}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `hover:text-primary-blue transition-colors px-3 py-2 rounded-md ${isActive ? 'font-semibold bg-gray-100' : ''}`
              } onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;