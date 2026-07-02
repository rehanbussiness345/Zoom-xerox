import { useState, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CreditCard,
  CheckCircle,
  Navigation,
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
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-[family-name:var(--font-serif)] animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
            Get in
            <span className="block text-secondary">Touch With Us</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
            Visit us anytime — we're open 24/7. Or reach out by phone, email, or WhatsApp for quick assistance.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Info Cards ─────────────────────────────────
function ContactCards() {
  const { ref, isVisible } = useInView();

  const cards = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      lines: ['Call us anytime for inquiries'],
      action: { label: 'Call Now', href: 'tel:+919999999999' },
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      lines: ['Send us your files via WhatsApp'],
      action: { label: 'Chat on WhatsApp', href: 'https://wa.me/919999999999' },
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      lines: ['info@zoomprintingpress.com'],
      action: { label: 'Send Email', href: 'mailto:info@zoomprintingpress.com' },
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      lines: [
        'House Of Johnson, PJR Nagar,',
        'Besides Senco Gold And Diamond,',
        'Gachibowli, Hyderabad - 500032',
      ],
      action: {
        label: 'Get Directions',
        href: 'https://www.google.com/maps/search/?api=1&query=17.4395513,78.363844',
      },
    },
  ];

  return (
    <Section>
      <div ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-500 text-center group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-5 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
              <div className="space-y-1 mb-5">
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-text-light">{line}</p>
                ))}
              </div>
              <a
                href={card.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:text-accent transition-colors"
              >
                {card.action.label}
                <Navigation size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


// ─── Additional Info ────────────────────────────────────
function AdditionalInfo() {
  const { ref, isVisible } = useInView();

  return (
    <Section>
      <div ref={ref}>
        <SectionHeading
          label="Store Information"
          title="Everything You Need to Know"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            className={`bg-surface rounded-2xl p-8 border border-border text-center transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-5">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-light">Monday - Sunday</span>
                <span className="font-semibold text-primary">24 Hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-light">Holidays</span>
                <span className="font-semibold text-secondary">Open</span>
              </div>
            </div>
          </div>

          <div
            className={`bg-surface rounded-2xl p-8 border border-border text-center transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-5">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">Payment Methods</h3>
            <div className="space-y-2">
              {['UPI (GPay, PhonePe, etc.)', 'Visa / MasterCard / RuPay', 'Cash'].map((method) => (
                <div key={method} className="flex items-center justify-center gap-2 text-sm text-text-light">
                  <CheckCircle size={14} className="text-secondary" />
                  {method}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`bg-surface rounded-2xl p-8 border border-border text-center transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-5">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">Nearby Landmarks</h3>
            <div className="space-y-2">
              {['Besides Senco Gold & Diamond', 'Near Gachibowli-Miyapur Road', 'Opposite SBI Bank'].map((lm) => (
                <div key={lm} className="flex items-center justify-center gap-2 text-sm text-text-light">
                  <Navigation size={14} className="text-secondary" />
                  {lm}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Main Export ─────────────────────────────────────────
export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactCards />
      <ContactFormAndMap />
      <AdditionalInfo />
    </>
  );
}
