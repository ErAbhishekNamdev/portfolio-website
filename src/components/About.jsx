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
  FaCheckCircle,
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

const coreMetrics = [
  {
    icon: <FaBriefcase className="text-cyan-300" />,
    value: '1.5+ Yrs',
    title: 'Experience',
    sub: 'Full-Stack & UI',
    trend: 'Active',
    cardBgDark: 'bg-gradient-to-br from-[#0e485b] via-[#092d3a] to-[#041a23] border-[#08334e] shadow-[0_4px_25px_rgba(6,182,212,0.35)]',
    cardBgLight: 'bg-gradient-to-br from-cyan-100 via-white to-sky-100 border-cyan-400 text-cyan-950 shadow-md',
    badgeBgDark: 'bg-cyan-500/35 text-cyan-300 border-cyan-400/70',
    badgeBgLight: 'bg-cyan-200/90 text-cyan-800 border-cyan-400',
    titleColorDark: 'text-cyan-300',
    titleColorLight: 'text-cyan-700'
  },
  {
    icon: <FaRocket className="text-sky-300" />,
    value: '20+',
    title: 'Projects Done',
    sub: 'Web & AI Apps',
    trend: 'Production',
    cardBgDark: 'bg-gradient-to-br from-[#08334e] via-[#082238] to-[#04192b] border-[#08334e] text-sky-100 shadow-[0_4px_25px_rgba(14,165,233,0.3)]',
    cardBgLight: 'bg-gradient-to-br from-sky-100 via-white to-indigo-100 border-sky-400 text-sky-950 shadow-md',
    badgeBgDark: 'bg-sky-500/30 text-sky-300 border-sky-400/60',
    badgeBgLight: 'bg-sky-200/90 text-sky-800 border-sky-400',
    titleColorDark: 'text-sky-300',
    titleColorLight: 'text-sky-700'
  },
  {
    icon: <FaHandshake className="text-emerald-300" />,
    value: '15+',
    title: 'Happy Clients',
    sub: '100% Client Rating',
    trend: '5★ Rating',
    cardBgDark: 'bg-gradient-to-br from-[#063829] via-[#05261c] to-[#021c14] border-[#063829] text-emerald-100 shadow-[0_4px_25px_rgba(16,185,129,0.3)]',
    cardBgLight: 'bg-gradient-to-br from-emerald-100 via-white to-teal-100 border-emerald-400 text-emerald-950 shadow-md',
    badgeBgDark: 'bg-emerald-500/30 text-emerald-300 border-emerald-400/60',
    badgeBgLight: 'bg-emerald-200/90 text-emerald-800 border-emerald-400',
    titleColorDark: 'text-emerald-300',
    titleColorLight: 'text-emerald-700'
  },
  {
    icon: <FaFire className="text-amber-300" />,
    value: '1,000+',
    title: 'LeetCode Solved',
    sub: 'Top 8% Worldwide',
    trend: 'Top 8%',
    cardBgDark: 'bg-gradient-to-br from-[#422d06] via-[#2d1e04] to-[#1e1302] border-[#422d06] text-amber-100 shadow-[0_4px_25px_rgba(245,158,11,0.3)]',
    cardBgLight: 'bg-gradient-to-br from-amber-100 via-white to-orange-100 border-amber-400 text-amber-950 shadow-md',
    badgeBgDark: 'bg-amber-500/30 text-amber-300 border-amber-400/60',
    badgeBgLight: 'bg-amber-200/90 text-amber-800 border-amber-400',
    titleColorDark: 'text-amber-300',
    titleColorLight: 'text-amber-700'
  },
  {
    icon: <FaGraduationCap className="text-purple-300" />,
    value: '7.0 CGPA',
    title: 'B.Tech IT IGEC',
    sub: 'Class of 2024 (MP)',
    trend: 'Graduate',
    cardBgDark: 'bg-gradient-to-br from-[#4c1d95] via-[#331266] to-[#1f0940] border-[#4c1d95] text-purple-100 shadow-[0_4px_25px_rgba(168,85,247,0.35)]',
    cardBgLight: 'bg-gradient-to-br from-purple-100 via-white to-pink-100 border-purple-400 text-purple-950 shadow-md',
    badgeBgDark: 'bg-purple-500/35 text-purple-300 border-purple-400/70',
    badgeBgLight: 'bg-purple-200/90 text-purple-800 border-purple-400',
    titleColorDark: 'text-purple-300',
    titleColorLight: 'text-purple-700'
  }
];

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

  const subtext = dark ? 'text-slate-300' : 'text-slate-600';
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

        {/* 1. TOP 5 REDESIGNED METRIC CARDS WITH INDIVIDUAL THEMED GRADIENT BACKGROUNDS */}
        {/* Mobile View: Smooth Horizontal Infinite Marquee */}
        <div className="sm:hidden relative w-full overflow-hidden py-1">
          <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r ${dark ? 'from-[#05070E]' : 'from-[#F4F6FB]'} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l ${dark ? 'from-[#05070E]' : 'from-[#F4F6FB]'} to-transparent z-10 pointer-events-none`} />

          <div className="animate-marquee-horizontal flex gap-2.5">
            {[...coreMetrics, ...coreMetrics].map((m, idx) => (
              <div
                key={idx}
                className={`group rounded-xl p-2.5 flex items-center gap-2 text-left shrink-0 w-[155px] relative overflow-hidden transition-all duration-300 border ${dark ? m.cardBgDark : m.cardBgLight}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border text-xs shadow-inner ${dark ? m.badgeBgDark : m.badgeBgLight}`}>
                  {m.icon}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-extrabold font-mono tracking-tight block ${dark ? m.titleColorDark : m.titleColorLight}`}>
                      {m.value}
                    </span>
                  </div>
                  <span className={`text-[10px] font-semibold block truncate ${dark ? m.titleColorDark : m.titleColorLight}`}>
                    {m.title}
                  </span>
                  <span className={`text-[8.5px] block truncate ${subtext}`}>
                    {m.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop & Tablet: Compact Premium 5-Column Grid with Individual Gradient Theme Backgrounds */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-3.5 md:gap-4">
          {coreMetrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`group rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border ${dark ? m.cardBgDark : m.cardBgLight}`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 border text-sm sm:text-base transition-transform group-hover:scale-110 shadow-inner ${dark ? m.badgeBgDark : m.badgeBgLight}`}>
                  {m.icon}
                </div>
                <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full border ${dark ? m.badgeBgDark : m.badgeBgLight}`}>
                  {m.trend}
                </span>
              </div>

              <div>
                <span className={`text-lg sm:text-xl font-extrabold font-mono tracking-tight block leading-tight ${dark ? m.titleColorDark : m.titleColorLight}`}>
                  {m.value}
                </span>
                <span className={`text-xs font-semibold block truncate mt-0.5 ${dark ? m.titleColorDark : m.titleColorLight}`}>
                  {m.title}
                </span>
                <span className={`text-[10px] block truncate mt-0.5 ${subtext}`}>
                  {m.sub}
                </span>
              </div>
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
              {/* IDE Header Bar - Perfectly Visible on Mobile & Desktop */}
              <div className="flex items-center justify-between gap-1.5 sm:gap-3 border-b pb-3 mb-4 border-slate-500/20 w-full">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className={`text-[11px] sm:text-xs font-mono font-semibold ml-1 ${subtext}`}>
                    <span className="sm:hidden">config.ts</span>
                    <span className="hidden sm:inline">developer_config.ts</span>
                  </span>
                </div>

                <div className={`flex items-center gap-1 p-1 rounded-xl shrink-0 ${dark ? 'bg-[#090D18] border border-slate-800' : 'bg-slate-200/70 border border-slate-300'}`}>
                  {[
                    { id: 'profile', label: 'Profile.json' },
                    { id: 'architecture', label: 'Stack' },
                    { id: 'philosophy', label: 'Focus' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTerminalTab(t.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono shrink-0 whitespace-nowrap transition-all duration-200 ${
                        terminalTab === t.id
                          ? dark
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_14px_rgba(6,182,212,0.45)]'
                            : 'bg-white text-sky-700 font-bold shadow-sm border border-sky-200'
                          : dark
                            ? 'text-slate-400 hover:text-white hover:bg-white/10 font-medium'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* IDE Tab Contents */}
              <AnimatePresence mode="wait">
                {terminalTab === 'profile' && (
                  <motion.div key="prof" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3.5">
                    {/* JSON Code View */}
                    <div className={`font-mono text-xs sm:text-sm leading-relaxed space-y-1.5 p-4 rounded-2xl border shadow-inner overflow-x-auto ${dark ? 'bg-[#0b101c] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'}`}>
                      <p className="text-purple-500 dark:text-purple-400"><span className="text-rose-500 dark:text-rose-400">export const</span> developer = &#123;</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">name</span>: <span className="text-emerald-600 dark:text-emerald-400">"Abhishek Namdev"</span>,</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">role</span>: <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack Dev & Web Designer"</span>,</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">location</span>: <span className="text-emerald-600 dark:text-emerald-400">"India 🇮🇳"</span>,</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">education</span>: <span className="text-emerald-600 dark:text-emerald-400">"B.Tech IT • IGEC Sagar '24"</span>,</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">experience</span>: <span className="text-amber-600 dark:text-amber-400">"1.5+ years"</span>,</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">leetcode</span>: <span className="text-amber-600 dark:text-amber-400">1000+</span> <span className={subtext}>// top 8%</span>,</p>
                      <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">status</span>: <span className="text-emerald-600 dark:text-emerald-400">"Open for freelance & full-time 🚀"</span></p>
                      <p className="text-purple-500 dark:text-purple-400">&#125;;</p>
                    </div>

                    {/* Bio Narrative Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed ${subtext}`}>
                      Engineering fast, scalable, and SEO-optimized web applications with modern design patterns, crisp micro-animations, and clean code architecture.
                    </p>

                    {/* 3 Premium Engineering Highlight Cards (Side-by-Side 3-Col Grid on Mobile & Desktop) */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 font-mono">
                      {/* Speed Card */}
                      <div className={`p-2 sm:p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${dark
                        ? 'bg-gradient-to-br from-[#422d06] via-[#2d1e04] to-[#1e1302] border-[#422d06] text-amber-100 shadow-[0_4px_20px_rgba(245,158,11,0.25)]'
                        : 'bg-gradient-to-br from-amber-100 via-white to-orange-100 border-amber-300 text-amber-950 shadow-sm'
                        }`}>
                        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase opacity-80">Speed</span>
                          <div className={`w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-[10px] sm:text-xs shrink-0 ${dark ? 'bg-amber-500/30 text-amber-300 border border-amber-400/60' : 'bg-amber-200/90 text-amber-800'}`}>
                            ⚡
                          </div>
                        </div>
                        <span className="font-extrabold text-xs sm:text-base block tracking-tight truncate">99+ Score</span>
                        <span className={`text-[8px] sm:text-[10px] block font-sans mt-0.5 truncate ${dark ? 'text-amber-300/80' : 'text-amber-800'}`}>Lighthouse Audited</span>
                      </div>

                      {/* Quality Card */}
                      <div className={`p-2 sm:p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${dark
                        ? 'bg-gradient-to-br from-[#0e485b] via-[#092d3a] to-[#041a23] border-[#08334e] text-cyan-100 shadow-[0_4px_20px_rgba(6,182,212,0.25)]'
                        : 'bg-gradient-to-br from-cyan-100 via-white to-sky-100 border-sky-300 text-sky-950 shadow-sm'
                        }`}>
                        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase opacity-80">Quality</span>
                          <div className={`w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-[10px] sm:text-xs shrink-0 ${dark ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/60' : 'bg-sky-200/90 text-sky-800'}`}>
                            🛡️
                          </div>
                        </div>
                        <span className="font-extrabold text-xs sm:text-base block tracking-tight truncate">100% Safe</span>
                        <span className={`text-[8px] sm:text-[10px] block font-sans mt-0.5 truncate ${dark ? 'text-cyan-300/80' : 'text-sky-800'}`}>Typed Clean Code</span>
                      </div>

                      {/* Availability Card */}
                      <div className={`p-2 sm:p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${dark
                        ? 'bg-gradient-to-br from-[#063829] via-[#05261c] to-[#021c14] border-[#063829] text-emerald-100 shadow-[0_4px_20px_rgba(16,185,129,0.25)]'
                        : 'bg-gradient-to-br from-emerald-100 via-white to-teal-100 border-emerald-300 text-emerald-950 shadow-sm'
                        }`}>
                        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase opacity-80">Status</span>
                          <div className={`w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-[10px] sm:text-xs shrink-0 ${dark ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/60' : 'bg-emerald-200/90 text-emerald-800'}`}>
                            🚀
                          </div>
                        </div>
                        <span className="font-extrabold text-xs sm:text-base block tracking-tight truncate">Open to Hire</span>
                        <span className={`text-[8px] sm:text-[10px] block font-sans mt-0.5 truncate ${dark ? 'text-emerald-300/80' : 'text-emerald-800'}`}>Freelance & Fulltime</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {terminalTab === 'architecture' && (
                  <motion.div key="arch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-bold font-syne text-sm sm:text-base ${heading}`}>Core Tech Stack</h4>
                      <span className={`text-[11px] font-mono ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>Production Ready</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className={`p-3.5 rounded-2xl border ${innerBg}`}>
                        <span className="font-bold inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1 text-xs sm:text-sm"><FaReact /> Frontend Architecture</span>
                        <span className={`block text-xs leading-relaxed ${subtext}`}>React 18, Next.js 14, TypeScript, Tailwind CSS, Framer Motion</span>
                      </div>
                      <div className={`p-3.5 rounded-2xl border ${innerBg}`}>
                        <span className="font-bold inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1 text-xs sm:text-sm"><FaNodeJs /> Backend & APIs</span>
                        <span className={`block text-xs leading-relaxed ${subtext}`}>Node.js, Express, REST APIs, MongoDB, PostgreSQL</span>
                      </div>
                      <div className={`p-3.5 rounded-2xl border ${innerBg}`}>
                        <span className="font-bold inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-1 text-xs sm:text-sm"><FaAws /> Cloud & DevOps</span>
                        <span className={`block text-xs leading-relaxed ${subtext}`}>AWS Services, Docker, Git, CI/CD pipelines, Vercel</span>
                      </div>
                      <div className={`p-3.5 rounded-2xl border ${innerBg}`}>
                        <span className="font-bold inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1 text-xs sm:text-sm"><FaBrain /> Core CS & DSA</span>
                        <span className={`block text-xs leading-relaxed ${subtext}`}>System Design, Data Structures, 1,000+ Algorithmic Solved</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {terminalTab === 'philosophy' && (
                  <motion.div key="phil" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3.5 text-xs sm:text-sm">
                    <h4 className={`font-bold font-syne text-sm sm:text-base ${heading}`}>Engineering Focus</h4>
                    <ul className={`space-y-3 ${subtext}`}>
                      <li className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-emerald-500 shrink-0 mt-1 text-sm" />
                        <span><strong className={heading}>Performance-First UI</strong> — ultra-fast load times, fluid 60fps animations, mobile responsiveness.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-cyan-500 shrink-0 mt-1 text-sm" />
                        <span><strong className={heading}>Clean Architecture</strong> — typed, modular, maintainable codebases with reusable component design.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-purple-500 shrink-0 mt-1 text-sm" />
                        <span><strong className={heading}>Business Growth</strong> — conversion-focused web design with strong SEO & accessibility foundations.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <FaLightbulb className="text-amber-500 shrink-0 mt-1 text-sm" />
                        <span><strong className={heading}>End-to-End Delivery</strong> — seamless execution from wireframing to production cloud deployment.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
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

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {skillCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedSkillCategory === cat
                      ? dark
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                        : 'bg-sky-500/20 text-sky-700 border border-sky-400 shadow-sm'
                      : `${subtext} hover:bg-slate-500/10`
                      }`}
                  >
                    {cat}
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
