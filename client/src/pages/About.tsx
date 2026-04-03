import { useEffect, useRef } from 'react';
import { Heart, Shield, Smile, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
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

  const values = [
    {
      title: 'Patient Comfort',
      description: 'Your comfort and peace of mind are our top priorities. We create a calm, anxiety-free environment.',
      icon: <Smile size={32} className="text-primary" />,
    },
    {
      title: 'Clinical Excellence',
      description: 'We combine advanced technology with expert skill to deliver the best possible outcomes.',
      icon: <Shield size={32} className="text-primary" />,
    },
    {
      title: 'Honest Advice',
      description: 'We recommend only what you truly need. No unnecessary procedures, just genuine care.',
      icon: <Heart size={32} className="text-primary" />,
    },
    {
      title: 'Hygiene First',
      description: 'Strict sterilization protocols and the highest standards of cleanliness in every procedure.',
      icon: <Sparkles size={32} className="text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 md:py-28 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Creative Smiles
          </h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Discover the story behind Varanasi's most trusted dental clinic
          </p>
        </div>
      </section>

      {/* Dr. Meena's Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-animate className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663510253066/Zx4wyT48BSFUxunTVTiGaZ/doctor-portrait-JngVMK69pGHyNyhxcPG6i3.webp"
                alt="Dr. Meena Singh"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div data-animate className="order-1 md:order-2">
              <h2 className="heading-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dr. Meena Singh's Journey
              </h2>
              <div className="space-y-6 text-foreground/80">
                <p className="body-lg">
                  Dr. Meena Singh is a specialist Endodontist with a passion for transforming patient experiences. Her journey into dentistry was driven by a simple belief: every patient deserves to feel heard, respected, and cared for.
                </p>
                <p className="body-lg">
                  With over a decade of clinical experience, Dr. Meena has perfected the art of painless root canal treatments. Her calm, methodical approach and genuine compassion have earned her a perfect 5.0 rating across 224+ patient reviews.
                </p>
                <p className="body-lg">
                  Today, Creative Smiles Dental Care stands as a beacon of excellence in Varanasi—a place where cutting-edge technology meets human warmth, and where every patient leaves with a healthier smile and restored confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} data-animate className="service-card text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="heading-sm mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {value.title}
                </h3>
                <p className="body-md text-foreground/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-animate>
              <div className="heading-lg text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                224+
              </div>
              <p className="body-md text-white/80">Happy Patients</p>
            </div>
            <div data-animate>
              <div className="heading-lg text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                5.0
              </div>
              <p className="body-md text-white/80">Google Rating</p>
            </div>
            <div data-animate>
              <div className="heading-lg text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                4+
              </div>
              <p className="body-md text-white/80">Years Serving</p>
            </div>
            <div data-animate>
              <div className="heading-lg text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                100%
              </div>
              <p className="body-md text-white/80">Specialist Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Women-Owned Badge */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-lg border-2 border-primary mb-8">
            <span className="text-3xl">🏢</span>
            <div className="text-left">
              <p className="heading-sm text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                Women-Owned Practice
              </p>
              <p className="body-sm text-foreground/70">
                Proud to be led by a woman specialist in healthcare
              </p>
            </div>
          </div>
          <p className="body-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Creative Smiles Dental Care is proudly owned and operated by Dr. Meena Singh. We believe in breaking barriers, setting standards, and proving that excellence in healthcare knows no gender.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Experience the Difference
          </h2>
          <p className="body-lg text-white/90 mb-8">
            Ready to meet Dr. Meena and discover why patients trust us with their smiles?
          </p>
          <Link href="/contact">
            <a className="btn-outline">
              Book Your Appointment
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
