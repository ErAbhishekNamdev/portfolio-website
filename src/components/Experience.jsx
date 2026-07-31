import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const experiences = [
  {
    date: '2024 – Present',
    title: 'Senior Frontend Developer',
    company: 'NextWave Technologies',
    desc: 'Leading the frontend architecture for enterprise SaaS applications. Architecting high-performance component systems with React, TypeScript, GSAP, and Framer Motion.',
    tags: ['React', 'GSAP', 'TypeScript', 'Framer Motion', 'Tailwind'],
    icon: <FaReact className="text-[#61DAFB]" />,
    side: 'right',
  },
  {
    date: '2022 – 2024',
    title: 'Full Stack Developer',
    company: 'InnovateX Labs',
    desc: 'Developed and scaled full-stack web applications. Built RESTful microservices with Node.js and MongoDB, integrated payment gateways, and improved core web vitals.',
    tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Docker'],
    icon: <FaNodeJs className="text-[#3C873A]" />,
    side: 'left',
  },
  {
    date: '2020 – 2022',
    title: 'Backend Developer Intern',
    company: 'CodeCraft Solutions',
    desc: 'Engineered high-throughput backend APIs, optimized PostgreSQL database queries, and implemented automated CI/CD deployment pipelines.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    icon: <FaPython className="text-[#3776AB]" />,
    side: 'right',
  },
];

export default function Experience() {
  const { dark } = useTheme();

  const cardBg = dark ? 'glass-card border-white/10' : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40';
  const subtext = dark ? 'text-slate-400' : 'text-slate-600';
  const heading = dark ? 'text-white' : 'text-slate-900';

  return (
    <section id="experience" className={`py-24 px-4 section-spotlight transition-colors duration-300 ${dark ? 'bg-[#05050A]' : 'bg-[#F4F6FB]'}`}>
      <div className="max-w-container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={heading}>Work </span>
            <span className="gradient-text-cyan-purple">Experience</span>
          </h2>
          <p className={`mt-3 max-w-xl mx-auto text-sm ${subtext}`}>A timeline of professional roles building scalable web systems and engineering high-quality user experiences.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline bar */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block -translate-x-1/2"
            style={{
              background: dark
                ? 'linear-gradient(to bottom, #9B59FF, #00D4FF, #FF6EC7)'
                : 'linear-gradient(to bottom, #7C3AED, #0284C7, #C026D3)',
            }}
          />
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 md:hidden"
            style={{
              background: dark
                ? 'linear-gradient(to bottom, #9B59FF, #00D4FF, #FF6EC7)'
                : 'linear-gradient(to bottom, #7C3AED, #0284C7, #C026D3)',
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 md:gap-0 ${exp.side === 'left' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`ml-14 md:ml-0 md:w-[46%] ${exp.side === 'right' ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                  <div className={`rounded-2xl p-6 border card-glow ${cardBg}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        dark ? 'bg-[#00D4FF]/15 text-[#00D4FF]' : 'bg-[#0284C7]/15 text-[#0284C7]'
                      }`}>
                        {exp.date}
                      </span>
                      <span className={`text-xs font-semibold ${dark ? 'text-[#9B59FF]' : 'text-[#7C3AED]'}`}>
                        {exp.company}
                      </span>
                    </div>

                    <h3 className={`font-syne font-bold text-xl ${heading}`}>{exp.title}</h3>
                    <p className={`text-sm mt-3 leading-relaxed ${subtext}`}>{exp.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-full border text-xs font-fira font-medium ${
                            dark
                              ? 'bg-[#111118] border-white/10 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-800'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Node Circle */}
                <div
                  className={`absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-11 h-11 rounded-full border-2 flex items-center justify-center text-lg z-10 transition-all duration-300 ${
                    dark
                      ? 'bg-[#0A0A14] border-[#00D4FF]/60 shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                      : 'bg-white border-[#0284C7]/60 shadow-md shadow-slate-200'
                  }`}
                >
                  {exp.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
