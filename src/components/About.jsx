import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaAws, FaDatabase, FaGithub, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { useTheme } from '../ThemeContext';

const orbitIcons = [
  { icon: <FaReact className="text-[#61DAFB]" /> },
  { icon: <FaNodeJs className="text-[#3C873A]" /> },
  { icon: <SiMongodb className="text-[#4EA94B]" /> },
  { icon: <FaGitAlt className="text-[#F05032]" /> },
  { icon: <FaDocker className="text-[#2496ED]" /> },
  { icon: <FaPython className="text-[#3776AB]" /> },
  { icon: <FaAws className="text-[#FF9900]" /> },
  { icon: <FaDatabase className="text-[#336791]" /> },
];

const education = [
  { date: '2020 – 2024', cgpa: '8.5 CGPA', institution: 'B.Tech in Computer Science', school: 'Delhi Technological University' },
  { date: '2018 – 2020', cgpa: '92%', institution: 'Senior Secondary (XII)', school: 'Delhi Public School' },
];

const achievements = [
  { title: 'Smart India Hackathon Finalist', year: '2023', desc: 'Built an AI-powered healthcare platform solving real-world challenges.' },
  { title: 'Google Developer Student Club Lead', year: '2022-23', desc: 'Led 500+ developer community, organized workshops and hackathons.' },
];

function CircularProgress({ value, max, size = 100, stroke = 7, color = '#00D4FF', label, dark }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;
  const bgStroke = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} stroke={bgStroke} strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={radius} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round"
          className="transition-all duration-1000" />
      </svg>
      <span className="absolute font-bold text-base" style={{ color: dark ? color : (color === '#00D4FF' ? '#0284C7' : color) }}>
        {label ?? value}
      </span>
    </div>
  );
}

function ProgressBar({ label, value, max, color, beats, dark }) {
  return (
    <div className="space-y-1">
      <div className={`flex justify-between text-xs font-medium ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
        <span>{label}</span>
        <span>{value}/{max} {beats && <span className={dark ? 'text-emerald-400 font-semibold' : 'text-emerald-600 font-semibold'}>Beats {beats}%</span>}</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${dark ? 'bg-[#1A1A24]' : 'bg-slate-200'}`}>
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(value/max)*100}%`, background: color }} />
      </div>
    </div>
  );
}

export default function About() {
  const [tab, setTab] = useState('education');
  const { dark } = useTheme();

  const cardBg = dark ? 'glass-card border-white/10' : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40';
  const innerBg = dark ? 'bg-[#1A1A24]/60 border-white/5' : 'bg-slate-50 border-slate-200/70';
  const subtext = dark ? 'text-slate-400' : 'text-slate-600';
  const heading = dark ? 'text-white' : 'text-slate-900';

  return (
    <section id="about" className={`py-24 px-4 section-spotlight transition-colors duration-300 ${dark ? 'bg-[#05050A]' : 'bg-[#F4F6FB]'}`}>
      <div className="max-w-container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Introduction</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={heading}>About </span>
            <span className="gradient-text-cyan-purple">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Avatar & Bio */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-[210px] h-[210px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
                background: dark
                  ? 'conic-gradient(from 0deg, #00D4FF, #9B59FF, #FF6EC7, #00D4FF)'
                  : 'conic-gradient(from 0deg, #0284C7, #7C3AED, #C026D3, #0284C7)',
                padding: '3px',
              }}>
                <div className={`w-full h-full rounded-full ${dark ? 'bg-[#05050A]' : 'bg-[#F4F6FB]'}`} />
              </div>

              <div className={`absolute inset-3 rounded-full flex items-center justify-center p-4 text-center ${
                dark ? 'bg-gradient-to-br from-[#00D4FF]/10 to-[#9B59FF]/10 border border-white/10' : 'bg-gradient-to-br from-[#0284C7]/10 to-[#7C3AED]/10 border border-slate-200'
              }`}>
                <span className={`text-2xl font-bold font-syne ${heading}`}>
                  AN
                </span>
              </div>

              {orbitIcons.map((item, i) => (
                <div key={i}
                  className={`absolute w-10 h-10 rounded-xl border flex items-center justify-center text-lg animate-orbit ${
                    dark ? 'bg-[#111118] border-white/10 shadow-lg shadow-black/40' : 'bg-white border-slate-200 shadow-md'
                  }`}
                  style={{ top: '50%', left: '50%', marginTop: '-20px', marginLeft: '-20px', animationDelay: `${i * 3.75}s` }}
                >
                  {item.icon}
                </div>
              ))}
            </div>

            {/* Education/Achievements Tab Card */}
            <div className={`w-full rounded-2xl border p-6 card-glow ${cardBg}`}>
              <div className={`flex gap-6 border-b mb-6 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
                <button onClick={() => setTab('education')}
                  className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors relative ${
                    tab === 'education'
                      ? dark ? 'text-[#00D4FF] border-b-2 border-[#00D4FF]' : 'text-[#0284C7] border-b-2 border-[#0284C7]'
                      : subtext + ' hover:text-slate-800'
                  }`}>
                  <FaGraduationCap /> Education
                </button>
                <button onClick={() => setTab('achievements')}
                  className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors relative ${
                    tab === 'achievements'
                      ? dark ? 'text-[#00D4FF] border-b-2 border-[#00D4FF]' : 'text-[#0284C7] border-b-2 border-[#0284C7]'
                      : subtext + ' hover:text-slate-800'
                  }`}>
                  <FaTrophy /> Achievements
                </button>
              </div>

              {tab === 'education' ? (
                <div className="space-y-4">
                  {education.map((e, i) => (
                    <div key={i} className={`rounded-xl p-4 border ${innerBg}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          dark ? 'bg-[#00D4FF]/15 text-[#00D4FF]' : 'bg-[#0284C7]/15 text-[#0284C7]'
                        }`}>{e.date}</span>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                          dark ? 'bg-[#9B59FF]/20 text-[#9B59FF]' : 'bg-[#7C3AED]/20 text-[#7C3AED]'
                        }`}>{e.cgpa}</span>
                      </div>
                      <p className={`font-bold text-sm ${heading}`}>{e.institution}</p>
                      <p className={`text-xs ${subtext}`}>{e.school}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {achievements.map((a, i) => (
                    <div key={i} className={`rounded-xl p-4 border ${innerBg}`}>
                      <div className="flex justify-between items-start mb-1">
                        <p className={`font-bold text-sm ${heading}`}>{a.title}</p>
                        <span className={`text-xs font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>{a.year}</span>
                      </div>
                      <p className={`text-xs ${subtext}`}>{a.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Coding Stats cards */}
          <div className="flex flex-col gap-6">
            {/* LeetCode Card */}
            <div className={`rounded-2xl border p-6 card-glow ${cardBg}`}>
              <h3 className={`font-bold text-lg mb-4 flex items-center gap-2 ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>
                💻 LeetCode Stats
              </h3>
              <div className="flex gap-6 items-center mb-6">
                <CircularProgress value={1000} max={1500} size={95} color={dark ? '#00D4FF' : '#0284C7'} label="1000+" dark={dark} />
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {[{ l: 'Rank', v: '12,000' }, { l: 'Badges', v: '41' }, { l: 'Rep', v: '386' }].map(s => (
                    <div key={s.l} className={`rounded-xl p-3 text-center border ${innerBg}`}>
                      <p className={`text-xs ${subtext}`}>{s.l}</p>
                      <p className={`font-bold text-sm mt-1 ${heading}`}>{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <ProgressBar label="Easy Solved" value={300} max={1000} color="#00E5A0" beats={84} dark={dark} />
                <ProgressBar label="Medium Solved" value={350} max={1000} color="#00D4FF" beats={92} dark={dark} />
                <ProgressBar label="Hard Solved" value={250} max={1000} color="#FF5733" beats={87} dark={dark} />
              </div>
            </div>

            {/* GitHub Card */}
            <div className={`rounded-2xl border p-6 card-glow ${cardBg}`}>
              <div className="flex justify-between items-start mb-5">
                <h3 className={`font-bold text-lg flex items-center gap-2 ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>
                  <FaGithub /> GitHub Stats
                </h3>
                <CircularProgress value={65} max={100} size={65} stroke={5} color={dark ? '#9B59FF' : '#7C3AED'} label="A+" dark={dark} />
              </div>
              <div className="space-y-3 mb-5">
                {[
                  { l: '⭐ Total Stars Earned', v: '18' },
                  { l: '📊 Total Commits', v: '332+' },
                  { l: '🔀 Total Pull Requests', v: '22' },
                  { l: '🤝 Open Source Contributions', v: '22' },
                ].map(s => (
                  <div key={s.l} className={`flex justify-between text-sm border-b pb-2 ${dark ? 'border-white/5' : 'border-slate-200'}`}>
                    <span className={subtext}>{s.l}</span>
                    <span className={`font-semibold ${heading}`}>{s.v}</span>
                  </div>
                ))}
              </div>
              <div className="h-3 rounded-full overflow-hidden flex mb-3">
                <div className="bg-[#F5C842] h-full" style={{ width: '56.48%' }} />
                <div className="bg-[#FF9900] h-full" style={{ width: '30.51%' }} />
                <div className="bg-[#E34C26] h-full" style={{ width: '1.68%' }} />
                <div className="bg-[#F7DF1E] h-full" style={{ width: '1.6%' }} />
                <div className={`h-full flex-1 ${dark ? 'bg-[#1A1A24]' : 'bg-slate-200'}`} />
              </div>
              <div className={`flex flex-wrap gap-3 text-xs ${subtext}`}>
                {[
                  { c: '#F5C842', l: 'Python 56.5%' },
                  { c: '#FF9900', l: 'Jupyter 30.5%' },
                  { c: '#E34C26', l: 'HTML 1.7%' },
                  { c: '#F7DF1E', l: 'JavaScript 1.6%' },
                ].map(lang => (
                  <span key={lang.l} className="flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: lang.c }} />
                    {lang.l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
