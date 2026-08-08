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
  FaTrophy,
  FaCode,
  FaAward,
  FaCheckCircle,
  FaRocket,
  FaBrain,
  FaTerminal,
  FaFire,
  FaStar,
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
  FaUsers,
  FaSmile,
  FaChartLine
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useTheme } from '../ThemeContext';

const orbitIcons = [
  { id: 'react', icon: <FaReact className="text-[#61DAFB]" />, name: 'React.js', category: 'Frontend', level: 'Expert (95%)' },
  { id: 'node', icon: <FaNodeJs className="text-[#68A063]" />, name: 'Node.js', category: 'Backend', level: 'Advanced (90%)' },
  { id: 'mongo', icon: <SiMongodb className="text-[#4EA94B]" />, name: 'MongoDB', category: 'Database', level: 'Advanced (88%)' },
  { id: 'git', icon: <FaGitAlt className="text-[#F05032]" />, name: 'Git & GitHub', category: 'DevOps', level: 'Expert (92%)' },
  { id: 'docker', icon: <FaDocker className="text-[#2496ED]" />, name: 'Docker', category: 'Containers', level: 'Proficient (82%)' },
  { id: 'python', icon: <FaPython className="text-[#3776AB]" />, name: 'Python', category: 'AI & Data', level: 'Expert (94%)' },
  { id: 'aws', icon: <FaAws className="text-[#FF9900]" />, name: 'AWS Cloud', category: 'Cloud', level: 'Proficient (80%)' },
  { id: 'postgres', icon: <SiPostgresql className="text-[#336791]" />, name: 'PostgreSQL', category: 'Database', level: 'Advanced (85%)' },
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

const education = [
  {
    date: '2020 – 2024',
    cgpa: '8.5 CGPA',
    institution: 'B.Tech in Information Technology (IT)',
    school: 'Indira Gandhi Engineering College (IGEC), Sagar (M.P.)',
    details: 'Specialized in Software Engineering, Data Structures, Algorithms, Web Architecture, and Database Systems with distinction.',
    highlights: ['First Class with Distinction', 'Lead Web Developer', 'Technical Club President']
  },
  {
    date: '2023 – 2024',
    cgpa: 'Advanced',
    institution: 'Computer Science & Web Architecture Focus',
    school: 'Delhi Technological University (DTU) Programs',
    details: 'Completed specialized coursework in distributed web architectures, frontend performance optimization, and algorithmic problem solving.',
    highlights: ['Competitive Coding Excellence', 'Modern Web Stack Mastery']
  },
];

const achievements = [
  {
    title: 'Smart India Hackathon Finalist',
    year: '2023',
    badge: 'National Level',
    desc: 'Architected an AI-powered healthcare triage platform for real-time patient queue optimization and emergency dispatch.'
  },
  {
    title: 'Google Developer Student Club Lead',
    year: '2022 – 2023',
    badge: 'Leadership',
    desc: 'Led a community of 500+ developers, conducting 15+ hands-on technical workshops, hackathons, and open-source bootcamps.'
  },
  {
    title: 'Competitive Coding Mastery',
    year: 'Ongoing',
    badge: 'Top 8%',
    desc: 'Solved 1,000+ data structures & algorithm problems across LeetCode, HackerRank, and CodeChef.'
  }
];

const coreMetrics = [
  {
    icon: <FaBriefcase className="text-xl text-cyan-400" />,
    value: '1.5+ Years',
    title: 'Experience',
    sub: 'Frontend Development',
    badgeBg: 'bg-cyan-500/15 border-cyan-400/30'
  },
  {
    icon: <FaRocket className="text-xl text-sky-400" />,
    value: '20+',
    title: 'Projects Completed',
    sub: 'Web & AI Applications',
    badgeBg: 'bg-sky-500/15 border-sky-400/30'
  },
  {
    icon: <FaHandshake className="text-xl text-emerald-400" />,
    value: '15+',
    title: 'Happy Clients',
    sub: '100% Satisfaction Rate',
    badgeBg: 'bg-emerald-500/15 border-emerald-400/30'
  },
  {
    icon: <FaFire className="text-xl text-amber-400" />,
    value: '1,000+',
    title: 'LeetCode Solved',
    sub: 'Top 8% Globally',
    badgeBg: 'bg-amber-500/15 border-amber-400/30'
  },
  {
    icon: <FaGraduationCap className="text-xl text-purple-400" />,
    value: '7.0 CGPA',
    title: 'B.Tech IT @ IGEC Sagar',
    sub: 'Class of 2024 (MP)',
    badgeBg: 'bg-purple-500/15 border-purple-400/30'
  }
];

function CircularProgress({ value, max, size = 95, stroke = 7, color = '#00D4FF', label, dark }) {
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
      <span className="absolute font-extrabold text-base tracking-tight" style={{ color: dark ? color : (color === '#00D4FF' ? '#0284C7' : color) }}>
        {label ?? value}
      </span>
    </div>
  );
}

export default function About() {
  const [terminalTab, setTerminalTab] = useState('profile');
  const [timelineTab, setTimelineTab] = useState('education');
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
      {/* Enhanced Background Ambient Glowing Spotlights for Black Backgrounds */}
      <div className="absolute top-10 -left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-syne tracking-tight">
            <span className={heading}>About </span>
            <span className="gradient-text-cyan-purple">Me</span>
          </h2>
          <p className={`max-w-2xl mx-auto mt-4 text-sm md:text-base font-medium ${subtext}`}>
            Driven Software Engineer specializing in scalable full-stack web applications, distributed backend microservices, and algorithmic optimization.
          </p>
        </motion.div>

        {/* Mobile ONLY: Infinite Horizontal Marquee Ticker (sm:hidden) */}
        <div className="sm:hidden relative w-full overflow-hidden mb-10 py-1">
          {/* Gradient Overlay Fades */}
          <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r ${dark ? 'from-[#05070E]' : 'from-[#F4F6FB]'} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l ${dark ? 'from-[#05070E]' : 'from-[#F4F6FB]'} to-transparent z-10 pointer-events-none`} />

          <div className="animate-marquee-horizontal flex gap-3.5">
            {[...coreMetrics, ...coreMetrics].map((m, idx) => (
              <div
                key={idx}
                className="bento-card rounded-2xl p-4 flex items-center gap-3.5 text-left shrink-0 w-[240px]"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${m.badgeBg}`}>
                  {m.icon}
                </div>
                <div className="overflow-hidden">
                  <span className={`text-xl font-extrabold font-mono tracking-tight block leading-snug ${heading}`}>
                    {m.value}
                  </span>
                  <span className={`text-xs font-bold block truncate ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                    {m.title}
                  </span>
                  <span className={`text-[10px] block truncate ${subtext}`}>
                    {m.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop & Tablet ONLY: Responsive 5-Column Grid (hidden sm:grid) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
          {coreMetrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bento-card rounded-2xl p-4 flex items-center gap-3.5 text-left transition-all hover:scale-[1.02]"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${m.badgeBg}`}>
                {m.icon}
              </div>
              <div className="overflow-hidden">
                <span className={`text-xl font-extrabold font-mono tracking-tight block leading-snug ${heading}`}>
                  {m.value}
                </span>
                <span className={`text-xs font-bold block truncate ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                  {m.title}
                </span>
                <span className={`text-[10px] block truncate ${subtext}`}>
                  {m.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* World-Class Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Bento Tile 1: Interactive Developer Terminal & Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bento-card rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* macOS Window Controls & Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 mb-6 border-slate-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className={`text-xs font-mono font-semibold ml-2 ${subtext}`}>developer_config.ts</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-500/10 p-1 rounded-xl border border-slate-500/20 max-w-full overflow-x-auto no-scrollbar">
                  {[
                    { id: 'profile', label: 'Profile.json' },
                    { id: 'architecture', label: 'Architecture' },
                    { id: 'philosophy', label: 'Philosophy' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTerminalTab(t.id)}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-mono shrink-0 whitespace-nowrap transition-all ${terminalTab === t.id
                        ? dark ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-white text-sky-600 shadow-sm'
                        : subtext + ' hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet Window */}
              <AnimatePresence mode="wait">
                {terminalTab === 'profile' && (
                  <motion.div key="prof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="font-mono text-xs md:text-sm leading-relaxed space-y-2">
                    <p className="text-purple-400"><span className="text-rose-400">const</span> developer = &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-400">"Abhishek Namdev"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">title</span>: <span className="text-emerald-400">"Frontend Developer & Software Engineer"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">college</span>: <span className="text-emerald-400">"IGEC Sagar (M.P.) • B.Tech IT '24"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">dtuFocus</span>: <span className="text-emerald-400">"Web Engineering & CS Specialization"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">projectsCompleted</span>: <span className="text-amber-400">20</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">leetcodeSolved</span>: <span className="text-amber-400">1000</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">status</span>: <span className="text-emerald-400">"Open for High-Impact Frontend Roles 🚀"</span></p>
                    <p className="text-purple-400">&#125;;</p>
                  </motion.div>
                )}

                {terminalTab === 'architecture' && (
                  <motion.div key="arch" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3 text-xs md:text-sm">
                    <h4 className={`font-bold font-syne ${heading}`}>Frontend Architecture & Scalability Focus</h4>
                    <p className={`leading-relaxed ${subtext}`}>
                      Specializing in building high-performance, responsive Web applications with React 18, Next.js 14, TypeScript, and modern component design.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className={`p-3 rounded-xl border text-xs ${innerBg}`}>
                        <span className="font-bold block text-cyan-400 mb-1">⚡ Core Web Stack</span>
                        <span className={subtext}>React 18, Next.js 14, TypeScript, TailwindCSS</span>
                      </div>
                      <div className={`p-3 rounded-xl border text-xs ${innerBg}`}>
                        <span className="font-bold block text-purple-400 mb-1">🎨 UI & Tooling</span>
                        <span className={subtext}>Framer Motion, Redux Toolkit, Jenkins CI/CD, Vite</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {terminalTab === 'philosophy' && (
                  <motion.div key="phil" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3 text-xs md:text-sm">
                    <h4 className={`font-bold font-syne ${heading}`}>Engineering Core Philosophy</h4>
                    <ul className={`space-y-2 ${subtext}`}>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-400 shrink-0" />
                        <span>Clean, self-documenting code with reusable architecture.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-cyan-400 shrink-0" />
                        <span>Continuous performance benchmarking and bundle optimization.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-purple-400 shrink-0" />
                        <span>Obsessive attention to UI/UX, accessibility, and micro-interactions.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Action Footer: Email Text Left, Right-Aligned Circular Glass Copy Button */}
            <div className="pt-6 border-t border-slate-500/20 flex items-center justify-between gap-3 mt-6 w-full">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className={`text-xs sm:text-sm font-mono font-bold truncate ${dark ? 'text-cyan-400' : 'text-sky-700'}`}>
                  abhisheknamdev9171@gmail.com
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy Email to Clipboard"
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all hover:scale-110 active:scale-95 shadow-md ${copied
                  ? 'bg-emerald-500 text-white border-emerald-400 shadow-emerald-500/30'
                  : dark
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/30 shadow-cyan-500/10'
                    : 'bg-sky-100 text-sky-700 border-sky-300 hover:bg-sky-200'
                  }`}
              >
                {copied ? <FaCheck className="text-sm animate-bounce" /> : <FaCopy className="text-sm" />}
              </button>
            </div>
          </motion.div>

          {/* Bento Tile 2: Interactive Tech Orbit Ring (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bento-card rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* MOBILE ONLY: Code Stream Backdrop (Hidden on Desktop) */}
            <div className="sm:hidden absolute inset-0 opacity-70 pointer-events-none font-mono text-[10px] p-4 select-none leading-relaxed flex flex-col justify-between items-start overflow-hidden z-0">
              <div className="space-y-1.5 w-full font-mono">
                <p className="text-slate-400">// Abhishek Namdev - Frontend Engineer</p>
                <p className="text-purple-400"><span className="text-rose-400">const</span> developer = &#123;</p>
                <p className="pl-4 text-cyan-300"><span className="text-cyan-400">title</span>: <span className="text-emerald-400">"Frontend Engineer"</span>,</p>
                <p className="pl-4 text-cyan-300"><span className="text-cyan-400">stack</span>: [<span className="text-emerald-400">"React 18"</span>, <span className="text-emerald-400">"Next.js 14"</span>, <span className="text-emerald-400">"TS"</span>, <span className="text-emerald-400">"Tailwind"</span>],</p>
                <p className="pl-4 text-cyan-300"><span className="text-cyan-400">experience</span>: <span className="text-amber-400">"1.5+ Years"</span>, <span className="text-cyan-400">projects</span>: <span className="text-amber-400">20</span>,</p>
                <p className="pl-4 text-cyan-300"><span className="text-cyan-400">leetcode</span>: <span className="text-amber-400">1000</span>, <span className="text-cyan-400">cgpa</span>: <span className="text-amber-400">7.0</span>,</p>
                <p className="pl-4 text-cyan-300"><span className="text-cyan-400">status</span>: <span className="text-emerald-400">"Open for High-Impact Roles 🚀"</span></p>
                <p className="text-purple-400">&#125;;</p>
              </div>
              <div className="font-mono text-[9px] text-slate-400 w-full pt-2 border-t border-slate-500/20">
                <p className="text-slate-400">// CI/CD Pipeline Passed</p>
              </div>
            </div>

            {/* Header Title (Clean Desktop & Mobile Title) */}
            <h3 className={`font-bold text-base mb-2 font-syne flex items-center gap-2 z-10 ${heading}`}>
              <FaLaptopCode className="text-cyan-400" /> Interactive Tech Orbit
            </h3>

            {/* Orbit Container */}
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] flex items-center justify-center my-4 z-10">
              {/* Outer Conic Ring Track (Desktop & Mobile) */}
              <div className="absolute inset-0 rounded-full animate-spin-slow p-1" style={{
                background: dark
                  ? 'conic-gradient(from 0deg, #00D4FF, #9B59FF, #FF6EC7, #00D4FF)'
                  : 'conic-gradient(from 0deg, #0284C7, #7C3AED, #C026D3, #0284C7)',
              }}>
                <div className={`w-full h-full rounded-full ${dark ? 'bg-[#0A0D14]' : 'bg-[#F4F6FB]'}`} />
              </div>

              {/* Compact Center Core Badge */}
              <div className={`relative w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] rounded-full flex flex-col items-center justify-center p-2 text-center border-2 shadow-2xl z-20 ${dark
                ? 'bg-gradient-to-br from-[#121A2D] via-[#0E1322] to-[#1A102E] border-cyan-400/40'
                : 'bg-gradient-to-br from-white via-sky-50 to-indigo-50 border-sky-400'
                }`}>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg mb-0.5">
                  AN
                </div>
                <span className={`text-[10px] sm:text-[11px] font-bold font-syne ${heading}`}>Abhishek</span>
                <span className={`text-[8px] sm:text-[9px] font-mono font-bold ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>Frontend Dev</span>
              </div>

              {/* Orbiting Tech Icons */}
              {orbitIcons.map((item, i) => (
                <div
                  key={item.id}
                  className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl border flex items-center justify-center text-lg sm:text-xl animate-orbit cursor-pointer transition-transform hover:scale-125 z-30 ${dark ? 'bg-[#111625] border-cyan-500/30 shadow-lg' : 'bg-white border-slate-200 shadow-md'
                    }`}
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-16px',
                    marginLeft: '-16px',
                    animationDelay: `${i * 3.75}s`
                  }}
                  title={item.name}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Tile 3: Timeline & Achievements (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bento-card rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Tab Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-500/20">
                <h3 className={`font-bold text-base font-syne flex items-center gap-2 ${heading}`}>
                  <FaGraduationCap className="text-cyan-400" /> Education & Achievements
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => setTimelineTab('education')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${timelineTab === 'education'
                      ? dark ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-sky-100 text-sky-700'
                      : subtext
                      }`}
                  >
                    Education
                  </button>
                  <button
                    onClick={() => setTimelineTab('achievements')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${timelineTab === 'achievements'
                      ? dark ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-sky-100 text-sky-700'
                      : subtext
                      }`}
                  >
                    Milestones
                  </button>
                </div>
              </div>

              {/* Timeline Body */}
              <AnimatePresence mode="wait">
                {timelineTab === 'education' ? (
                  <motion.div key="edu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    {education.map((e, idx) => (
                      <div key={idx} className={`p-4 rounded-2xl border ${innerBg}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${dark ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' : 'bg-sky-100 text-sky-700'
                            }`}>{e.date}</span>
                          <span className="text-xs font-extrabold text-purple-400">{e.cgpa}</span>
                        </div>
                        <h4 className={`font-bold text-sm ${heading}`}>{e.institution}</h4>
                        <p className={`text-xs font-semibold text-cyan-400 mb-2`}>{e.school}</p>
                        <p className={`text-xs ${subtext}`}>{e.details}</p>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div key="ach" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    {achievements.map((a, idx) => (
                      <div key={idx} className={`p-4 rounded-2xl border ${innerBg}`}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-bold text-sm ${heading}`}>{a.title}</h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {a.badge}
                          </span>
                        </div>
                        <span className={`text-xs font-semibold text-cyan-400 block mb-1`}>{a.year}</span>
                        <p className={`text-xs ${subtext}`}>{a.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bento Tile 4: LeetCode Mastery (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 bento-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`font-bold text-sm font-syne flex items-center gap-2 ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                  <FaCode /> LeetCode Stats
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">
                  Top 8%
                </span>
              </div>

              <div className="flex flex-col items-center my-3">
                <CircularProgress value={1000} max={1500} size={90} color={dark ? '#00D4FF' : '#0284C7'} label="1000+" dark={dark} />
                <span className={`text-xs font-bold mt-2 ${heading}`}>1,000+ Solved</span>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex justify-between">
                  <span className={subtext}>Easy</span>
                  <span className="font-bold text-emerald-400">300 (Beats 84%)</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtext}>Medium</span>
                  <span className="font-bold text-cyan-400">350 (Beats 92%)</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtext}>Hard</span>
                  <span className="font-bold text-rose-400">250 (Beats 87%)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 5: GitHub Heatmap & Language Matrix (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bento-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className={`font-bold text-sm font-syne flex items-center gap-2 ${dark ? 'text-cyan-400' : 'text-sky-600'}`}>
                  <FaGithub /> GitHub Activity
                </h3>
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  A+ Grade
                </span>
              </div>

              {/* Simulated Git Heatmap preview */}
              <div className="my-3">
                <span className={`text-[11px] font-semibold block mb-2 ${subtext}`}>Recent Contributions Grid</span>
                <div className="grid grid-cols-8 gap-1.5 p-2 rounded-xl bg-slate-500/10 border border-slate-500/20">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const colors = ['bg-emerald-500', 'bg-emerald-400/80', 'bg-cyan-500/60', 'bg-purple-500/70', 'bg-slate-500/20'];
                    const colorClass = colors[i % colors.length];
                    return (
                      <div key={i} className={`w-full aspect-square rounded-sm ${colorClass}`} title={`Day ${i + 1}`} />
                    );
                  })}
                </div>
              </div>

              {/* Stats Summary */}
              <div className="space-y-1.5 text-xs border-t pt-3 border-slate-500/20">
                <div className="flex justify-between">
                  <span className={subtext}>Total Commits</span>
                  <span className={`font-mono font-bold ${heading}`}>332+</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtext}>Top Lang</span>
                  <span className="font-mono font-bold text-amber-400">Python 56.5%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile: Delivered Projects, Experience & Client Impact Showcase (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-12 bento-card rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b pb-4 border-slate-500/20">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
                  <FaCheckCircle /> Proven Track Record & Client Success
                </div>
                <h3 className={`text-xl font-bold font-syne ${heading}`}>
                  Projects Delivered & Client Satisfaction
                </h3>
                <p className={`text-xs ${subtext}`}>High-impact engineering, production deployments & 100% client satisfaction rate</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                  ⚡ 100% On-Time Delivery
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className={`p-5 rounded-2xl border transition-all ${innerBg}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    <FaRocket className="text-2xl" />
                  </div>
                  <div>
                    <span className={`text-2xl font-black font-syne ${heading}`}>20+ Projects</span>
                    <span className="text-xs block font-bold text-cyan-400 font-mono">Completed & Deployed</span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${subtext}`}>
                  Architected SaaS web platforms, AI healthcare triage engines, and cloud microservices with 99.9% uptime and clean code architecture.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${innerBg}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <FaHandshake className="text-2xl" />
                  </div>
                  <div>
                    <span className={`text-2xl font-black font-syne ${heading}`}>15+ Clients</span>
                    <span className="text-xs block font-bold text-emerald-400 font-mono">100% Happy & Satisfied</span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${subtext}`}>
                  Collaborated with global clients, tech startups, and community teams, delivering customized web solutions ahead of project deadlines.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${innerBg}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                    <FaBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <span className={`text-2xl font-black font-syne ${heading}`}>2+ Years Exp.</span>
                    <span className="text-xs block font-bold text-purple-400 font-mono">Software Engineering</span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${subtext}`}>
                  Hands-on experience in full-stack web development, REST API design, database query optimization, and continuous deployment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 7: Interactive Skill Matrix Filter (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-12 bento-card rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className={`text-xl font-bold font-syne ${heading}`}>
                  Core Competencies & Technical Skills
                </h3>
                <p className={`text-xs ${subtext}`}>Explore Abhishek's technical toolkit filtered by category</p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {skillCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedSkillCategory === cat
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

            {/* Filtered Skill Grid */}
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <AnimatePresence>
                {filteredSkills.map((s) => (
                  <motion.div
                    key={s.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${innerBg}`}
                  >
                    <div className="text-xl p-2 rounded-xl bg-slate-500/10 border border-slate-500/20 shrink-0">
                      {s.icon}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className={`text-xs font-bold truncate ${heading}`}>{s.name}</h4>
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


