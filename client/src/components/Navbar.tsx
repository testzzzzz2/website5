import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'wouter';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 no-underline">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span
                className="heading-sm text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Creative Smiles
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-foreground hover:text-primary transition-colors duration-200 font-medium no-underline">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Desktop CTA and Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:07881132273"
              className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">078811 32273</span>
            </a>
            <button className="btn-primary">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block px-4 py-2 text-foreground hover:bg-background rounded-lg transition-colors no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="px-4 py-2 space-y-3 border-t border-border pt-3">
              <a
                href="tel:07881132273"
                className="flex items-center gap-2 text-primary font-medium"
              >
                <Phone size={18} />
                078811 32273
              </a>
              <button className="btn-primary w-full">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
