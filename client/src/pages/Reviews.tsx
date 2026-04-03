import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Reviews() {
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

  const allReviews = [
    { name: 'Dilip Singh', text: 'Dr. Meena Singh is extremely cooperative, patient, and truly an expert at what she does.', rating: 5 },
    { name: 'Shreyansh Pandey', text: 'I was given proper explanations about all procedures and Dr. Meena was so patient with all my queries.', rating: 5 },
    { name: 'Anushri Singh', text: 'The clinic\'s cleanliness and organized setup really stood out. The whole RCT was handled with great care and hygiene.', rating: 5 },
    { name: 'Abhinav Singh', text: 'She listens carefully, gives genuine advice and doesn\'t suggest unnecessary procedures. Highly satisfied.', rating: 5 },
    { name: 'Justice P C Jaiswal', text: 'Dr. Meena Singh is a well experienced & skilled Endodontist. She explains all the pros & cons of treatment.', rating: 5 },
    { name: 'Dinesh Sharma', text: 'I met Dr. Meena Singh — she assured me and replaced 12 teeth beautifully. I got my smile back.', rating: 5 },
    { name: 'Bhaskar Singh', text: 'Outstanding service and professionalism. Dr. Meena\'s expertise is unmatched.', rating: 5 },
    { name: 'Ved Singh', text: 'Best experience at a dental clinic. Highly recommended!', rating: 5 },
    { name: 'Jai Singh', text: 'Dr. Meena is very professional and caring. The clinic is clean and well-maintained.', rating: 5 },
    { name: 'Usha Shankar', text: 'I was nervous about my root canal, but Dr. Meena made it painless. Thank you!', rating: 5 },
    { name: 'Anand Singh', text: 'Excellent treatment and follow-up care. Truly a specialist.', rating: 5 },
    { name: 'Shashank Singh', text: 'Dr. Meena\'s calm approach and clear explanations gave me confidence.', rating: 5 },
    { name: 'Kir Wani', text: 'The best dental clinic in Varanasi. Highly professional team.', rating: 5 },
    { name: 'Vikas Pandey', text: 'Great experience. Dr. Meena is very skilled and patient.', rating: 5 },
    { name: 'Sandhya Singh', text: 'Painless treatment and excellent aftercare. Highly satisfied!', rating: 5 },
    { name: 'Meghna Kapur', text: 'Dr. Meena is a true professional. The clinic is modern and hygienic.', rating: 5 },
    { name: 'Abhinav Kumar', text: 'One of the best dental experiences I\'ve had. Highly recommended.', rating: 5 },
    { name: 'Deepa Singh', text: 'Excellent service and genuine care. Thank you, Dr. Meena!', rating: 5 },
    { name: 'Urban Body Care', text: 'Professional, hygienic, and patient-focused. Best clinic in town!', rating: 5 },
    { name: 'Amit Pathak', text: 'Dr. Meena\'s expertise and warmth make all the difference. Highly satisfied!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 md:py-28 mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Patients Say
          </h1>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="currentColor" className="text-accent" />
            ))}
          </div>
          <p className="body-lg text-white/90">
            <span className="heading-md text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              5.0 Rating
            </span>
            <br />
            <span>224+ Happy Patients</span>
          </p>
        </div>
      </section>

      {/* Featured Review */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-primary text-white rounded-lg p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <blockquote className="heading-lg text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              "Dr. Meena Singh is a well experienced & skilled Endodontist. She explains all the pros & cons of treatment with utmost clarity."
            </blockquote>
            <p className="body-lg text-white/90">
              — Justice P C Jaiswal
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            All Patient Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, idx) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Experience It Yourself
          </h2>
          <p className="body-lg text-white/90 mb-8">
            Join hundreds of satisfied patients who trust Dr. Meena with their smiles
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
