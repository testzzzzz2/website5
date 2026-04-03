import { MessageCircle, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">✓</span>
              </div>
              <span className="heading-sm text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Creative Smiles
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Creating healthy smiles, one patient at a time.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
              <span>🏢</span>
              Women-Owned Practice
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-sm text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:07881132273"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>078811 32273</span>
              </a>
              <a
                href="https://wa.me/917881132273"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com/?q=25.261939,82.9641229"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Chunar Rd, Awaleshpur, Varanasi</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="heading-sm text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hours
            </h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Opens 3:00 PM Daily</p>
              <p className="text-xs text-white/60">
                Walk-ins and prior appointments both welcome
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="heading-sm text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/917881132273"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>&copy; 2025 Creative Smiles Dental Care. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917881132273"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-40"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}
