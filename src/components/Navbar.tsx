import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 ${
              scrolled ? 'bg-primary text-white' : 'bg-secondary text-primary'
            }`}>
              Z
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                ZOOM
              </span>
              <span className={`block text-[10px] uppercase tracking-[3px] -mt-1 transition-colors duration-300 ${
                scrolled ? 'text-secondary' : 'text-secondary'
              }`}>
                Printing Press
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-secondary ${
                  location.pathname === link.path
                    ? scrolled ? 'text-secondary' : 'text-secondary'
                    : scrolled ? 'text-primary' : 'text-white/90'
                } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
                  location.pathname === link.path
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-secondary'
                  : 'bg-secondary text-primary hover:bg-white'
              }`}
            >
              <Phone size={14} />
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 md:px-10 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wider py-2 border-b border-border transition-colors ${
                location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-primary hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full bg-primary text-white hover:bg-secondary transition-all mt-2"
          >
            <Phone size={14} />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
