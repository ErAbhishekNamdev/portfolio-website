import { FaCode, FaPaintBrush, FaBolt, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

export const SERVICES_DATA = [
  {
    id: 'web-dev',
    number: '01',
    category: 'web',
    title: 'Web & Landing Page Development',
    description:
      'Custom, high-converting landing pages and business websites engineered for speed, SEO, and lead generation.',
    price: '₹3,000 – ₹25,000',
    accent: '#0EA5E9',
    icon: FaCode,
    deliverables: [
      'High-converting SaaS & Startup Landing Pages',
      'Multi-page Corporate & Business Websites',
      'Lead capture forms with instant email validation',
      '100% Mobile & tablet responsive layouts',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
  },
  {
    id: 'react-next',
    number: '02',
    category: 'frameworks',
    title: 'React & Next.js Web Applications',
    description:
      'Production-ready full-stack frontends, admin dashboards, and dynamic web apps with SSR and App Router.',
    price: '₹10,000 – ₹80,000',
    accent: '#0284C7',
    icon: SiReact,
    deliverables: [
      'Custom React SPAs & Interactive Admin Dashboards',
      'Next.js 14/15 SSR, SSG & dynamic routing',
      'Redux Toolkit & Zustand global state management',
      'REST & GraphQL API client integrations',
    ],
    tech: ['React 19', 'Next.js 14', 'TypeScript', 'Redux', 'Zustand'],
  },
  {
    id: 'mobile-dev',
    number: '03',
    category: 'mobile',
    title: 'Mobile App Development (React Native)',
    description:
      'Cross-platform iOS and Android mobile apps with smooth navigation, native performance, and modern UI.',
    price: '₹15,000 – ₹1,20,000',
    accent: '#0EA5E9',
    icon: FaMobileAlt,
    deliverables: [
      'Cross-platform iOS & Android mobile applications',
      'Onboarding, Auth & Profile interactive screens',
      'React Navigation gesture transitions & animations',
      'Push notifications, async storage & native APIs',
    ],
    tech: ['React Native', 'Expo', 'React Navigation', 'TypeScript'],
  },
  {
    id: 'uiux-code',
    number: '04',
    category: 'design',
    title: 'Figma to Pixel-Perfect Code',
    description:
      'Transforming UI/UX prototypes from Figma, Adobe XD, or Sketch into responsive, production-ready code.',
    price: '₹3,000 – ₹30,000',
    accent: '#0284C7',
    icon: FaPaintBrush,
    deliverables: [
      '100% exact fidelity matching Figma designs',
      'Design token system with Dark / Light mode support',
      'Reusable atomic component library structure',
      'Fluid GSAP & Framer Motion micro-interactions',
    ],
    tech: ['Figma', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    id: 'opt-fixes',
    number: '05',
    category: 'optimization',
    title: 'Speed Optimization & Bug Fixes',
    description:
      'Boosting website performance to 90+ Google PageSpeed scores, fixing React bugs, and legacy refactoring.',
    price: '₹2,000 – ₹20,000',
    accent: '#D97706',
    icon: FaBolt,
    deliverables: [
      '90+ to 100 Google PageSpeed & Core Web Vitals score',
      'Bundle size reduction, lazy loading & image compression',
      'Fast React state, re-render & console error debugging',
      'Legacy JavaScript to TypeScript conversions',
    ],
    tech: ['Lighthouse', 'PageSpeed', 'Web Vitals', 'TypeScript'],
  },
  {
    id: 'deploy-support',
    number: '06',
    category: 'devops',
    title: 'Deployment, CI/CD & Maintenance',
    description:
      'Automated CI/CD pipelines, cloud hosting configurations, and dedicated monthly website maintenance.',
    price: '₹2,000 – ₹25,000',
    accent: '#059669',
    icon: FaServer,
    deliverables: [
      'Automated Jenkins CI/CD build & test pipelines',
      'Netlify, Vercel & GitHub Actions cloud deployments',
      'Custom domain DNS setup & auto-renewing SSL',
      'Monthly package updates, security & backup management',
    ],
    tech: ['Jenkins', 'Netlify', 'Vercel', 'GitHub Actions', 'Git'],
  },
];

export const PACKAGES = [
  {
    id: 'p1',
    name: 'Startup Launch',
    badge: 'MVP Ready',
    price: '₹25,000 – ₹60,000',
    desc: 'High-converting product landing page or startup website deployed on cloud.',
    features: [
      'React / Next.js Landing Page',
      '100% Mobile Responsive Layout',
      'Lead Capture Form & Validation',
      'Netlify / Vercel Deployment',
      '7 Days Post-Launch Support',
    ],
    accent: '#0EA5E9',
    popular: false,
  },
  {
    id: 'p2',
    name: 'Business Growth',
    badge: 'Most Popular',
    price: '₹50,000 – ₹1,20,000',
    desc: 'Multi-page Next.js business web app with dashboard, APIs, and authentication.',
    features: [
      'Multi-Page Next.js Web App',
      'Admin Dashboard & Charts',
      'RESTful / GraphQL API Integration',
      '95+ Lighthouse Speed Score',
      '14 Days Post-Launch Support',
    ],
    accent: '#0284C7',
    popular: true,
  },
  {
    id: 'p3',
    name: 'Mobile + Web Suite',
    badge: 'Web & Mobile',
    price: '₹80,000 – ₹2,50,000',
    desc: 'Complete digital ecosystem with a web application and React Native mobile app.',
    features: [
      'Next.js App + React Native App',
      'Shared Design System Tokens',
      'iOS & Android Production Builds',
      'Jenkins / Vercel CI/CD Pipeline',
      '30 Days Post-Launch Support',
    ],
    accent: '#059669',
    popular: false,
  },
  {
    id: 'p4',
    name: 'Complete SaaS Frontend',
    badge: 'Enterprise',
    price: '₹1,00,000 – ₹5,00,000+',
    desc: 'End-to-end frontend architecture for complex SaaS products and scalable portals.',
    features: [
      'Next.js App Router Architecture',
      'Role-Based User Authentication',
      'Stripe / Razorpay Payment Gateway',
      'Automated Jest / Vitest Testing',
      'Dedicated Maintenance & SLA',
    ],
    accent: '#0284C7',
    popular: false,
  },
];

export const FAQS = [
  {
    q: 'What is your typical project delivery timeline?',
    a: 'Landing pages and bug fixes take 2–5 business days. Full business websites take 10–20 days. Complete SaaS platforms and mobile apps take 3–6 weeks.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes! Every project includes a free 7 to 30-day warranty where any bug or responsive glitch is fixed immediately at zero cost.',
  },
  {
    q: 'Can you convert my Figma designs with 100% accuracy?',
    a: 'Yes. Pixel-perfect fidelity is guaranteed. I match your exact typography, spacing, color tokens, and add smooth 60fps micro-interactions.',
  },
  {
    q: 'What are your payment terms?',
    a: 'Milestone-based (50% upfront deposit to initiate development, 50% upon final review and deployment).',
  },
];

export const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'frameworks', label: 'React' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'UI/UX' },
  { id: 'optimization', label: 'Speed' },
];
