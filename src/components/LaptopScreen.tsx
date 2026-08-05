import { useState, useEffect, useRef, type ReactNode } from "react";
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

const MOBILE_CODE_LINES = [
  { text: 'import React from "react";', color: "#c792ea" },
  { text: "const HireMe = () => {", color: "#82aaff" },
  { text: "  return (", color: "#eefff7" },
  { text: '    <Portfolio', color: "#f78c6c" },
  { text: '      skills={["React","TS"]}', color: "#c3e88d" },
  { text: '      available={true}', color: "#c3e88d" },
  { text: "    />", color: "#f78c6c" },
  { text: "  );", color: "#eefff7" },
  { text: "};", color: "#82aaff" },
];

const STATS = [
  { label: "Projects Delivered", mobileLabel: "Projects", value: "50+" },
  { label: "Happy Clients", mobileLabel: "Clients", value: "30+" },
  { label: "Years Experience", mobileLabel: "Experience", value: "3+" },
  { label: "GitHub Commits", mobileLabel: "Commits", value: "1.2k" },
];

const SKILLS = [
  { name: "React.js", pct: 95, color: "#61dafb" },
  { name: "TypeScript", pct: 88, color: "#3178c6" },
  { name: "Next.js", pct: 85, color: "#ffffff" },
  { name: "Tailwind CSS", pct: 92, color: "#38bdf8" },
  { name: "Node.js", pct: 75, color: "#68a063" },
];

const SERVICES = [
  { icon: "⚡", title: "Landing Pages", desc: "Pixel-perfect, blazing fast" },
  { icon: "🎨", title: "UI/UX Design", desc: "Modern & conversion-focused" },
  { icon: "📱", title: "Responsive Web", desc: "Works on every device" },
  { icon: "🚀", title: "Performance", desc: "90+ Lighthouse scores" },
];

const SCENES = ["code", "stats", "skills", "services"] as const;
const SCENE_LABELS: Record<(typeof SCENES)[number], string> = {
  code: "Code",
  stats: "Stats",
  skills: "Skills",
  services: "Build",
};
const DURATIONS: Record<(typeof SCENES)[number], number> = {
  code: 5500,
  stats: 4000,
  skills: 4500,
  services: 4000,
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function MobileSceneShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full min-h-0 flex flex-col max-md:overflow-hidden">
      <div className="flex-1 min-h-0 max-md:overflow-y-auto max-md:overflow-x-hidden max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </div>
  );
}

function CodeScene({ isMobile }: { isMobile: boolean }) {
  const lines = isMobile ? MOBILE_CODE_LINES : CODE_LINES;
  const [visibleLines, setVisibleLines] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= lines.length) {
          clearInterval(interval);
          return v;
        }
        return v + 1;
      });
    }, isMobile ? 150 : 180);
    return () => clearInterval(interval);
  }, [lines.length, isMobile]);

  useEffect(() => {
    if (isMobile && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines, isMobile]);

  return (
    <div className="h-full flex flex-col" style={{ background: "#0d1117" }}>
      <div
        className="flex items-center gap-2 px-3 py-2 max-md:gap-1 max-md:px-2 max-md:py-1 border-b shrink-0"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <span className="flex gap-1.5 max-md:gap-1">
          <span className="h-2.5 w-2.5 max-md:h-1.5 max-md:w-1.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 max-md:h-1.5 max-md:w-1.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 max-md:h-1.5 max-md:w-1.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="text-[10px] max-md:text-[7px] text-[#8b949e] ml-2 max-md:ml-1 font-mono truncate">
          HireMe.jsx
        </span>
        <span className="ml-auto text-[9px] max-md:text-[7px] text-emerald-400 font-semibold animate-pulse shrink-0">
          ● LIVE
        </span>
      </div>

      <div
        ref={bodyRef}
        className="flex-1 min-h-0 overflow-hidden max-md:overflow-y-auto px-4 py-3 max-md:px-2 max-md:py-1.5 font-mono text-[11px] max-md:text-[7px] leading-[1.7] max-md:leading-[1.45]"
      >
        <div className="flex gap-3 max-md:gap-1.5">
          {!isMobile && (
            <div className="text-[#3d444d] select-none shrink-0">
              {lines.slice(0, visibleLines).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <div className="flex-1 min-w-0">
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-md:break-all"
                style={{ color: line.color || "#8b949e", whiteSpace: isMobile ? "pre-wrap" : "pre" }}
              >
                {line.text || " "}
              </motion.div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-[6px] h-[13px] max-md:h-[9px] max-md:w-[4px] bg-[#58a6ff] animate-pulse ml-0.5" />
            )}
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-between px-3 py-1 max-md:px-2 max-md:py-0.5 text-[9px] max-md:text-[6px] font-mono shrink-0 max-md:hidden"
        style={{ background: "#1f6feb", color: "#fff" }}
      >
        <span className="max-md:truncate">⚡ JS React</span>
        <span className="shrink-0">Ln {visibleLines}</span>
        <span className="max-md:hidden shrink-0">UTF-8</span>
      </div>
    </div>
  );
}

function StatsScene({ isMobile }: { isMobile: boolean }) {
  return (
    <MobileSceneShell>
      <div
        className="h-full flex flex-col items-center justify-center gap-3 p-5 max-md:gap-1.5 max-md:p-2.5 max-md:justify-start max-md:pt-3"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] max-md:text-[8px] font-semibold tracking-widest text-[#7c83e3] uppercase mb-1 max-md:mb-0"
        >
          Why hire me?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold text-[15px] max-md:text-[10px] text-center leading-tight mb-3 max-md:mb-1.5"
        >
          {isMobile ? (
            <>
              Frontend Developer
              <br />
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
                Build Your Vision
              </span>
            </>
          ) : (
            <>
              Frontend Developer
              <br />
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
                Ready to Build Your Vision
              </span>
            </>
          )}
        </motion.h2>
        <div className="grid grid-cols-2 gap-2 max-md:gap-1 w-full">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="rounded-xl max-md:rounded-md border border-white/10 text-center py-3 px-2 max-md:py-1.5 max-md:px-1"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
            >
              <div className="text-[20px] max-md:text-[13px] font-extrabold text-white leading-none">{s.value}</div>
              <div className="text-[9px] max-md:text-[6px] text-slate-400 mt-1 max-md:mt-0.5 leading-tight">
                {isMobile ? s.mobileLabel : s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MobileSceneShell>
  );
}

function SkillsScene({ isMobile }: { isMobile: boolean }) {
  return (
    <MobileSceneShell>
      <div
        className="h-full flex flex-col justify-center gap-2.5 p-5 max-md:gap-1 max-md:p-2.5 max-md:justify-start max-md:pt-3"
        style={{ background: "#0a0a14" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] max-md:text-[7px] font-bold tracking-widest text-[#6366f1] uppercase mb-1 max-md:mb-0 shrink-0"
        >
          Tech Stack
        </motion.p>
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col gap-1 max-md:gap-0.5 shrink-0"
          >
            <div className="flex justify-between items-center gap-2">
              <span className="text-[11px] max-md:text-[8px] text-white font-semibold truncate">
                {skill.name}
              </span>
              <span className="text-[10px] max-md:text-[7px] font-bold shrink-0" style={{ color: skill.color }}>
                {skill.pct}%
              </span>
            </div>
            <div className="h-1.5 max-md:h-[3px] rounded-full bg-white/10 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2 max-md:mt-1 rounded-lg max-md:rounded-md border border-indigo-500/30 px-3 py-2 max-md:px-1.5 max-md:py-1 text-center shrink-0"
          style={{ background: "rgba(99,102,241,0.08)" }}
        >
          <span className="text-[10px] max-md:text-[6px] text-indigo-300 font-semibold leading-tight">
            {isMobile ? "+ Motion · GraphQL · Supabase" : "+ Framer Motion · Three.js · GraphQL · Supabase"}
          </span>
        </motion.div>
      </div>
    </MobileSceneShell>
  );
}

function ServicesScene({ isMobile }: { isMobile: boolean }) {
  return (
    <MobileSceneShell>
      <div
        className="h-full flex flex-col justify-center p-5 gap-3 max-md:p-2.5 max-md:gap-1.5 max-md:justify-start max-md:pt-3"
        style={{ background: "linear-gradient(160deg,#0b0f1a,#111827)" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] max-md:text-[7px] font-bold tracking-widest text-[#f472b6] uppercase shrink-0"
        >
          What I build for you
        </motion.p>
        <div className="grid grid-cols-2 gap-2 max-md:gap-1">
          {SERVICES.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="rounded-xl max-md:rounded-md border border-white/10 p-3 max-md:p-1.5"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-[18px] max-md:text-[12px] mb-1 max-md:mb-0">{srv.icon}</div>
              <div className="text-[11px] max-md:text-[8px] font-bold text-white leading-tight">{srv.title}</div>
              {!isMobile && (
                <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">{srv.desc}</div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-xl max-md:rounded-md px-4 py-2.5 max-md:px-2 max-md:py-1.5 text-center shrink-0"
          style={{ background: "linear-gradient(90deg,#6366f1,#7c3aed,#c026d3)" }}
        >
          <span className="text-white font-bold text-[11px] max-md:text-[7px] leading-tight">
            {isMobile ? "🚀 Let's build together" : "🚀 Let's build your website together"}
          </span>
        </motion.div>
      </div>
    </MobileSceneShell>
  );
}

function SceneNav({
  sceneIdx,
  onSelect,
  variant,
}: {
  sceneIdx: number;
  onSelect: (index: number) => void;
  variant: "desktop" | "mobile";
}) {
  if (variant === "mobile") {
    return (
      <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-4 border-t border-white/10 bg-[#0d1117]/98 backdrop-blur-md">
        {SCENES.map((key, i) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show ${SCENE_LABELS[key]} slide`}
            aria-current={sceneIdx === i ? "true" : undefined}
            className={`min-h-[32px] py-2 px-1 text-[8px] font-bold uppercase tracking-wide transition-all active:scale-[0.97] touch-manipulation ${
              sceneIdx === i
                ? "text-[#a5b4fc] bg-[#6366f1]/20 border-t-2 border-[#6366f1]"
                : "text-[#8b949e] border-t-2 border-transparent hover:text-slate-300"
            }`}
          >
            {SCENE_LABELS[key]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute top-2 right-2 z-30 hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/45 backdrop-blur-sm px-2 py-1.5 shadow-lg">
      {SCENES.map((key, i) => (
        <button
          key={key}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Show ${SCENE_LABELS[key]} slide`}
          aria-current={sceneIdx === i ? "true" : undefined}
          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-white/10 touch-manipulation"
        >
          <span
            className={`block rounded-full transition-all duration-300 ${sceneIdx === i ? "h-2 w-5 bg-[#6366f1]" : "h-2 w-2 bg-white/30"}`}
          />
        </button>
      ))}
    </div>
  );
}

export default function LaptopScreen() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const isMobile = useIsMobile();
  const scene = SCENES[sceneIdx];

  const selectScene = (index: number) => {
    setSceneIdx(index);
  };

  useEffect(() => {
    const id = setTimeout(() => setSceneIdx((i) => (i + 1) % SCENES.length), DURATIONS[scene]);
    return () => clearTimeout(id);
  }, [scene]);

  return (
    <div className="relative w-full h-full overflow-hidden touch-manipulation" style={{ background: "#0d1117" }}>
      <SceneNav sceneIdx={sceneIdx} onSelect={selectScene} variant="desktop" />
      {isMobile && <SceneNav sceneIdx={sceneIdx} onSelect={selectScene} variant="mobile" />}

      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 z-0 max-md:bottom-8"
        >
          {scene === "code" && <CodeScene isMobile={isMobile} />}
          {scene === "stats" && <StatsScene isMobile={isMobile} />}
          {scene === "skills" && <SkillsScene isMobile={isMobile} />}
          {scene === "services" && <ServicesScene isMobile={isMobile} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
