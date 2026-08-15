import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaAws,
  FaDatabase,
  FaGithub,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaBrain,
  FaTerminal,
  FaFire,
  FaCodeBranch,
  FaUserCheck,
  FaLightbulb,
  FaCopy,
  FaCheck,
  FaLaptopCode,
  FaServer,
  FaCubes,
  FaBriefcase,
  FaHandshake,
  FaSmile,
  FaChartLine,
  FaStar,
  FaTrophy
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript, SiNextdotjs, SiVite } from 'react-icons/si';
import { useTheme } from '../ThemeContext';

const orbitIcons = [
  { id: 'react', icon: <FaReact className="text-[#61DAFB]" />, name: 'React.js' },
  { id: 'next', icon: <SiNextdotjs className="text-slate-800 dark:text-white" />, name: 'Next.js' },
  { id: 'ts', icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
  { id: 'node', icon: <FaNodeJs className="text-[#68A063]" />, name: 'Node.js' },
  { id: 'tailwind', icon: <SiTailwindcss className="text-[#38BDF8]" />, name: 'Tailwind CSS' },
  { id: 'mongo', icon: <SiMongodb className="text-[#4EA94B]" />, name: 'MongoDB' },
  { id: 'postgres', icon: <SiPostgresql className="text-[#336791]" />, name: 'PostgreSQL' },
  { id: 'git', icon: <FaGitAlt className="text-[#F05032]" />, name: 'Git & GitHub' },
  { id: 'docker', icon: <FaDocker className="text-[#2496ED]" />, name: 'Docker' },
  { id: 'python', icon: <FaPython className="text-[#3776AB]" />, name: 'Python' },
  { id: 'aws', icon: <FaAws className="text-[#FF9900]" />, name: 'AWS Cloud' },
  { id: 'vite', icon: <SiVite className="text-[#646CFF]" />, name: 'Vite' },
];

const skillsMatrix = [
  { name: 'React.js / Next.js', category: 'Frontend & UI', icon: <FaReact className="text-cyan-400" />, level: '95%' },
  { name: 'TypeScript / JavaScript', category: 'Frontend & UI', icon: <SiTypescript className="text-blue-400" />, level: '92%' },
  { name: 'TailwindCSS & CSS3', category: 'Frontend & UI', icon: <SiTailwindcss className="text-sky-400" />, level: '96%' },
  { name: 'Node.js & Express', category: 'Backend & APIs', icon: <FaNodeJs className="text-emerald-400" />, level: '90%' },
  { name: 'Python & FastAPI', category: 'Backend & APIs', icon: <FaPython className="text-amber-400" />, level: '94%' },
  { name: 'MongoDB & PostgreSQL', category: 'Backend & APIs', icon: <SiMongodb className="text-green-500" />, level: '88%' },
  { name: 'Docker & Containers', category: 'Cloud & DevOps', icon: <FaDocker className="text-blue-500" />, level: '82%' },
  { name: 'AWS Services (EC2, S3)', category: 'Cloud & DevOps', icon: <FaAws className="text-orange-400" />, level: '80%' },
  { name: 'Git & CI/CD Pipelines', category: 'Cloud & DevOps', icon: <FaGitAlt className="text-red-400" />, level: '92%' },
  { name: 'Data Structures & Alg.', category: 'AI & Core CS', icon: <FaBrain className="text-purple-400" />, level: '95%' },
  { name: 'System Design & APIs', category: 'AI & Core CS', icon: <FaServer className="text-cyan-300" />, level: '87%' },
  { name: 'Machine Learning Basics', category: 'AI & Core CS', icon: <FaCubes className="text-pink-400" />, level: '78%' },
];

const stackItems = [
  {
    icon: FaReact,
    title: 'Frontend Architecture',
    color: 'text-cyan-600 dark:text-cyan-400',
    tech: 'React 18, Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Vite',
  },
  {
    icon: FaNodeJs,
    title: 'Backend & APIs',
    color: 'text-emerald-600 dark:text-emerald-400',
    tech: 'Node.js, Express, FastAPI, Python, REST APIs, JWT Auth',
  },
  {
    icon: FaDatabase,
    title: 'Databases & Storage',
    color: 'text-green-600 dark:text-green-400',
    tech: 'MongoDB, PostgreSQL, Redis, Mongoose, indexing & query tuning',
  },
  {
    icon: FaAws,
    title: 'Cloud & DevOps',
    color: 'text-orange-600 dark:text-orange-400',
    tech: 'AWS EC2/S3, Docker, Git, GitHub Actions, CI/CD, Vercel, Nginx',
  },
  {
    icon: FaBrain,
    title: 'Core CS & DSA',
    color: 'text-purple-600 dark:text-purple-400',
    tech: 'System Design, Data Structures, 1,000+ problems, OOP, patterns',
  },
  {
    icon: FaCubes,
    title: 'AI & Automation',
    color: 'text-pink-600 dark:text-pink-400',
    tech: 'ML basics, OpenAI APIs, automation scripts, data workflows',
  },
];

const engineeringFocusItems = [
  {
    icon: FaRocket,
    iconColor: 'text-emerald-500',
    title: 'Performance-First UI',
    desc: 'Ultra-fast load times, fluid 60fps animations, and mobile-first responsive layouts.',
  },
  {
    icon: FaCodeBranch,
    iconColor: 'text-cyan-500',
    title: 'Clean Architecture',
    desc: 'Typed, modular, maintainable code with reusable components and clear folder structure.',
  },
  {
    icon: FaChartLine,
    iconColor: 'text-purple-500',
    title: 'Business Growth',
    desc: 'Conversion-focused design with strong SEO, accessibility, and analytics integration.',
  },
  {
    icon: FaLightbulb,
    iconColor: 'text-amber-500',
    title: 'End-to-End Delivery',
    desc: 'Wireframes to production — design, build, deploy, monitor, and iterate with clarity.',
  },
  {
    icon: FaServer,
    iconColor: 'text-sky-500',
    title: 'Scalable Systems',
    desc: 'APIs and apps built to handle growth — caching, pagination, and efficient data flow.',
  },
  {
    icon: FaUserCheck,
    iconColor: 'text-indigo-500',
    title: 'Security & Quality',
    desc: 'Input validation, auth best practices, error handling, and production-ready testing.',
  },
];

const METRIC_THEMES = {
  cyan: {
    dark: {
      shell: 'border-sky-500/50 hover:border-sky-400/75 bg-gradient-to-br from-sky-950/55 via-[#101929] to-[#0a101c] shadow-[0_8px_32px_rgba(14,165,233,0.18)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.28)]',
      accentBar: 'bg-gradient-to-b from-sky-300 via-sky-400 to-cyan-500 shadow-[0_0_14px_rgba(14,165,233,0.75)]',
      glow: 'from-sky-400/25 via-sky-500/10 to-transparent',
      icon: 'bg-gradient-to-br from-sky-500/35 to-cyan-600/10 border-sky-400/55 text-sky-300 shadow-[0_0_24px_rgba(14,165,233,0.35)]',
      title: 'text-sky-400',
    },
    light: {
      shell: 'border-sky-300/90 hover:border-sky-400 bg-gradient-to-br from-sky-50 via-white to-cyan-50 shadow-[0_6px_28px_rgba(14,165,233,0.14)] hover:shadow-[0_10px_36px_rgba(14,165,233,0.2)]',
      accentBar: 'bg-gradient-to-b from-sky-400 to-cyan-500 shadow-[0_0_8px_rgba(14,165,233,0.45)]',
      glow: 'from-sky-100/90 via-cyan-50/50 to-transparent',
      icon: 'bg-gradient-to-br from-sky-100 to-cyan-100 border-sky-300 text-sky-600 shadow-sm',
      title: 'text-sky-700',
    },
  },
  indigo: {
    dark: {
      shell: 'border-indigo-500/45 hover:border-indigo-400/70 bg-gradient-to-br from-indigo-950/50 via-[#101929] to-[#0a101c] shadow-[0_8px_32px_rgba(99,102,241,0.12)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.22)]',
      accentBar: 'bg-gradient-to-b from-indigo-300 via-indigo-400 to-blue-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]',
      glow: 'from-indigo-400/20 via-indigo-500/8 to-transparent',
      icon: 'bg-gradient-to-br from-indigo-500/30 to-indigo-600/10 border-indigo-400/50 text-indigo-300 shadow-[0_0_24px_rgba(99,102,241,0.3)]',
      title: 'text-indigo-300',
    },
    light: {
      shell: 'border-indigo-300/90 hover:border-indigo-400 bg-gradient-to-br from-indigo-50 via-white to-blue-50 shadow-[0_6px_28px_rgba(99,102,241,0.1)]',
      accentBar: 'bg-gradient-to-b from-indigo-400 to-blue-500',
      glow: 'from-indigo-100/90 via-blue-50/50 to-transparent',
      icon: 'bg-gradient-to-br from-indigo-100 to-blue-100 border-indigo-300 text-indigo-600 shadow-sm',
      title: 'text-indigo-700',
    },
  },
  emerald: {
    dark: {
      shell: 'border-emerald-500/45 hover:border-emerald-400/70 bg-gradient-to-br from-emerald-950/50 via-[#101929] to-[#0a101c] shadow-[0_8px_32px_rgba(16,185,129,0.12)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.22)]',
      accentBar: 'bg-gradient-to-b from-emerald-300 via-emerald-400 to-teal-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]',
      glow: 'from-emerald-400/20 via-emerald-500/8 to-transparent',
      icon: 'bg-gradient-to-br from-emerald-500/30 to-emerald-600/10 border-emerald-400/50 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.3)]',
      title: 'text-emerald-300',
    },
    light: {
      shell: 'border-emerald-300/90 hover:border-emerald-400 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-[0_6px_28px_rgba(16,185,129,0.1)]',
      accentBar: 'bg-gradient-to-b from-emerald-400 to-teal-500',
      glow: 'from-emerald-100/90 via-teal-50/50 to-transparent',
      icon: 'bg-gradient-to-br from-emerald-100 to-teal-100 border-emerald-300 text-emerald-600 shadow-sm',
      title: 'text-emerald-700',
    },
  },
  amber: {
    dark: {
      shell: 'border-amber-500/45 hover:border-amber-400/70 bg-gradient-to-br from-amber-950/40 via-[#101929] to-[#0a101c] shadow-[0_8px_32px_rgba(245,158,11,0.12)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.22)]',
      accentBar: 'bg-gradient-to-b from-amber-300 via-amber-400 to-orange-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]',
      glow: 'from-amber-400/20 via-amber-500/8 to-transparent',
      icon: 'bg-gradient-to-br from-amber-500/30 to-amber-600/10 border-amber-400/50 text-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.3)]',
      title: 'text-amber-300',
    },
    light: {
      shell: 'border-amber-300/90 hover:border-amber-400 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-[0_6px_28px_rgba(245,158,11,0.1)]',
      accentBar: 'bg-gradient-to-b from-amber-400 to-orange-500',
      glow: 'from-amber-100/90 via-orange-50/50 to-transparent',
      icon: 'bg-gradient-to-br from-amber-100 to-orange-100 border-amber-300 text-amber-600 shadow-sm',
      title: 'text-amber-700',
    },
  },
  violet: {
    dark: {
      shell: 'border-violet-500/45 hover:border-violet-400/70 bg-gradient-to-br from-violet-950/50 via-[#101929] to-[#0a101c] shadow-[0_8px_32px_rgba(139,92,246,0.12)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.22)]',
      accentBar: 'bg-gradient-to-b from-violet-300 via-violet-400 to-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]',
      glow: 'from-violet-400/20 via-violet-500/8 to-transparent',
      icon: 'bg-gradient-to-br from-violet-500/30 to-violet-600/10 border-violet-400/50 text-violet-300 shadow-[0_0_24px_rgba(139,92,246,0.3)]',
      title: 'text-violet-300',
    },
    light: {
      shell: 'border-violet-300/90 hover:border-violet-400 bg-gradient-to-br from-violet-50 via-white to-purple-50 shadow-[0_6px_28px_rgba(139,92,246,0.1)]',
      accentBar: 'bg-gradient-to-b from-violet-400 to-purple-500',
      glow: 'from-violet-100/90 via-purple-50/50 to-transparent',
      icon: 'bg-gradient-to-br from-violet-100 to-purple-100 border-violet-300 text-violet-600 shadow-sm',
      title: 'text-violet-700',
    },
  },
};

const coreMetrics = [
  { icon: FaBriefcase, theme: 'cyan', value: '1.5+ Yrs', title: 'Experience', sub: 'Full-Stack & UI' },
  { icon: FaRocket, theme: 'indigo', value: '20+', title: 'Projects Done', sub: 'Web & AI Apps' },
  { icon: FaHandshake, theme: 'emerald', value: '15+', title: 'Happy Clients', sub: '100% Client Rating' },
  { icon: FaFire, theme: 'amber', value: '1,000+', title: 'LeetCode Solved', sub: 'Top 8% Worldwide' },
  { icon: FaGraduationCap, theme: 'violet', value: '7.0 CGPA', title: 'B.Tech IT IGEC', sub: 'Class of 2024 (MP)' },
];

function MetricCard({ metric, dark, compact = false }) {
  const Icon = metric.icon;
  const t = METRIC_THEMES[metric.theme][dark ? 'dark' : 'light'];

  return (
    <div
      className={`group rounded-2xl flex items-center text-left transition-all duration-300 relative overflow-hidden border backdrop-blur-md hover:-translate-y-1 ${t.shell} ${compact ? 'p-3 gap-2.5 w-[172px] shrink-0' : 'p-4 md:p-5 gap-3.5 pl-4 md:pl-5'}`}
    >
      <div className={`absolute left-0 top-2.5 bottom-2.5 w-[4px] rounded-r-full z-[2] ${t.accentBar}`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${t.glow} pointer-events-none rounded-2xl z-[1]`} />

      <div className={`relative z-[3] rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${t.icon} ${compact ? 'w-9 h-9' : 'w-11 h-11'}`}>
        <Icon className={compact ? 'text-sm' : 'text-lg'} />
      </div>
      <div className="relative z-[3] min-w-0 flex-1">
        <span className={`font-extrabold font-mono tracking-tight block leading-none ${compact ? 'text-base' : 'text-xl md:text-2xl'} ${dark ? 'text-white' : 'text-slate-900'}`}>
          {metric.value}
        </span>
        <span className={`font-bold block truncate mt-1 ${compact ? 'text-[10px]' : 'text-xs md:text-sm'} ${t.title}`}>
          {metric.title}
        </span>
        <span className={`block truncate mt-0.5 ${compact ? 'text-[9px]' : 'text-[10px] md:text-xs'} ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {metric.sub}
        </span>
      </div>
    </div>
  );
}

function CircularProgress({ value, max, size = 100, stroke = 8, color = '#00D4FF', label, dark }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;
  const bgStroke = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={bgStroke} strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round"
          className="transition-all duration-1000 ease-out" />
      </svg>
      <span className="absolute font-extrabold text-base tracking-tight font-mono" style={{ color: dark ? color : (color === '#00D4FF' ? '#0284C7' : color) }}>
        {label ?? value}
      </span>
    </div>
  );
}

export default function About() {
  const [terminalTab, setTerminalTab] = useState('profile');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All Stack');
  const [copied, setCopied] = useState(false);
  const { dark } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('abhisheknamdev9171@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subtext = dark ? 'text-slate-400' : 'text-slate-500';
  const heading = dark ? 'text-white' : 'text-slate-900';
  const innerBg = dark ? 'bg-[#1E293B]/80 border-white/15 hover:border-cyan-400/50 shadow-sm' : 'bg-slate-50/90 border-slate-200 hover:border-sky-500/40';

  const skillCategories = ['All Stack', 'Frontend & UI', 'Backend & APIs', 'Cloud & DevOps', 'AI & Core CS'];

  const filteredSkills = selectedSkillCategory === 'All Stack'
    ? skillsMatrix
    : skillsMatrix.filter(s => s.category === selectedSkillCategory);

  return (
    <section id="about" className={`py-16 md:py-24 px-4 section-spotlight transition-colors duration-300 relative overflow-x-hidden ${dark ? 'bg-[#05070E]' : 'bg-[#F4F6FB]'}`}>
      {/* Enhanced Background Ambient Glowing Spotlights */}
      <div className="absolute top-10 -left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-container mx-auto relative z-10 space-y-10 md:space-y-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-syne tracking-tight">
            <span className={heading}>About </span>
            <span className="gradient-text-cyan-purple">Me</span>
          </h2>
          <p className={`max-w-2xl mx-auto mt-4 text-sm md:text-base font-medium ${subtext}`}>
            Driven Software Engineer specializing in scalable full-stack web applications, interactive UI components, microservices, and algorithmic problem solving.
          </p>
        </motion.div>

        {/* Metric cards — bento style */}
        <div className="sm:hidden relative w-full overflow-hidden py-1">
          <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r ${dark ? 'from-[#05070E]' : 'from-[#F4F6FB]'} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l ${dark ? 'from-[#05070E]' : 'from-[#F4F6FB]'} to-transparent z-10 pointer-events-none`} />

          <div className="animate-marquee-horizontal flex gap-3">
            {[...coreMetrics, ...coreMetrics].map((m, idx) => (
              <MetricCard key={idx} metric={m} dark={dark} compact />
            ))}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {coreMetrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
            >
              <MetricCard metric={m} dark={dark} />
            </motion.div>
          ))}
        </div>

        {/* 2. MAIN SPLIT SECTION: ORBIT ON LEFT, DEVELOPER_CONFIG.TS ON RIGHT */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-stretch">

          {/* LEFT SIDE: INTERACTIVE TECH ORBIT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 bento-card rounded-3xl p-5 md:p-7 flex flex-col items-center justify-between relative overflow-hidden min-h-0 lg:min-h-[460px]"
          >
            {/* Background Ambient Radial Glow */}
            <div
              className={`absolute inset-0 pointer-events-none ${dark
                ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.12)_0%,transparent_70%)]'
                : 'bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.14)_0%,transparent_70%)]'
                }`}
              aria-hidden
            />
            {/* Orbit Card Top Title Bar - Centered on Mobile */}
            <div className="w-full flex items-center justify-center sm:justify-start mb-2 z-10 border-b pb-3 border-slate-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className={`font-bold font-syne text-base md:text-lg text-center sm:text-left ${heading}`}>
                  Interactive Tech Orbit
                </h3>
              </div>
            </div>

            {/* Orbit Ring Container - Centered */}
            <div className="tech-orbit-ring relative z-10 mx-auto flex items-center justify-center w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[410px] lg:h-[410px] my-auto">

              {/* Soft Radial Center Glow */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full blur-2xl pointer-events-none ${dark ? 'bg-cyan-500/15' : 'bg-sky-400/25'}`}
                aria-hidden
              />

              {/* Orbiting Track SVG (420x420 viewBox with r=180) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" viewBox="0 0 420 420" aria-hidden>
                <defs>
                  <linearGradient id="aboutOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={dark ? '#00D4FF' : '#0284C7'} stopOpacity={dark ? '0.9' : '0.85'} />
                    <stop offset="50%" stopColor={dark ? '#9B59FF' : '#7C3AED'} stopOpacity={dark ? '0.8' : '0.75'} />
                    <stop offset="100%" stopColor={dark ? '#FF6EC7' : '#DB2777'} stopOpacity={dark ? '0.7' : '0.65'} />
                  </linearGradient>
                </defs>

                {/* Inner Decorative Dashed Pulse Line */}
                <circle
                  cx="210"
                  cy="210"
                  r="135"
                  fill="none"
                  stroke={dark ? 'rgba(0,212,255,0.18)' : 'rgba(14,165,233,0.3)'}
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />

                {/* Main Orbit Path */}
                <circle
                  cx="210"
                  cy="210"
                  r="180"
                  fill="none"
                  stroke="url(#aboutOrbitGrad)"
                  strokeWidth={dark ? '2.5' : '3'}
                />
              </svg>

              {/* Center Hub Avatar */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className={`relative w-[115px] h-[115px] sm:w-[125px] sm:h-[125px] md:w-[135px] md:h-[135px] rounded-full flex flex-col items-center justify-center text-center p-2 overflow-hidden transition-transform duration-300 hover:scale-105 ${dark
                    ? 'bg-gradient-to-br from-[#1a2744] via-[#121a2e] to-[#0d1220] border border-cyan-500/30'
                    : 'bg-gradient-to-br from-white via-sky-50 to-indigo-50 border border-sky-300 shadow-[0_8px_30px_rgba(14,165,233,0.18)]'
                    }`}
                  style={{
                    boxShadow: dark
                      ? '0 0 0 1px rgba(0,212,255,0.4), 0 0 35px rgba(0,212,255,0.2)'
                      : '0 0 0 1px rgba(14,165,233,0.3), 0 8px 30px rgba(14,165,233,0.16)',
                  }}
                >
                  <div className={`absolute inset-0 pointer-events-none ${dark
                    ? 'bg-[radial-gradient(circle_at_50%_20%,rgba(0,212,255,0.18),transparent_65%)]'
                    : 'bg-[radial-gradient(circle_at_50%_15%,rgba(14,165,233,0.12),transparent_60%)]'
                    }`}
                  />

                  {/* AN Badge */}
                  <div className={`relative w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 mx-auto mb-1 bg-gradient-to-br ${dark ? 'from-cyan-400 via-blue-500 to-purple-600' : 'from-sky-500 via-indigo-500 to-purple-600'} shadow-md`}
                    style={{ boxShadow: dark ? '0 0 14px rgba(0,212,255,0.5)' : '0 4px 14px rgba(14,165,233,0.3)' }}
                  >
                    AN
                  </div>

                  <span className={`relative text-xs sm:text-sm font-extrabold font-syne leading-tight text-center block w-full truncate ${heading}`}>
                    Abhishek
                  </span>

                  <div className="relative flex items-center justify-center gap-1 mt-0.5 w-full text-center px-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0 inline-block" />
                    <span className={`text-[8.5px] sm:text-[9.5px] font-mono font-semibold tracking-wide truncate ${dark ? 'text-cyan-400' : 'text-sky-700'}`}>
                      Full-Stack Dev
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbiting Technology Icons */}
              {orbitIcons.map((item, i) => (
                <div
                  key={item.id}
                  className="absolute top-1/2 left-1/2 z-30 animate-orbit tech-orbit-icon"
                  style={{ animationDelay: `${-(i / orbitIcons.length) * 36}s` }}
                >
                  <div
                    className="w-full h-full animate-orbit-reverse flex items-center justify-center"
                    style={{ animationDelay: `${-(i / orbitIcons.length) * 36}s` }}
                  >
                    <div
                      className={`tech-orbit-icon-inner w-full h-full rounded-full border flex items-center justify-center text-base sm:text-lg md:text-xl cursor-pointer ${dark
                        ? 'bg-[#141c2e] border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.4)]'
                        : 'bg-white border-sky-300 text-slate-800 shadow-md shadow-sky-500/15 ring-1 ring-sky-100 hover:border-sky-500'
                        }`}
                      title={item.name}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: DEVELOPER_CONFIG.TS TERMINAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 bento-card rounded-3xl p-5 md:p-7 flex flex-col justify-between min-h-0 lg:min-h-[460px]"
          >
            <div>
              {/* Persistent IDE Card wrapper — tabs always visible */}
              <div className={`rounded-2xl border overflow-hidden ${dark
                ? 'bg-[#0D1117] border-[#21262D] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                : 'bg-[#FAFBFC] border-slate-200 shadow-lg'
                }`}>

                {/* Header: macOS dots + filename on left, Tabs on right */}
                <div className={`flex items-center justify-between gap-1.5 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-2.5 border-b ${dark ? 'border-[#21262D] bg-[#161B22]' : 'border-slate-200 bg-slate-100'}`}>
                  <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27C840]" />
                    <span className={`ml-1 sm:ml-2 text-[10px] sm:text-[11px] font-mono ${dark ? 'text-[#8B949E]' : 'text-slate-500'}`}>
                      <span className="sm:hidden">config.ts</span>
                      <span className="hidden sm:inline">developer_config.ts</span>
                    </span>
                  </div>

                  {/* Tab switcher on the right side */}
                  <div className={`flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl shrink-0 ${dark ? 'bg-[#0D1117] border border-[#30363D]' : 'bg-slate-200/70 border border-slate-300'}`}>
                    {[
                      { id: 'profile', label: 'Profile', fullLabel: 'Profile.json' },
                      { id: 'architecture', label: 'Stack', fullLabel: 'Stack' },
                      { id: 'philosophy', label: 'Focus', fullLabel: 'Focus' },
                    ].map(t => (
                      <button
                        key={t.id}
                        onClick={() => setTerminalTab(t.id)}
                        className={`px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono whitespace-nowrap transition-all duration-200 ${terminalTab === t.id
                          ? dark
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                            : 'bg-white text-sky-700 font-bold shadow-sm border border-sky-200'
                          : dark
                            ? 'text-[#8B949E] hover:text-white font-medium'
                            : 'text-slate-500 hover:text-slate-800 font-medium'
                          }`}
                      >
                        <span className="sm:hidden">{t.label}</span>
                        <span className="hidden sm:inline">{t.fullLabel}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 3: Tab content via AnimatePresence */}
                <AnimatePresence mode="wait">
                  {terminalTab === 'profile' && (
                    <motion.div
                      key="prof"
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                    >
                      {/* Code body */}
                      <div className="flex overflow-hidden">
                        {/* Line numbers */}
                        <div className={`select-none font-mono text-[9px] sm:text-[11px] text-right pt-3 sm:pt-4 pb-3 sm:pb-4 px-1.5 sm:px-3 border-r leading-[1.5rem] sm:leading-[1.75rem] shrink-0 ${dark ? 'text-[#484F58] border-[#21262D]' : 'text-slate-300 border-slate-200'}`}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(n => <div key={n}>{n}</div>)}
                        </div>

                        {/* Animated code lines */}
                        <div className={`font-mono text-[9px] sm:text-[13px] leading-[1.4rem] sm:leading-[1.75rem] pt-2.5 sm:pt-4 pb-2.5 sm:pb-4 pl-2 sm:pl-5 pr-2 sm:pr-4 w-full break-words whitespace-normal sm:whitespace-pre ${dark ? 'text-[#C9D1D9]' : 'text-slate-700'}`}>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }}>
                            <span className={dark ? 'text-[#FF7B72]' : 'text-pink-600'}>export const </span>
                            <span className={dark ? 'text-[#79C0FF]' : 'text-blue-600'}>developer</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-700'}> = {'{'}</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>name</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"Abhishek Namdev"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>role</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"Specialist Frontend Developer"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>location</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"India 🇮🇳 · Open to Global Remote Work"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>education</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"B.Tech IT · IGEC Sagar '24"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>experience</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#FFA657] font-semibold' : 'text-amber-600 font-semibold'}>"1.5+ Years · 20+ Projects Shipped"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>

                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>specialties</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>["Interactive Web Apps","Website Designing"]</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>leetcode</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#FFA657] font-bold' : 'text-amber-600 font-bold'}>1000+</span>
                            <span className={`ml-1.5 italic text-[9px] sm:text-[11px] ${dark ? 'text-[#484F58]' : 'text-slate-400'}`}>{'//'} Top 8% Worldwide Ranking</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>coreFocus</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"High-Performance Web Apps & Pixel-Perfect UI/UX"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>architecture</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"Modular Component Design & State Management"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>commitment</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>: </span>
                            <span className={dark ? 'text-[#A5D6FF]' : 'text-sky-700'}>"Delivering Production-Ready Applications On Time"</span>
                            <span className={dark ? 'text-[#484F58]' : 'text-slate-400'}>,</span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }} className="pl-3 sm:pl-6 flex items-center gap-1.5 flex-wrap">
                            <span className={dark ? 'text-[#7EE787]' : 'text-teal-600'}>status</span>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-600'}>:</span>
                            <span className={`inline-flex items-center gap-1.5 text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border ${dark
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              }`}>
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                              </span>
                              Open to New Opportunities
                            </span>
                          </motion.div>
                          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }}>
                            <span className={dark ? 'text-[#C9D1D9]' : 'text-slate-700'}>{'};'}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Stat cards — only under profile tab */}
                  {/* {terminalTab === 'profile' && (
                    <motion.div key="stats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-3 gap-2 sm:gap-3 mt-3">
                      {[
                        { icon: '⚡', label: 'Speed', value: '99+', sub: 'Lighthouse Score', darkBg: 'bg-amber-950/50 border-amber-800/60', lightBg: 'bg-amber-50 border-amber-200', darkIcon: 'bg-amber-500/20 text-amber-300 border-amber-600/40', lightIcon: 'bg-amber-100 text-amber-700', darkValue: 'text-amber-300', lightValue: 'text-amber-700', darkSub: 'text-amber-400/70', lightSub: 'text-amber-600/80' },
                        { icon: '🛡️', label: 'Quality', value: '100%', sub: 'Typed & Tested', darkBg: 'bg-sky-950/50 border-sky-800/60', lightBg: 'bg-sky-50 border-sky-200', darkIcon: 'bg-sky-500/20 text-sky-300 border-sky-600/40', lightIcon: 'bg-sky-100 text-sky-700', darkValue: 'text-sky-300', lightValue: 'text-sky-700', darkSub: 'text-sky-400/70', lightSub: 'text-sky-600/80' },
                        { icon: '🚀', label: 'Status', value: 'Open', sub: 'Freelance & FT', darkBg: 'bg-emerald-950/50 border-emerald-800/60', lightBg: 'bg-emerald-50 border-emerald-200', darkIcon: 'bg-emerald-500/20 text-emerald-300 border-emerald-600/40', lightIcon: 'bg-emerald-100 text-emerald-700', darkValue: 'text-emerald-300', lightValue: 'text-emerald-700', darkSub: 'text-emerald-400/70', lightSub: 'text-emerald-600/80' },
                      ].map((c) => (
                        <div key={c.label} className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${dark ? c.darkBg : c.lightBg}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{c.label}</span>
                            <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs border ${dark ? c.darkIcon : c.lightIcon}`}>{c.icon}</div>
                          </div>
                          <span className={`font-extrabold text-sm sm:text-base font-mono block ${dark ? c.darkValue : c.lightValue}`}>{c.value}</span>
                          <span className={`text-[9px] sm:text-[10px] block mt-0.5 ${dark ? c.darkSub : c.lightSub}`}>{c.sub}</span>
                        </div>
                      ))}
                    </motion.div>
                  )} */}

                  {terminalTab === 'architecture' && (
                    <motion.div key="arch" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-3 text-xs sm:text-sm mt-3">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`font-bold font-syne text-sm sm:text-base ${heading}`}>Core Tech Stack</h4>
                        <span className={`text-[10px] sm:text-[11px] font-mono shrink-0 ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>Production Ready</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {stackItems.map((item, idx) => {
                          const StackIcon = item.icon;
                          return (
                            <div
                              key={idx}
                              className={`p-3 sm:p-3.5 rounded-2xl border transition-colors duration-200 hover:border-cyan-400/30 ${innerBg}`}
                            >
                              <span className={`font-bold inline-flex items-center gap-2 mb-1 text-xs sm:text-sm ${item.color}`}>
                                <StackIcon className="shrink-0" /> {item.title}
                              </span>
                              <span className={`block text-[11px] sm:text-xs leading-relaxed ${subtext}`}>{item.tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {terminalTab === 'philosophy' && (
                    <motion.div key="phil" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-3 text-xs sm:text-sm mt-3">
                      <h4 className={`font-bold font-syne text-sm sm:text-base ${heading}`}>Engineering Focus</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {engineeringFocusItems.map((item, idx) => {
                          const FocusIcon = item.icon;
                          return (
                            <li key={idx} className={`flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl border ${innerBg}`}>
                              <FocusIcon className={`${item.iconColor} shrink-0 mt-0.5 text-sm`} />
                              <span className={subtext}>
                                <strong className={`block mb-0.5 ${heading}`}>{item.title}</strong>
                                {item.desc}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. COMBINED BENTO GRID ROW: LEETCODE STATS (6 COLS) + GITHUB ACTIVITY (6 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">

          {/* LEETCODE MASTERY CARD (6 COLS - EQUAL HEIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-6 bento-card rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h3 className={`font-bold text-base md:text-lg font-syne flex items-center gap-2.5 ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                  <FaCode className="text-xl" /> Algorithmic Mastery (LeetCode)
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                  <FaTrophy className="text-amber-400 text-xs" /> Top 8%
                </span>
              </div>

              {/* Main Solved Stats */}
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-5">
                {/* Circular Progress Gauge */}
                <div className="relative shrink-0 flex items-center justify-center my-1 sm:my-0">
                  <CircularProgress size={105} strokeWidth={9} percentage={70} dark={dark} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className={`text-xl font-extrabold font-mono ${heading}`}>1000+</span>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">Solved</span>
                  </div>
                </div>

                {/* Level Breakdown Bars */}
                <div className="w-full space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-emerald-400 font-bold">Easy (300)</span>
                      <span className={subtext}>Beats 84%</span>
                    </div>
                    <div className="w-full bg-slate-500/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '84%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-emerald-400 h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-amber-400 font-bold">Medium (350)</span>
                      <span className={subtext}>Beats 92%</span>
                    </div>
                    <div className="w-full bg-slate-500/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="bg-amber-400 h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-rose-400 font-bold">Hard (100)</span>
                      <span className={subtext}>Beats 78%</span>
                    </div>
                    <div className="w-full bg-slate-500/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="bg-rose-400 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Badges - Aligned at Bottom */}
            <div className="pt-4 border-t border-slate-500/20 grid grid-cols-3 gap-2.5 sm:gap-3 text-center text-xs mt-auto">
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <span className={`block text-[10px] ${subtext}`}>Max Streak</span>
                <span className={`font-mono font-bold ${heading}`}>45 Days</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <span className={`block text-[10px] ${subtext}`}>Global Rating</span>
                <span className="font-mono font-bold text-cyan-400">1,850+</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <span className={`block text-[10px] ${subtext}`}>Contest Badges</span>
                <span className="font-mono font-bold text-amber-400">Knight 🏅</span>
              </div>
            </div>
          </motion.div>

          {/* GITHUB ACTIVITY CARD (6 COLS - EQUAL HEIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-6 bento-card rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h3 className={`font-bold text-base md:text-lg font-syne flex items-center gap-2.5 ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                  <FaGithub className="text-xl" /> GitHub Activity & Open Source
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <FaStar className="text-amber-400 text-xs" /> A+ Grade
                </span>
              </div>

              {/* Heatmap Section */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-xs">
                  <span className={`font-semibold ${subtext}`}>Recent Activity Grid</span>
                  <span className="font-mono font-bold text-emerald-400">332+ Commits</span>
                </div>

                <div
                  className="p-3 rounded-2xl bg-black/20 border border-slate-500/20 gap-1.5 grid"
                  style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
                >
                  {Array.from({ length: 56 }).map((_, i) => {
                    const colorLevels = [
                      'bg-slate-700/40',
                      'bg-emerald-900/60',
                      'bg-emerald-600/80',
                      'bg-emerald-500',
                      'bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]',
                      'bg-cyan-500',
                      'bg-purple-500'
                    ];
                    const levelIndex = (i * 7 + 3) % colorLevels.length;
                    return (
                      <div
                        key={i}
                        className={`h-3 rounded-[3px] ${colorLevels[levelIndex]} transition-transform hover:scale-125 cursor-pointer`}
                        title={`Activity level: ${levelIndex + 1}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Language Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-mono text-[11px]">
                  <span className={subtext}>Language Stack</span>
                  <span className="font-bold text-amber-400">Python 56.5% • TS 32% • React 11.5%</span>
                </div>
                <div className="flex h-2.5 rounded-full overflow-hidden bg-slate-500/20 p-0.5 border border-white/5">
                  <div className="bg-amber-400 h-full rounded-l-full w-[56.5%]" title="Python" />
                  <div className="bg-blue-400 h-full w-[32%]" title="TypeScript" />
                  <div className="bg-cyan-400 h-full rounded-r-full w-[11.5%]" title="React/CSS" />
                </div>
              </div>
            </div>

            {/* Quick Stat Badges - Aligned at Bottom */}
            <div className="pt-4 border-t border-slate-500/20 grid grid-cols-3 gap-2.5 sm:gap-3 text-center text-xs mt-auto">
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <span className={`block text-[10px] ${subtext}`}>Total Commits</span>
                <span className={`font-mono font-bold ${heading}`}>332+</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <span className={`block text-[10px] ${subtext}`}>PRs Merged</span>
                <span className="font-mono font-bold text-purple-400">45+</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <span className={`block text-[10px] ${subtext}`}>Stars Earned</span>
                <span className="font-mono font-bold text-amber-400">85+</span>
              </div>
            </div>
          </motion.div>

          {/* 4. CORE COMPETENCIES & TECHNICAL SKILLS FILTER (HIDDEN ON MOBILE SCREEN DEVICES) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden sm:block col-span-12 bento-card rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className={`text-xl font-bold font-syne ${heading}`}>
                  Core Competencies & Technical Skills
                </h3>
                <p className={`text-xs ${subtext}`}>Explore Abhishek's technical toolkit filtered by specialization</p>
              </div>

              {/* Filter Pills — styled to match the IDE card tab switcher */}
              <div className={`flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl shrink-0 ${dark ? 'bg-[#0D1117] border border-[#30363D]' : 'bg-slate-200/70 border border-slate-300'}`}>
                {skillCategories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedSkillCategory(cat)}
                    className={`px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono whitespace-nowrap transition-all duration-200 ${selectedSkillCategory === cat
                      ? dark
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                        : 'bg-white text-sky-700 font-bold shadow-sm border border-sky-200'
                      : dark
                        ? 'text-[#8B949E] hover:text-white font-medium'
                        : 'text-slate-500 hover:text-slate-800 font-medium'
                      }`}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered Skill Grid (1 col on mobile, 2 sm, 3 md, 4 lg) */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              <AnimatePresence>
                {filteredSkills.map((s) => (
                  <motion.div
                    key={s.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all hover:scale-[1.02] ${innerBg}`}
                  >
                    <div className="text-xl p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 shrink-0">
                      {s.icon}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className={`text-xs sm:text-sm font-bold truncate ${heading}`}>{s.name}</h4>
                      <span className={`text-[10px] block font-mono font-semibold ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                        {s.level} • {s.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
