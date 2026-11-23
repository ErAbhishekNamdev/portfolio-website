import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const skills = [
  // Core Languages & Frontend Essentials
  { name: 'HTML5', color: '#E34F26', textColor: '#fff', icon: '</>' },
  { name: 'CSS3', color: '#1572B6', textColor: '#fff', icon: 'CSS' },
  { name: 'JavaScript', color: '#F7DF1E', textColor: '#000', icon: 'JS' },
  { name: 'TypeScript', color: '#3178C6', textColor: '#fff', icon: 'TS' },
  { name: 'React', color: '#61DAFB', textColor: '#000', icon: '⚛' },
  { name: 'Next.js', color: '#000000', textColor: '#fff', icon: 'N' },
  { name: 'Tailwind', color: '#38BDF8', textColor: '#fff', icon: 'TW' },
  { name: 'SASS', color: '#CC6699', textColor: '#fff', icon: '💅' },
  { name: 'Bootstrap', color: '#7952B3', textColor: '#fff', icon: 'B' },

  // State & Data Fetching
  { name: 'Redux', color: '#764ABC', textColor: '#fff', icon: 'RX' },
  { name: 'Zustand', color: '#4338CA', textColor: '#fff', icon: 'Z' },
  { name: 'React Query', color: '#FF4154', textColor: '#fff', icon: 'RQ' },
  { name: 'GraphQL', color: '#E10098', textColor: '#fff', icon: 'GQL' },
  { name: 'REST API', color: '#14B8A6', textColor: '#fff', icon: 'API' },
  { name: 'Axios', color: '#5A29E4', textColor: '#fff', icon: 'AX' },

  // UI, Animations & Design
  { name: 'Figma', color: '#F24E1E', textColor: '#fff', icon: 'FIG' },
  { name: 'Shadcn UI', color: '#18181B', textColor: '#fff', icon: 'ui' },
  { name: 'Framer', color: '#0055FF', textColor: '#fff', icon: 'FM' },
  { name: 'GSAP', color: '#88CE02', textColor: '#000', icon: 'GS' },
  { name: 'Three.js', color: '#00B4A6', textColor: '#fff', icon: '3D' },
  { name: 'Responsive', color: '#0284C7', textColor: '#fff', icon: 'RWD' },

  // Build Tools, Testing & Ecosystem
  { name: 'Vite', color: '#646CFF', textColor: '#fff', icon: 'V' },
  { name: 'Webpack', color: '#1C78C0', textColor: '#fff', icon: 'WP' },
  { name: 'Jest', color: '#C21325', textColor: '#fff', icon: '🃏' },
  { name: 'Git', color: '#F05032', textColor: '#fff', icon: 'G' },
  { name: 'GitHub', color: '#24292F', textColor: '#fff', icon: 'GH' },
  { name: 'Postman', color: '#FF6C37', textColor: '#fff', icon: 'PM' },

  // Full-Stack & Cloud Integration
  { name: 'Node.js', color: '#339933', textColor: '#fff', icon: 'JS' },
  { name: 'Express', color: '#404040', textColor: '#fff', icon: 'EX' },
  { name: 'MongoDB', color: '#4EA94B', textColor: '#fff', icon: 'M' },
  { name: 'PostgreSQL', color: '#336791', textColor: '#fff', icon: 'PG' },
  { name: 'Docker', color: '#2496ED', textColor: '#fff', icon: '🐳' },
  { name: 'AWS', color: '#FF9900', textColor: '#000', icon: 'AWS' },
  { name: 'Jenkins', color: '#D33833', textColor: '#fff', icon: 'JEN' },
  { name: 'Python', color: '#3776AB', textColor: '#fff', icon: 'PY' },
  { name: 'PWA', color: '#5A0FC8', textColor: '#fff', icon: 'PWA' },
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
          className="flex h-[68px] w-[68px] sm:h-[84px] sm:w-[84px] md:h-[88px] md:w-[88px] flex-col items-center justify-center gap-1 sm:gap-1.5 rounded-[13px] sm:rounded-[15px] transition-all select-none"
          style={{
            backgroundColor: skill.color,
            border: `1.5px solid ${borderColor}`,
            boxShadow: shadow,
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          <div
            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full shrink-0"
            style={{
              backgroundColor:
                skill.textColor === '#000'
                  ? 'rgba(0,0,0,0.12)'
                  : 'rgba(255,255,255,0.22)',
            }}
          >
            <span
              className="text-[10px] sm:text-[11.5px] leading-none"
              style={{
                color: skill.textColor,
                fontWeight: 700,
                fontFamily: 'Fira Code, monospace',
              }}
            >
              {skill.icon}
            </span>
          </div>

          <span
            className="text-[8.5px] sm:text-[10px] max-w-[94%] truncate font-bold leading-tight text-center tracking-[0.1px]"
            style={{
              color: skill.textColor,
              fontFamily: 'Inter, sans-serif',
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
      <div className="max-w-container mx-auto px-4 md:px-6 2xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Interactive</span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold mt-2 font-syne">
            <span className={dark ? 'text-white' : 'text-slate-900'}>Skills </span>
            <span className="gradient-text-cyan-purple">Playground</span>
          </h2>
          <p className={`mt-3 text-sm 2xl:text-base ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
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
            className="relative z-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 justify-items-center gap-2.5 sm:gap-3.5 2xl:gap-4 max-w-5xl 2xl:max-w-6xl mx-auto"
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
