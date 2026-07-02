import { Link } from 'react-router-dom';
import {
  Printer,
  FileText,
  CreditCard,
  Stamp,
  Image,
  BookOpen,
  Shield,
  Clock,
  Star,
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  CheckCircle,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

// ─── Hero ───────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Zoom Printing Press"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-semibold uppercase tracking-wider mb-8">
              <Clock size={12} />
              Open 24 Hours — All 7 Days
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] font-[family-name:var(--font-serif)]" style={{ animationFillMode: 'both' }}>
            Your Trusted
            <span className="block text-secondary">Printing Partner</span>
            in Gachibowli
          </h1>

          <p className="animate-fade-in-up delay-200 mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl" style={{ animationFillMode: 'both' }}>
            Professional xerox, digital printing, flex banners, rubber stamps, and complete document solutions — delivered with precision and quality.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-4" style={{ animationFillMode: 'both' }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg shadow-secondary/30"
            >
              Our Services
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-16 grid grid-cols-3 gap-6 max-w-md" style={{ animationFillMode: 'both' }}>
            {[
              { value: '4.8', label: 'Rating' },
              { value: '470+', label: 'Reviews' },
              { value: '24/7', label: 'Service' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-secondary" />
        </div>
      </div>
    </section>
  );
}

// ─── Trusted By ─────────────────────────────────────────
function TrustedBy() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-12 lg:py-16 bg-surface border-y border-border">
      <div ref={ref} className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-center text-xs font-semibold uppercase tracking-[4px] text-text-light mb-8">
            Serving the Gachibowli IT Corridor & Beyond
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: <Shield size={20} />, text: 'IT Companies' },
              { icon: <BookOpen size={20} />, text: 'Educational Institutions' },
              { icon: <CreditCard size={20} />, text: 'Corporates & Startups' },
              { icon: <FileText size={20} />, text: 'Individuals & Students' },
            ].map((item, i) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-3 py-4 text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-primary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Preview ──────────────────────────────────────
function AboutPreview() {
  const { ref, isVisible } = useInView();

  return (
    <Section>
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative">
            <img
              src="/images/about-bg.jpg"
              alt="Zoom Printing Press workspace"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Always Open</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[4px] text-secondary mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight font-[family-name:var(--font-serif)] text-primary mb-6">
            Gachibowli's Most Trusted Printing Press
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Zoom Printing Press has been serving the Gachibowli community with professional printing and xerox services. Located on the busy Gachibowli-Miyapur Road in PJR Nagar, we are a one-stop destination for all your printing needs — from photocopying and document binding to flex banners, rubber stamps, and visiting cards.
          </p>
          <p className="text-text-light leading-relaxed mb-8">
            With a stellar rating of 4.8 stars from over 470 verified reviews on JustDial, our commitment to quality and professional service speaks for itself. We operate 24 hours, 7 days a week, ensuring you never have to wait for urgent printing needs.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Rated 4.8★ on JustDial with 470+ reviews',
              'Open 24 Hours — 7 Days a Week',
              'Multiple payment options: UPI, Cards, Cash',
              'Located in the heart of Gachibowli IT hub',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
          >
            Learn More About Us
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

// ─── Services / Categories ──────────────────────────────
const services = [
  {
    icon: <Printer size={28} />,
    title: 'Xerox & Photocopying',
    desc: 'High-speed black & white and color photocopying with crystal-clear output. Perfect for documents, ID proofs, certificates, and bulk copying.',
  },
  {
    icon: <Image size={28} />,
    title: 'Flex & Banner Printing',
    desc: 'Large format flex and vinyl banner printing for events, shop boards, hoardings, and promotional campaigns with vibrant colors.',
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Visiting Cards',
    desc: 'Premium business card printing on high-quality card stock with options for matte, glossy, textured, and spot UV finishes.',
  },
  {
    icon: <Stamp size={28} />,
    title: 'Rubber Stamps',
    desc: 'Custom rubber stamp manufacturing — self-inking, pre-inked, and traditional stamps for offices, businesses, and personal use.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Digital Printing',
    desc: 'High-resolution digital printing for brochures, pamphlets, catalogs, flyers, and marketing materials with professional finishing.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Lamination & Binding',
    desc: 'Document lamination, spiral binding, hard binding, and soft binding services for reports, theses, projects, and official documents.',
  },
];

function ServicesSection() {
  const { ref, isVisible } = useInView();

  return (
    <Section className="bg-surface">
      <div ref={ref}>
        <SectionHeading
          label="Our Services"
          title="Complete Printing Solutions"
          description="From everyday photocopying to large-format banner printing, we offer a comprehensive range of professional printing services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

// ─── Testimonials ───────────────────────────────────────
const testimonials = [
  {
    name: 'Mohammed Aamir Sher',
    text: 'Zoom — One of the top professionals in town with quality work. Highly recommended for all printing needs.',
    rating: 5,
    source: 'JustDial',
  },
  {
    name: 'Verified Customer',
    text: 'Excellent quality prints and fast service. Very convenient location in Gachibowli. The team is always helpful and delivers on time.',
    rating: 5,
    source: 'JustDial',
  },
  {
    name: 'Verified Customer',
    text: 'Best xerox center in Gachibowli. Open 24 hours which is extremely helpful for urgent document needs. Good quality prints at reasonable prices.',
    rating: 5,
    source: 'Google',
  },
];

function Testimonials() {
  const { ref, isVisible } = useInView();

  return (
    <Section dark>
      <div ref={ref}>
        <SectionHeading
          label="Client Testimonials"
          title="What Our Clients Say"
          description="Real reviews from real clients who trust Zoom Printing Press for their printing needs."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-secondary text-xs mt-0.5">via {t.source}</div>
                </div>
                <div className="text-white/20 text-4xl font-serif">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Contact CTA ────────────────────────────────────────
function ContactCTA() {
  const { ref, isVisible } = useInView();

  return (
    <Section>
      <div ref={ref}>
        <div
          className={`relative bg-gradient-to-br from-primary via-primary to-gray-900 rounded-3xl overflow-hidden p-10 md:p-16 lg:p-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight font-[family-name:var(--font-serif)]">
                Need Urgent Printing?
                <span className="block text-secondary mt-2">We're Open 24/7.</span>
              </h2>
              <p className="text-white/60 mt-4 leading-relaxed">
                Walk in anytime or send us your files. Our team is ready to handle your printing needs around the clock.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone size={16} />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                <MapPin size={16} />
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Main Export ─────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutPreview />
      <ServicesSection />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
