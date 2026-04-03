import { useEffect, useRef } from 'react';
import { Star, Award, Users, Heart } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Setup Intersection Observer for scroll animations
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

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const testimonials = [
    'One of the best dental experiences I\'ve ever had. — Dilip Singh',
    'Painless. Smooth. Professional. — Abhinay Kumar',
    'Best Endodontist in Varanasi. — Anushri Singh',
    'Dr. Meena made me feel completely comfortable. — Shreyansh Pandey',
    'I got my smile back. — Dinesh Sharma, Toronto',
    'Treatment done with utmost care and hygiene. — Anushri Singh',
    'No unnecessary procedures — genuine advice. — Abhinav Singh',
    'The whole RCT was handled with great care. — Anushri Singh',
  ];

  const reviews = [
    {
      name: 'Dilip Singh',
      text: 'Dr. Meena Singh is extremely cooperative, patient, and truly an expert at what she does.',
      rating: 5,
    },
    {
      name: 'Shreyansh Pandey',
      text: 'I was given proper explanations about all procedures and Dr. Meena was so patient with all my queries.',
      rating: 5,
    },
    {
      name: 'Anushri Singh',
      text: 'The clinic\'s cleanliness and organized setup really stood out. The whole RCT was handled with great care and hygiene.',
      rating: 5,
    },
    {
      name: 'Abhinav Singh',
      text: 'She listens carefully, gives genuine advice and doesn\'t suggest unnecessary procedures. Highly satisfied.',
      rating: 5,
    },
    {
      name: 'Justice P C Jaiswal',
      text: 'Dr. Meena Singh is a well experienced & skilled Endodontist. She explains all the pros & cons of treatment.',
      rating: 5,
    },
    {
      name: 'Dinesh Sharma',
      text: 'I met Dr. Meena Singh — she assured me and replaced 12 teeth beautifully. I got my smile back.',
      rating: 5,
    },
  ];

  const services = [
    {
      title: 'Root Canal Treatment',
      description: 'Our most-requested service. Dr. Meena\'s gentle, methodical approach makes RCT virtually painless.',
      icon: '🦷',
    },
    {
      title: 'Teeth Cleaning & Scaling',
      description: 'Professional cleaning that removes plaque, tartar, and stains — leaving your teeth healthier.',
      icon: '✨',
    },
    {
      title: 'Dental Caps & Crowns',
      description: 'Restore broken, decayed, or root canal-treated teeth with precision-fitted crowns.',
      icon: '👑',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-start pt-20 overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663510253066/Zx4wyT48BSFUxunTVTiGaZ/hero-smile-1-Gu9WTgnRE6HhEyqNX5gmmc.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Varanasi's Most Trusted Smile Specialists
            </h1>
            <p className="body-lg text-white/90 mb-8 max-w-xl">
              Painless root canal treatments, advanced dental care, and a doctor who actually listens.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary">
                Book an Appointment
              </button>
              <button className="btn-outline">
                Explore Services
              </button>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="trust-badge bg-white/10 border-white/20 text-white">
                <Star size={16} fill="currentColor" />
                <span>5.0 Rating</span>
              </div>
              <div className="trust-badge bg-white/10 border-white/20 text-white">
                <Users size={16} />
                <span>224+ Patients</span>
              </div>
              <div className="trust-badge bg-white/10 border-white/20 text-white">
                <Award size={16} />
                <span>Specialist</span>
              </div>
              <div className="trust-badge bg-white/10 border-white/20 text-white">
                <Heart size={16} fill="currentColor" />
                <span>Women-Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="bg-white py-8 overflow-hidden border-b border-border">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-scroll flex gap-8 whitespace-nowrap">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 text-foreground text-sm md:text-base font-medium">
                ⭐ {testimonial}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Painless Root Canals',
                description: 'Hundreds of patients describe their RCT as "painless" and "smooth." Dr. Meena\'s calm, step-by-step approach eliminates anxiety.',
                icon: '😊',
              },
              {
                title: 'A Doctor Who Listens',
                description: 'She explains every step clearly, answers all your questions patiently, and never recommends unnecessary procedures.',
                icon: '👂',
              },
              {
                title: 'Modern & Hygienic',
                description: 'Fully equipped with the latest dental technology in a clean, organized, and welcoming clinical environment.',
                icon: '🏥',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                data-animate
                className="service-card"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="heading-sm mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {card.title}
                </h3>
                <p className="body-md text-foreground/80">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <blockquote className="heading-lg text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              "I was quite nervous at first, but Dr. Meena's calm demeanor and clear explanation made the experience far better than I ever expected."
            </blockquote>
            <p className="body-lg text-white/90">
              — Abhinay Kumar, Root Canal Patient
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <div key={idx} data-animate className="service-card text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="heading-sm mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="body-md text-foreground/80 mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <a className="btn-primary">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Spotlight */}
      <section className="py-20 md:py-28 bg-white">
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
                Meet Dr. Meena Singh
              </h2>
              <p className="body-lg text-foreground/80 mb-6">
                Dr. Meena Singh is a specialist Endodontist and one of Varanasi's most sought-after dental professionals. Known for her patient-first approach, she combines deep clinical expertise with a warm, calming bedside manner that has earned her a perfect 5.0 rating across 224+ reviews.
              </p>
              <p className="body-lg text-foreground/80 mb-8">
                Her clinic, Creative Smiles Dental Care, is recognized for modern equipment, strict hygiene standards, and an environment where patients feel genuinely cared for.
              </p>
              <Link href="/about">
                <a className="btn-primary">
                  Learn More About Dr. Meena
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <div key={idx} data-animate className="review-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <p className="body-md text-foreground/80 mb-4">
                  "{review.text}"
                </p>
                <p className="font-semibold text-foreground">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews">
              <a className="btn-primary">
                See All 224+ Reviews
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for a Healthier Smile?
          </h2>
          <p className="body-lg text-white/90 mb-8">
            Book your appointment today — walk-ins and prior appointments both welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07881132273" className="btn-outline">
              Call Now: 078811 32273
            </a>
            <a
              href="https://maps.google.com/?q=25.261939,82.9641229"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Get Directions
            </a>
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

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
