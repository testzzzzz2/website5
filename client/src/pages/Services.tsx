import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      title: 'Root Canal Treatment (RCT)',
      description: 'Our most-requested service. Dr. Meena\'s gentle, methodical approach makes RCT virtually painless. Hundreds of patients have walked in anxious and left relieved.',
      icon: '🦷',
      tag: 'Specialty',
    },
    {
      title: 'Re-Root Canal Treatment (Re-RCT)',
      description: 'Failed RCT from another clinic? Dr. Meena specializes in re-treatment cases that require advanced skill and precision.',
      icon: '🔄',
      tag: 'Advanced',
    },
    {
      title: 'Teeth Cleaning & Scaling',
      description: 'Professional cleaning that removes plaque, tartar, and stains — leaving your teeth healthier and your smile brighter.',
      icon: '✨',
      tag: 'Hygiene',
    },
    {
      title: 'Dental Caps & Crowns',
      description: 'Restore broken, decayed, or root canal-treated teeth with precision-fitted crowns for strength and aesthetics.',
      icon: '👑',
      tag: 'Restoration',
    },
    {
      title: 'Tooth Extraction',
      description: 'When a tooth must go, Dr. Meena ensures the procedure is as comfortable and quick as possible.',
      icon: '🪥',
      tag: 'Procedure',
    },
    {
      title: 'Full Mouth Rehabilitation',
      description: 'From 1 tooth to 12 — we handle complex full-mouth restoration cases with the same care and precision.',
      icon: '😁',
      tag: 'Complex',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 md:py-28 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Services
          </h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive dental care from a specialist you can trust
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} data-animate className="service-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="heading-sm mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="body-md text-foreground/80 mb-6">
                  {service.description}
                </p>
                <button className="btn-primary text-sm">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="bg-white rounded-lg border border-border p-8 md:p-12 text-center">
            <h3 className="heading-md mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Transparent & Affordable Pricing
            </h3>
            <p className="body-lg text-foreground/80 max-w-2xl mx-auto">
              We believe quality dental care should be accessible. Our pricing is transparent and affordable — enquire for a personalized quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialist Expertise',
                description: 'Dr. Meena is a specialist Endodontist with years of advanced training and experience.',
                icon: '🎓',
              },
              {
                title: 'Patient-Centric Approach',
                description: 'We listen to your concerns, explain every step, and prioritize your comfort above all.',
                icon: '❤️',
              },
              {
                title: 'Modern Technology',
                description: 'We use the latest dental equipment and techniques for the best possible outcomes.',
                icon: '🔬',
              },
            ].map((item, idx) => (
              <div key={idx} data-animate className="service-card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="body-md text-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Get Started?
          </h2>
          <p className="body-lg text-white/90 mb-8">
            Schedule your consultation with Dr. Meena today
          </p>
          <Link href="/contact">
            <a className="btn-outline">
              Book an Appointment
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
