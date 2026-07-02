import { Link } from 'react-router-dom';
import {
  Printer,
  FileText,
  CreditCard,
  Stamp,
  Image,
  BookOpen,
  FileCheck,
  PenTool,
  Layers,
  Package,
  Scissors,
  ArrowRight,
  Phone,
  CheckCircle,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

// ─── Page Hero ──────────────────────────────────────────
function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[4px] text-secondary mb-4 animate-fade-in-up">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-[family-name:var(--font-serif)] animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
            Professional
            <span className="block text-secondary">Printing Services</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
            From single-page xerox copies to large-format flex banners — we deliver quality printing solutions for every need, around the clock.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Services Grid ──────────────────────────────────────
const allServices = [
  {
    icon: <Printer size={28} />,
    title: 'Xerox & Photocopying',
    desc: 'High-speed black & white and color photocopying services. Crystal clear output on various paper sizes — A4, A3, Legal, and custom.',
    deliverables: ['B/W Photocopying', 'Color Photocopying', 'A3 & A4 Sizes', 'Bulk Copying', 'Double-Side Printing'],
  },
  {
    icon: <Image size={28} />,
    title: 'Flex & Banner Printing',
    desc: 'Large format printing on flex, vinyl, and star flex materials. Perfect for shop boards, event backdrops, hoardings, and outdoor advertising.',
    deliverables: ['Flex Banners', 'Vinyl Banners', 'Star Flex', 'Shop Boards', 'Event Backdrops', 'Standees'],
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Visiting Card Printing',
    desc: 'Premium business card printing on high-quality card stock. Multiple finishes available including matte, glossy, and textured options.',
    deliverables: ['Matte Finish Cards', 'Glossy Finish Cards', 'Textured Cards', 'Spot UV Cards', 'Custom Shapes', 'Bulk Orders'],
  },
  {
    icon: <Stamp size={28} />,
    title: 'Rubber Stamp Making',
    desc: 'Custom rubber stamp manufacturing for businesses and individuals. Available in self-inking, pre-inked, and traditional wooden formats.',
    deliverables: ['Self-Inking Stamps', 'Pre-Inked Stamps', 'Wooden Stamps', 'Company Seals', 'Date Stamps', 'Custom Designs'],
  },
  {
    icon: <FileText size={28} />,
    title: 'Digital Printing',
    desc: 'High-resolution digital printing for marketing materials. Vibrant colors and sharp details on premium paper stocks.',
    deliverables: ['Brochures', 'Pamphlets & Flyers', 'Catalogs', 'Posters', 'Invitation Cards', 'Letterheads'],
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Lamination & Binding',
    desc: 'Professional document finishing services. Protect and present your documents with our range of lamination and binding options.',
    deliverables: ['Matte Lamination', 'Glossy Lamination', 'Spiral Binding', 'Hard Binding', 'Soft Binding', 'Thermal Binding'],
  },
  {
    icon: <FileCheck size={28} />,
    title: 'Document Services',
    desc: 'Complete document preparation and processing. Scanning, printing, formatting, and organizing documents for official submissions.',
    deliverables: ['Document Scanning', 'PDF Conversion', 'Resume Printing', 'Certificate Printing', 'Form Filling', 'Notary Support'],
  },
  {
    icon: <PenTool size={28} />,
    title: 'Design Services',
    desc: 'Basic graphic design support for your printing needs. We help you finalize layouts, colors, and formats before printing.',
    deliverables: ['Layout Design', 'Color Correction', 'Format Adjustment', 'Logo Placement', 'Template Design', 'Proof Review'],
  },
  {
    icon: <Layers size={28} />,
    title: 'Sticker & Label Printing',
    desc: 'Custom sticker and label printing on vinyl, paper, and transparent materials. Perfect for products, packaging, and promotions.',
    deliverables: ['Vinyl Stickers', 'Paper Stickers', 'Transparent Stickers', 'Product Labels', 'Wall Stickers', 'Custom Shapes'],
  },
  {
    icon: <Package size={28} />,
    title: 'Packaging & Box Printing',
    desc: 'Custom packaging solutions for small businesses. Printed boxes, bags, and wrapping materials with your branding.',
    deliverables: ['Printed Boxes', 'Paper Bags', 'Gift Wrapping', 'Custom Packaging', 'Food-Grade Packaging', 'Branded Bags'],
  },
  {
    icon: <Scissors size={28} />,
    title: 'Paper Cutting & Trimming',
    desc: 'Precision paper cutting and trimming services for custom sizes. Clean edges and exact measurements for professional results.',
    deliverables: ['Custom Size Cutting', 'Bulk Trimming', 'Edge Finishing', 'Die Cutting', 'Perforation', 'Scoring'],
  },
  {
    icon: <FileText size={28} />,
    title: 'ID Card Printing',
    desc: 'Professional ID card printing for organizations, events, and institutions. Durable PVC cards with clear photo printing.',
    deliverables: ['PVC ID Cards', 'Student ID Cards', 'Employee Badges', 'Event Passes', 'Membership Cards', 'Visitor Cards'],
  },
];

function ServicesList() {
  const { ref, isVisible } = useInView();

  return (
    <Section>
      <div ref={ref}>
        <SectionHeading
          label="What We Offer"
          title="Complete Range of Services"
          description="Every service you need under one roof — delivered with professional quality and quick turnaround times."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${Math.min(i, 5) * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed mb-5">{service.desc}</p>

              {/* Deliverables */}
              <div className="border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">Deliverables</p>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1 rounded-full bg-surface text-text-light border border-border"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Why Choose Us ──────────────────────────────────────
function WhyChooseUs() {
  const { ref, isVisible } = useInView();

  return (
    <Section className="bg-surface">
      <div ref={ref}>
        <SectionHeading
          label="Why Choose Us"
          title="The Zoom Advantage"
          description="Here's why thousands of customers in Gachibowli trust Zoom Printing Press for their printing needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            'Open 24 hours, 7 days a week — no downtime',
            'Rated 4.8★ with 470+ reviews on JustDial',
            'Located in the heart of Gachibowli IT corridor',
            'State-of-the-art printing equipment',
            'Multiple payment options: UPI, Cards, Cash',
            'Quick turnaround — most jobs done in minutes',
            'Competitive pricing for all budgets',
            'Professional and experienced team',
          ].map((item, i) => (
            <div
              key={item}
              className={`flex items-start gap-4 p-5 bg-white rounded-xl border border-border hover:border-secondary/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── CTA ────────────────────────────────────────────────
function ServicesCTA() {
  const { ref, isVisible } = useInView();

  return (
    <Section dark>
      <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight font-[family-name:var(--font-serif)] mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Walk into our store anytime or give us a call. We're always ready to help with your printing requirements.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone size={16} />
            Call Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

// ─── Main Export ─────────────────────────────────────────
export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesList />
      <WhyChooseUs />
      <ServicesCTA />
    </>
  );
}
