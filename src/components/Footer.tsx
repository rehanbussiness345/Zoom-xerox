import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-bold text-lg text-primary">
                Z
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">ZOOM</span>
                <span className="block text-[10px] uppercase tracking-[3px] -mt-1 text-secondary">
                  Printing Press
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Gachibowli's trusted printing partner. Professional xerox, printing, rubber stamps, and more — available 24/7 to serve your needs.
            </p>
            <div className="flex items-center gap-2 text-secondary text-sm font-medium">
              <Clock size={14} />
              Open 24 Hours — All 7 Days
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Xerox & Photocopying',
                'Digital Printing',
                'Flex & Banner Printing',
                'Rubber Stamps',
                'Visiting Cards',
                'Lamination & Binding',
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  PJR Nagar, Gachibowli - Miyapur Road, Gachibowli, Hyderabad - 500032, Telangana
                </span>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-secondary transition-colors"
                >
                  <Phone size={16} className="text-secondary flex-shrink-0" />
                  Contact via Phone
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@zoomprintingpress.com"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-secondary transition-colors"
                >
                  <Mail size={16} className="text-secondary flex-shrink-0" />
                  info@zoomprintingpress.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Zoom Printing Press. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <span>Accepts: UPI • Visa / MasterCard / RuPay • Cash</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
