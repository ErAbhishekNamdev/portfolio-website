import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import {
  FaCode, FaPaintBrush, FaBolt, FaWrench, FaPlug, FaSitemap, FaArrowRight,
} from 'react-icons/fa';

const services = [
  {
    id: 'core-dev',
    icon: FaCode,
    emoji: '📦',
    number: '01',
    title: 'Core Development',
    tagline: 'Build anything on the web — fast, clean & scalable.',
    accent: '#06B6D4',   // cyan-500
    light: '#ECFEFF',
    items: [
      'Responsive website design & development',
      'Landing pages & marketing sites',
      'Single-page apps (React, Vue, Angular, Svelte)',
      'Progressive Web Apps (PWAs)',
      'E-commerce storefronts (Shopify, WooCommerce)',
      'Dashboards, admin panels & SaaS UIs',
    ],
  },
  {
    id: 'design-code',
    icon: FaPaintBrush,
    emoji: '🎨',
    number: '02',
    title: 'Design-to-Code',
    tagline: 'Turn your Figma vision into pixel-perfect reality.',
    accent: '#8B5CF6',   // violet-500
    light: '#F5F3FF',
    items: [
      'Figma / Adobe XD / Sketch to code',
      'Design system implementation',
      'Pixel-perfect UI implementation',
      'Component library / design system creation',
    ],
  },
  {
    id: 'performance',
    icon: FaBolt,
    emoji: '⚡',
    number: '03',
    title: 'Performance & Accessibility',
    tagline: 'Make your site blazing fast, accessible & SEO-ready.',
    accent: '#F59E0B',   // amber-500
    light: '#FFFBEB',
    items: [
      'Speed optimization (Core Web Vitals, code splitting)',
      'SEO-friendly markup & structure',
      'Technical SEO audits',
      'Accessibility (WCAG / ADA compliance)',
      'Cross-browser & cross-device testing',
      'Web performance audits',
    ],
  },
  {
    id: 'maintenance',
    icon: FaWrench,
    emoji: '🔧',
    number: '04',
    title: 'Maintenance & Modernization',
    tagline: 'Keep your product healthy, modern & bug-free.',
    accent: '#10B981',   // emerald-500
    light: '#ECFDF5',
    items: [
      'Bug fixes and debugging',
      'Legacy code refactoring',
      'Migrating old sites to modern frameworks',
      'Ongoing website maintenance & updates',
      'Code review services',
    ],
  },
  {
    id: 'integrations',
    icon: FaPlug,
    emoji: '🔌',
    number: '05',
    title: 'Integrations & Functionality',
    tagline: 'Connect APIs, CMSs and third-party services seamlessly.',
    accent: '#6366F1',   // indigo-500
    light: '#EEF2FF',
    items: [
      'API integration (payment gateways, CMS, services)',
      'CMS setup (WordPress, Webflow, Contentful, Sanity)',
      'Animation & interactivity (GSAP, Framer Motion)',
      'Form building and validation',
      'Basic backend / API work',
      'Analytics setup (GA, Tag Manager)',
    ],
  },
  {
    id: 'architecture',
    icon: FaSitemap,
    emoji: '🏗️',
    number: '06',
    title: 'Architecture & Advisory',
    tagline: 'Scale confidently with solid architecture & expert guidance.',
    accent: '#EC4899',   // pink-500
    light: '#FDF2F8',
    items: [
      'Frontend architecture consulting',
      'Frontend testing (Jest, Cypress, Playwright)',
      'Micro-frontend architecture',
      'Internationalization (i18n) setup',
      'Training / mentoring junior developers',
    ],
  },
];

function ServiceCard({ service, index, dark }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-[#111827] border border-white/[0.07] hover:border-white/[0.14]'
          : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Top color strip */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: service.accent }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* Icon box */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{
            background: dark ? `${service.accent}18` : service.light,
            border: `1px solid ${service.accent}35`,
          }}
        >
          <Icon style={{ color: service.accent }} className="text-sm" />
        </div>

        {/* Number + Title */}
        <div>
          <span
            className="text-[10px] font-black tracking-[0.2em] uppercase"
            style={{ color: service.accent }}
          >
            {service.emoji} {service.number}
          </span>
          <h3 className={`text-sm font-bold font-syne leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            {service.title}
          </h3>
        </div>
      </div>

      {/* Tagline */}
      <p className={`text-[12px] leading-relaxed mb-5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        {service.tagline}
      </p>

      {/* Feature list */}
      <ul className="space-y-2 flex-1 mb-5">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: service.accent }}
            />
            <span className={`text-[12px] leading-snug ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1 text-[11px] font-bold transition-all duration-200 hover:gap-2"
        style={{ color: service.accent }}
      >
        Get started <FaArrowRight className="text-[9px]" />
      </a>
    </motion.div>
  );
}

export default function Services() {
  const { dark } = useTheme();

  return (
    <section
      id="services"
      className={`py-16 md:py-24 px-4 transition-colors duration-300 ${dark ? 'bg-[#0A0D14]' : 'bg-[#F8FAFF]'}`}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Label */}
          <span className={`inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-4 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            What I Offer
          </span>

          <h2 className={`text-4xl md:text-5xl font-extrabold font-syne tracking-tight mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            My{' '}
            <span className="text-cyan-500">Services</span>
          </h2>

          <p className={`max-w-xl mx-auto text-sm md:text-base ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            End-to-end frontend solutions — from landing pages to full-stack apps — that perform, convert and impress.
          </p>

          {/* Divider */}
          <div className={`w-16 h-[2px] bg-cyan-500 mx-auto mt-6 rounded-full`} />
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} dark={dark} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-12 md:mt-16 rounded-2xl p-8 md:p-10 text-center ${
            dark ? 'bg-[#111827] border border-white/[0.07]' : 'bg-white border border-slate-200 shadow-sm'
          }`}
        >
          {/* Availability */}
          <div className="inline-flex items-center gap-2 mb-4 text-[11px] font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-500">Available for new projects</span>
          </div>

          <h3 className={`text-2xl md:text-3xl font-extrabold font-syne mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Have a project in mind?
          </h3>
          <p className={`text-sm mb-7 max-w-md mx-auto ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Let's talk about your idea and build something people love.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold transition-colors duration-200"
            >
              Start a Project <FaArrowRight className="text-xs" />
            </a>
            <a
              href="https://wa.me/917024073871"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold border transition-colors duration-200 ${
                dark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
