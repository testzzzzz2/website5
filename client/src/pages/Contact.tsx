import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 md:py-28 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get in Touch
          </h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            We're here to answer your questions and help you schedule your appointment
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-lg mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800 font-semibold">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="rct">Root Canal Treatment</option>
                      <option value="re-rct">Re-Root Canal Treatment</option>
                      <option value="cleaning">Teeth Cleaning & Scaling</option>
                      <option value="crowns">Dental Caps & Crowns</option>
                      <option value="extraction">Tooth Extraction</option>
                      <option value="full-mouth">Full Mouth Rehabilitation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your dental needs..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-lg mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:07881132273" className="text-primary hover:text-primary/80 transition-colors">
                      078811 32273
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/917881132273"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/80 text-sm">
                      Chunar Rd, near Narayan Das Jewellers,
                      <br />
                      Awaleshpur, Varanasi,
                      <br />
                      Uttar Pradesh 221106
                    </p>
                    <a
                      href="https://maps.google.com/?q=25.261939,82.9641229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-foreground/80 text-sm">
                      Opens 3:00 PM Daily
                      <br />
                      Walk-ins and prior appointments both welcome
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-12 p-6 bg-white rounded-lg border border-border">
                <p className="body-sm text-foreground/80">
                  <strong>How to reach us:</strong> We're located near Narayan Das Jewellers in Awaleshpur. Look for the Creative Smiles Dental Care sign on Chunar Road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full h-96 md:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8239843948837!2d82.96412291234567!3d25.261939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2e2e2e2e2f%3A0x0!2sCreative%20Smiles%20Dental%20Care!5e0!3m2!1sen!2sin!4v1234567890"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
