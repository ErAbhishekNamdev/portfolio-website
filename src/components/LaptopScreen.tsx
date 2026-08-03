import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CODE_LINES = [
  { text: 'import React, { useState } from "react";', color: "#c792ea" },
  { text: "", color: "" },
  { text: "const HireMe = () => {", color: "#82aaff" },
  { text: "  const [hired, setHired] = useState(false);", color: "#eefff7" },
  { text: "", color: "" },
  { text: "  return (", color: "#eefff7" },
  { text: '    <Portfolio', color: "#f78c6c" },
  { text: '      skills={["React","Next.js","TypeScript"]}', color: "#c3e88d" },
  { text: '      experience="3+ Years"', color: "#c3e88d" },
  { text: '      available={true}', color: "#c3e88d" },
  { text: "    />", color: "#f78c6c" },
  { text: "  );", color: "#eefff7" },
  { text: "};", color: "#82aaff" },
];

const STATS = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients",      value: "30+" },
  { label: "Years Experience",   value: "3+"  },
  { label: "GitHub Commits",     value: "1.2k"},
];

const SKILLS = [
  { name: "React.js",     pct: 95, color: "#61dafb" },
  { name: "TypeScript",   pct: 88, color: "#3178c6" },
  { name: "Next.js",      pct: 85, color: "#ffffff" },
  { name: "Tailwind CSS", pct: 92, color: "#38bdf8" },
  { name: "Node.js",      pct: 75, color: "#68a063" },
];

const SERVICES = [
  { icon: "⚡", title: "Landing Pages",   desc: "Pixel-perfect, blazing fast"    },
  { icon: "🎨", title: "UI/UX Design",    desc: "Modern & conversion-focused"     },
  { icon: "📱", title: "Responsive Web",  desc: "Works on every device"           },
  { icon: "🚀", title: "Performance",     desc: "90+ Lighthouse scores"           },
];

const SCENES = ["code", "stats", "skills", "services"];
const DURATIONS = { code: 5500, stats: 4000, skills: 4500, services: 4000 };

function CodeScene() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= CODE_LINES.length) { clearInterval(interval); return v; }
        return v + 1;
      });
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col" style={{ background: "#0d1117" }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b"
        style={{ background: "#161b22", borderColor: "#30363d" }}>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="text-[10px] text-[#8b949e] ml-2 font-mono">HireMe.jsx</span>
        <span className="ml-auto text-[9px] text-emerald-400 font-semibold animate-pulse">● LIVE</span>
      </div>

      {/* Code body */}
      <div className="flex-1 overflow-hidden px-4 py-3 font-mono text-[11px] leading-[1.7]">
        <div className="flex gap-3">
          <div className="text-[#3d444d] select-none">
            {CODE_LINES.slice(0, visibleLines).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="flex-1">
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ color: line.color || "#8b949e", whiteSpace: "pre" }}>
                {line.text || " "}
              </motion.div>
            ))}
            {visibleLines < CODE_LINES.length && (
              <span className="inline-block w-[6px] h-[13px] bg-[#58a6ff] animate-pulse ml-0.5" />
            )}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1 text-[9px] font-mono"
        style={{ background: "#1f6feb", color: "#fff" }}>
        <span>⚡ JavaScript React</span>
        <span>Ln {visibleLines}, Col 1</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}

function StatsScene() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3 p-5"
      style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}>
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="text-[11px] font-semibold tracking-widest text-[#7c83e3] uppercase mb-1">
        Why hire me?
      </motion.p>
      <motion.h2 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="text-white font-bold text-[15px] text-center leading-tight mb-3">
        Frontend Developer<br />
        <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
          Ready to Build Your Vision
        </span>
      </motion.h2>
      <div className="grid grid-cols-2 gap-2 w-full">
        {STATS.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="rounded-xl border border-white/10 text-center py-3 px-2"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}>
            <div className="text-[20px] font-extrabold text-white leading-none">{s.value}</div>
            <div className="text-[9px] text-slate-400 mt-1 leading-tight">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillsScene() {
  return (
    <div className="h-full flex flex-col justify-center gap-2.5 p-5"
      style={{ background: "#0a0a14" }}>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-[10px] font-bold tracking-widest text-[#6366f1] uppercase mb-1">
        Tech Stack
      </motion.p>
      {SKILLS.map((skill, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-white font-semibold">{skill.name}</span>
            <span className="text-[10px] font-bold" style={{ color: skill.color }}>{skill.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.pct}%` }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg,${skill.color}88,${skill.color})` }}
            />
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="mt-2 rounded-lg border border-indigo-500/30 px-3 py-2 text-center"
        style={{ background: "rgba(99,102,241,0.08)" }}>
        <span className="text-[10px] text-indigo-300 font-semibold">
          + Framer Motion · Three.js · GraphQL · Supabase
        </span>
      </motion.div>
    </div>
  );
}

function ServicesScene() {
  return (
    <div className="h-full flex flex-col justify-center p-5 gap-3"
      style={{ background: "linear-gradient(160deg,#0b0f1a,#111827)" }}>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-[10px] font-bold tracking-widest text-[#f472b6] uppercase">
        What I build for you
      </motion.p>
      <div className="grid grid-cols-2 gap-2">
        {SERVICES.map((srv, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="rounded-xl border border-white/10 p-3"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="text-[18px] mb-1">{srv.icon}</div>
            <div className="text-[11px] font-bold text-white leading-tight">{srv.title}</div>
            <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">{srv.desc}</div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-xl px-4 py-2.5 text-center"
        style={{ background: "linear-gradient(90deg,#6366f1,#7c3aed,#c026d3)" }}>
        <span className="text-white font-bold text-[11px]">
          🚀 Let's build your website together
        </span>
      </motion.div>
    </div>
  );
}

export default function LaptopScreen() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const scene = SCENES[sceneIdx];

  useEffect(() => {
    const id = setTimeout(() => setSceneIdx((i) => (i + 1) % SCENES.length), DURATIONS[scene]);
    return () => clearTimeout(id);
  }, [scene]);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#0d1117" }}>
      {/* Dot nav */}
      <div className="absolute top-2 right-2 z-20 flex gap-1">
        {SCENES.map((_, i) => (
          <button key={i} onClick={() => setSceneIdx(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: sceneIdx === i ? 16 : 6,
              background: sceneIdx === i ? "#6366f1" : "rgba(255,255,255,0.2)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={scene}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
          className="absolute inset-0">
          {scene === "code"     && <CodeScene />}
          {scene === "stats"    && <StatsScene />}
          {scene === "skills"   && <SkillsScene />}
          {scene === "services" && <ServicesScene />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
