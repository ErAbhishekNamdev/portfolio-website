import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const skills = [
  { name: 'HTML5', color: '#E34F26', textColor: '#fff', icon: '</>' },
  { name: 'CSS3', color: '#1572B6', textColor: '#fff', icon: 'CSS' },
  { name: 'JavaScript', color: '#F7DF1E', textColor: '#000', icon: 'JS' },
  { name: 'TypeScript', color: '#3178C6', textColor: '#fff', icon: 'TS' },
  { name: 'React', color: '#61DAFB', textColor: '#000', icon: '⚛' },
  { name: 'Next.js', color: '#000000', textColor: '#fff', icon: 'N' },
  { name: 'Tailwind', color: '#38BDF8', textColor: '#fff', icon: 'TW' },
  { name: 'jenkins', color: '#3C873A', textColor: '#fff', icon: 'jen' },
  { name: 'Express', color: '#404040', textColor: '#fff', icon: 'EX' },
  { name: 'MongoDB', color: '#4EA94B', textColor: '#fff', icon: 'M' },
  { name: 'PostgreSQL', color: '#336791', textColor: '#fff', icon: 'PG' },
  { name: 'Docker', color: '#2496ED', textColor: '#fff', icon: '🐳' },
  { name: 'Git', color: '#F05032', textColor: '#fff', icon: 'G' },
  { name: 'Three.js', color: '#00B4A6', textColor: '#fff', icon: '3D' },
  { name: 'GSAP', color: '#88CE02', textColor: '#000', icon: 'GS' },
  { name: 'Framer', color: '#0055FF', textColor: '#fff', icon: 'FM' },
  { name: 'Redux', color: '#764ABC', textColor: '#fff', icon: 'RX' },
  { name: 'GraphQL', color: '#E10098', textColor: '#fff', icon: 'GQL' },
  { name: 'Vite', color: '#646CFF', textColor: '#fff', icon: 'V' },
  { name: 'Python', color: '#3776AB', textColor: '#fff', icon: 'PY' },
  { name: 'AWS', color: '#FF9900', textColor: '#000', icon: 'AWS' },
  { name: 'REST API', color: '#14B8A6', textColor: '#fff', icon: 'API' },
];

function getWobble(index) {
  const seed = index * 137.5;
  return {
    yAmp: 4 + (seed % 6),
    xAmp: 2 + ((seed * 1.3) % 4),
    rotAmp: 1.5 + ((seed * 0.7) % 3),
    dur: 3 + ((seed * 0.9) % 3),
    delay: (seed % 20) / 10,
  };
}

function SkillTile({ skill, index, dark }) {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const wobble = getWobble(index);

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const vx = info.velocity.x;
    const vy = info.velocity.y;
    const ox = info.offset.x;
    const oy = info.offset.y;

    const throwX = ox + vx * 0.12;
    const throwY = oy + vy * 0.12;
    const throwRot = vx * 0.03;

    controls.start([
      {
        x: throwX,
        y: throwY,
        rotate: throwRot,
        transition: { duration: 0.2, ease: 'easeOut' },
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        transition: { type: 'spring', stiffness: 180, damping: 14 },
      },
    ]);
  };

  const borderColor = isDragging
    ? (dark ? '#00D4FF' : '#0284C7')
    : dark
      ? 'rgba(255,255,255,0.18)'
      : 'rgba(0,0,0,0.12)';

  const shadow = isDragging
    ? dark
      ? '0 0 30px rgba(0,212,255,0.6), 0 12px 24px rgba(0,0,0,0.5)'
      : '0 0 30px rgba(2,132,199,0.5), 0 12px 24px rgba(148,163,184,0.3)'
    : dark
      ? '0 6px 16px rgba(0,0,0,0.5)'
      : '0 6px 16px rgba(148,163,184,0.2)';

  return (
    <motion.div
      drag
      dragElastic={0.5}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ opacity: 0, y: -40, scale: 0.7 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 160, damping: 16, delay: index * 0.04 }}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 50 : 1,
        position: 'relative',
        touchAction: 'none',
      }}
      whileHover={{ scale: 1.1, zIndex: 10, transition: { duration: 0.2 } }}
    >
      <motion.div
        animate={
          isDragging
            ? {}
            : {
                y: [0, -wobble.yAmp, 0, wobble.yAmp, 0],
                x: [0, wobble.xAmp, 0, -wobble.xAmp, 0],
                rotate: [0, wobble.rotAmp, 0, -wobble.rotAmp, 0],
              }
        }
        transition={
          isDragging
            ? {}
            : {
                duration: wobble.dur,
                delay: wobble.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        <div
          className="flex h-[80px] w-[80px] sm:h-[105px] sm:w-[105px] flex-col items-center justify-center gap-2 rounded-[16px] transition-all"
          style={{
            backgroundColor: skill.color,
            border: `1.5px solid ${borderColor}`,
            boxShadow: shadow,
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          <div
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full"
            style={{
              backgroundColor:
                skill.textColor === '#000'
                  ? 'rgba(0,0,0,0.12)'
                  : 'rgba(255,255,255,0.2)',
            }}
          >
            <span
              style={{
                color: skill.textColor,
                fontWeight: 700,
                fontSize: 13,
                fontFamily: 'Fira Code, monospace',
                lineHeight: 1,
              }}
            >
              {skill.icon}
            </span>
          </div>

          <span
            style={{
              color: skill.textColor,
              fontWeight: 700,
              fontSize: 11,
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1,
              letterSpacing: '0.2px',
              textAlign: 'center',
            }}
          >
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Particle({ dark }) {
  const size = Math.random() * 3.5 + 1.5;
  const dur = Math.random() * 18 + 12;
  const del = Math.random() * 8;
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: dark ? '#00D4FF' : '#7C3AED',
        opacity: Math.random() * 0.35 + 0.1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, (Math.random() - 0.5) * 90, (Math.random() - 0.5) * 90, 0],
        y: [0, (Math.random() - 0.5) * 90, (Math.random() - 0.5) * 90, 0],
      }}
      transition={{ duration: dur, delay: del, repeat: Infinity, ease: 'linear' }}
    />
  );
}

export default function Skills() {
  const { dark } = useTheme();

  return (
    <section id="skills" className={`py-24 px-4 section-spotlight transition-colors duration-300 ${dark ? 'bg-[#0E131F]' : 'bg-[#F4F6FB]'}`}>
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Interactive</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={dark ? 'text-white' : 'text-slate-900'}>Skills </span>
            <span className="gradient-text-cyan-purple">Playground</span>
          </h2>
          <p className={`mt-3 text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Drag, throw, and interact with technology tiles in real time.
          </p>
        </motion.div>

        <div
          className={`relative w-full rounded-2xl border overflow-hidden transition-all duration-300 ${
            dark
              ? 'border-white/10 bg-[#0B0C16]/90 shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
              : 'border-slate-200/90 bg-white/80 shadow-xl shadow-slate-200/50'
          }`}
          style={{ minHeight: 440, padding: '40px 20px' }}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <Particle key={i} dark={dark} />
          ))}

          <div
            className="relative z-10 grid grid-cols-4  lg:grid-cols-9 justify-items-center gap-4 max-w-5xl mx-auto"
          >
            {skills.map((skill, i) => (
              <SkillTile key={skill.name} skill={skill} index={i} dark={dark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
