import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiRedux,
  SiVite,
  SiFramer,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

/* ─── Data ─── */

const CODE_LINES = [
  { text: "const ClientProject = ({ client, type }) => {", color: "#82aaff" },
  { text: "  return (", color: "#eefff7" },
  { text: "    <ProductDelivery", color: "#f78c6c" },
  { text: '      client={client}', color: "#c3e88d" },
  { text: '      type={type}', color: "#c3e88d" },
  { text: '      stack={["React","Next.js","TS"]}', color: "#c3e88d" },
  { text: '      forStartups="MVP Launch"', color: "#c3e88d" },
  { text: '      forCompanies="Web Apps"', color: "#c3e88d" },
  { text: '      forHR="Production Ready"', color: "#c3e88d" },
  { text: "      scalable={true}", color: "#c3e88d" },
  { text: "    />", color: "#f78c6c" },
  { text: "  );", color: "#eefff7" },
  { text: "};", color: "#82aaff" },
];

const BUILD_BADGES = [
  { icon: "🚀", text: "Startup MVP Ready", color: "#34d399" },
  { icon: "🏢", text: "Enterprise Grade", color: "#60a5fa" },
  { icon: "👔", text: "HR-Vetted Skills", color: "#c084fc" },
];

const PREMIUM_BADGES = [
  "🚀 Startup MVPs",
  "🏢 Company Products",
  "👔 HR-Ready Hire",
  "⚡ Fast Delivery",
  "📱 Mobile First",
  "🔒 Secure Code",
];

const STATS = [
  { icon: "🚀", value: 50, suffix: "+", label: "Products for Startups", mobileLabel: "Startup Products" },
  { icon: "🏢", value: 30, suffix: "+", label: "Companies Served", mobileLabel: "Companies" },
  { icon: "👔", value: 3, suffix: "+", label: "Years Industry Experience", mobileLabel: "Yrs Experience" },
  { icon: "⚡", value: 98, suffix: "%", label: "On-Time Delivery Rate", mobileLabel: "On-Time Delivery" },
];

type StackTile = {
  name: string;
  color: string;
  icon: IconType;
  category: string;
};

const STACK_TILES: StackTile[] = [
  { name: "React", color: "#61dafb", icon: SiReact, category: "Core" },
  { name: "Next.js", color: "#ffffff", icon: SiNextdotjs, category: "Core" },
  { name: "TypeScript", color: "#3178c6", icon: SiTypescript, category: "Core" },
  { name: "JavaScript", color: "#f7df1e", icon: SiJavascript, category: "Core" },
  { name: "Redux", color: "#764abc", icon: SiRedux, category: "Core" },
  { name: "Vite", color: "#646cff", icon: SiVite, category: "Core" },
  { name: "HTML5", color: "#e34f26", icon: SiHtml5, category: "UI" },
  { name: "CSS3", color: "#264de4", icon: SiCss, category: "UI" },
  { name: "Tailwind", color: "#38bdf8", icon: SiTailwindcss, category: "UI" },
  { name: "Framer", color: "#0055ff", icon: SiFramer, category: "UI" },
  { name: "Figma", color: "#a259ff", icon: SiFigma, category: "UI" },
  { name: "Git", color: "#f05032", icon: SiGit, category: "Tools" },
  { name: "GitHub", color: "#e6edf3", icon: SiGithub, category: "Tools" },
  { name: "Node.js", color: "#68a063", icon: SiNodedotjs, category: "Tools" },
  { name: "Firebase", color: "#ffca28", icon: SiFirebase, category: "Tools" },
  { name: "Vercel", color: "#ffffff", icon: SiVercel, category: "Deploy" },
  { name: "REST API", color: "#94a3b8", icon: SiNodedotjs, category: "Deploy" },
  { name: "Responsive", color: "#22d3ee", icon: SiHtml5, category: "Deploy" },
];

const STACK_HIGHLIGHTS = [
  { label: "20+ Tools", icon: "⚡" },
  { label: "Production Ready", icon: "✅" },
  { label: "Modern Stack", icon: "🔥" },
];

const FRONTEND_DELIVERABLES = [
  "Landing Pages",
  "Company Sites",
  "SaaS UI",
  "E-Commerce",
  "Dashboards",
  "Portfolios",
];

const OFFERINGS = [
  {
    icon: "🌐",
    title: "Website Design",
    desc: "Modern, responsive layouts",
    accent: "#38bdf8",
    border: "border-sky-500/25",
    gradient: "from-sky-500/15 to-transparent",
    features: ["UI Layout", "Responsive"],
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "iOS, Android & PWA apps",
    accent: "#34d399",
    border: "border-emerald-500/25",
    gradient: "from-emerald-500/15 to-transparent",
    features: ["React Native", "Cross-platform"],
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "React & Next.js websites",
    accent: "#818cf8",
    border: "border-indigo-500/25",
    gradient: "from-indigo-500/15 to-transparent",
    features: ["React", "Next.js"],
  },
  {
    icon: "🚀",
    title: "MVP Launch",
    desc: "Startup products fast",
    accent: "#22d3ee",
    border: "border-cyan-500/25",
    gradient: "from-cyan-500/15 to-transparent",
    features: ["Landing Page", "SaaS UI"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Figma, wireframes & prototypes",
    accent: "#f472b6",
    border: "border-pink-500/25",
    gradient: "from-pink-500/15 to-transparent",
    features: ["Figma", "Prototypes"],
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Online stores that sell",
    accent: "#a78bfa",
    border: "border-violet-500/25",
    gradient: "from-violet-500/15 to-transparent",
    features: ["Store UI", "Checkout"],
  },
  {
    icon: "👔",
    title: "Full-Time Dev",
    desc: "Join your dev team",
    accent: "#fb923c",
    border: "border-orange-500/25",
    gradient: "from-orange-500/15 to-transparent",
    features: ["Remote", "3+ Yrs"],
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Updates, fixes & support",
    accent: "#fbbf24",
    border: "border-amber-500/25",
    gradient: "from-amber-500/15 to-transparent",
    features: ["Bug Fixes", "Updates"],
  },
];

const HIRE_STEPS = [
  { step: "01", title: "Reach Out", desc: "Brief via form or email", icon: "📩" },
  { step: "02", title: "Discovery", desc: "Free 30-min strategy call", icon: "📞" },
  { step: "03", title: "Proposal", desc: "Timeline + transparent quote", icon: "📋" },
  { step: "04", title: "Ship It", desc: "Build, review, deploy live", icon: "🚀" },
];

const HIRE_PATHS = [
  {
    icon: "🚀",
    label: "Startup",
    tagline: "MVP & Launch",
    perks: ["Fast turnaround", "Investor-ready UI"],
    accent: "#22d3ee",
    border: "border-cyan-500/30",
  },
  {
    icon: "🏢",
    label: "Company",
    tagline: "Web Products",
    perks: ["Brand websites", "Client portals"],
    accent: "#818cf8",
    border: "border-indigo-500/30",
  },
  {
    icon: "👔",
    label: "Full-Time",
    tagline: "Join Your Team",
    perks: ["Remote ready", "Production code"],
    accent: "#34d399",
    border: "border-emerald-500/30",
  },
];

const HIRE_TRUST = [
  { icon: "⚡", label: "24hr Reply" },
  { icon: "🌍", label: "Remote OK" },
  { icon: "🎯", label: "Free Call" },
  { icon: "✅", label: "On-Time" },
];

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const AUDIENCE_PILLS = ["🚀 Startups", "🏢 Companies", "👔 HR Teams", "🤝 Founders"];

const SCENES = ["code", "stats", "skills", "services", "cta"] as const;
type SceneKey = (typeof SCENES)[number];

const SCENE_LABELS: Record<SceneKey, string> = {
  code: "Demo",
  stats: "Proof",
  skills: "Stack",
  services: "Offer",
  cta: "Hire",
};

const DURATIONS: Record<SceneKey, number> = {
  code: 6500,
  stats: 4500,
  skills: 7500,
  services: 9000,
  cta: 7500,
};

/* ─── Hooks & utilities ─── */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

function useCountUp(target: number, duration = 1400, active = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, active]);
  return count;
}

/* ─── Shared visuals ─── */

function BackgroundEffects() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${8 + (i * 7.5) % 85}%`,
    top: `${10 + (i * 11) % 75}%`,
    size: 2 + (i % 3),
    delay: i * 0.4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-indigo-600/20 blur-3xl max-md:h-20 max-md:w-20"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-purple-600/15 blur-3xl max-md:h-16 max-md:w-16"
        animate={{ x: [0, -15, 0], y: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(99,102,241,0.5) 1px,transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/30"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + p.delay, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SceneShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative h-full w-full min-h-0 flex flex-col overflow-hidden ${className}`}>
      <BackgroundEffects />
      <div className="relative z-10 h-full w-full min-h-0 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function ProgressRail({ sceneIdx, onSelect, isMobile }: { sceneIdx: number; onSelect: (i: number) => void; isMobile: boolean }) {
  return (
    <div className={`shrink-0 z-30 flex items-center justify-center gap-0 px-2 md:px-3 py-1.5 md:py-0 border-b border-white/[0.06] bg-[#0d1117]/95 ${isMobile ? "" : "absolute left-0 right-0 top-2"}`}>
      <div className="flex items-center w-full max-w-[92%]">
        {SCENES.map((key, i) => (
          <div key={key} className="flex items-center flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to ${SCENE_LABELS[key]}`}
              className="group flex flex-col items-center gap-0.5 touch-manipulation shrink-0"
            >
              <span
                className={`rounded-full transition-all duration-300 ${sceneIdx === i
                    ? "h-2 w-2 max-md:h-2.5 max-md:w-2.5 bg-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    : sceneIdx > i
                      ? "h-1.5 w-1.5 max-md:h-2 max-md:w-2 bg-[#6366f1]/60"
                      : "h-1.5 w-1.5 max-md:h-2 max-md:w-2 bg-white/25 group-hover:bg-white/40"
                  }`}
              />
              <span className={`font-semibold uppercase tracking-wider ${isMobile ? "text-[5px]" : "text-[7px]"} ${sceneIdx === i ? "text-indigo-300" : "text-white/30"}`}>
                {SCENE_LABELS[key]}
              </span>
            </button>
            {i < SCENES.length - 1 && (
              <div className="flex-1 h-px mx-1 max-md:mx-0.5 bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#6366f1] to-[#818cf8]"
                  initial={{ width: "0%" }}
                  animate={{ width: sceneIdx > i ? "100%" : sceneIdx === i ? "50%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Scenes ─── */

function LivePreview({ isMobile }: { isMobile: boolean }) {
  const previews = [
    { label: "Startup MVP", emoji: "🚀", sub: "Launch in weeks" },
    { label: "Company Site", emoji: "🏢", sub: "Brand & trust" },
    { label: "HR Portfolio", emoji: "👔", sub: "Hire with confidence" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % previews.length), 2200);
    return () => clearInterval(id);
  }, []);

  const current = previews[idx];

  return (
    <div
      className="flex flex-col rounded-md border border-white/10 overflow-hidden h-full m-0.5 ml-0 mr-1 my-0.5 md:m-2 md:ml-0"
      style={{ background: "linear-gradient(160deg,#0f172a,#1e1b4b)" }}
    >
      <div className="flex items-center gap-1 px-2 py-1 border-b border-white/10 bg-black/30 shrink-0">
        <span className="text-[6px] max-md:text-[7px] text-slate-400 font-mono">Client Preview</span>
        <span className="ml-auto text-[6px] max-md:text-[7px] text-emerald-400">● Live</span>
      </div>
      <div className="flex-1 p-1 md:p-2 flex flex-col items-center justify-center gap-0.5 md:gap-1 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="text-sm md:text-lg">{current.emoji}</div>
            <div className="text-[6px] md:text-[8px] font-bold text-white text-center">{current.label}</div>
            <div className="text-[5px] md:text-[7px] text-indigo-300">{current.sub}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-1 mt-1">
          {previews.map((p, i) => (
            <span
              key={p.label}
              className={`h-1 rounded-full transition-all ${i === idx ? "w-3 bg-indigo-400" : "w-1 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  const lines = CODE_LINES;
  const [visibleLines, setVisibleLines] = useState(0);
  const [showBadges, setShowBadges] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    setVisibleLines(0);
    setShowBadges(false);
    const interval = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= lines.length) {
          clearInterval(interval);
          setTimeout(() => setShowBadges(true), 400);
          return v;
        }
        return v + 1;
      });
    }, isMobile ? 160 : 200);
    return () => clearInterval(interval);
  }, [lines.length, isMobile, active]);

  useEffect(() => {
    if (isMobile && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines, isMobile]);

  return (
    <SceneShell>
      <div className="h-full w-full flex flex-col min-h-0 overflow-hidden pt-0 md:pt-4" style={{ background: "#0d1117" }}>
        <div
          className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 border-b shrink-0"
          style={{ background: "#161b22", borderColor: "#30363d" }}
        >
          <span className="hidden md:flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="text-[7px] md:text-[10px] text-[#8b949e] md:ml-1 font-mono truncate flex-1">
            ClientProject.tsx
          </span>
          <span className="flex items-center gap-1 text-[6px] md:text-[8px] text-emerald-400 font-semibold shrink-0">
            <span className="animate-pulse">●</span>
            Client Ready
          </span>
        </div>

        <div className="flex-1 min-h-0 flex flex-row">
          <div
            ref={bodyRef}
            className="min-h-0 flex-1 overflow-hidden border-r border-[#30363d] font-mono leading-[1.45] md:leading-[1.65] px-1.5 md:px-3 py-1 md:py-2 text-[6px] md:text-[10px] max-md:overflow-y-auto max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden"
          >
            <div className="text-[#c792ea] mb-0.5 md:mb-1 text-[5px] md:text-inherit">import React from "react";</div>
            {lines.slice(0, visibleLines).map((line, i) =>
              isMobile ? (
                <div
                  key={i}
                  className="break-all whitespace-pre-wrap"
                  style={{ color: line.color || "#8b949e" }}
                >
                  {line.text}
                </div>
              ) : (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="break-normal whitespace-pre"
                  style={{ color: line.color || "#8b949e" }}
                >
                  {line.text}
                </motion.div>
              )
            )}
            {visibleLines < lines.length && (
              <span className="inline-block w-[4px] h-[10px] md:w-[5px] md:h-[12px] bg-[#58a6ff] animate-pulse" />
            )}
          </div>
          <div className="flex-1 min-w-0 max-md:max-w-[42%]">
            <LivePreview isMobile={isMobile} />
          </div>
        </div>

        <AnimatePresence>
          {showBadges && (
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-0.5 md:gap-1 px-1 md:px-2 py-0.5 md:py-1.5 border-t shrink-0 overflow-x-auto max-md:[scrollbar-width:none]"
              style={{ background: "#161b22", borderColor: "#30363d" }}
            >
              {BUILD_BADGES.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-0.5 text-[5px] md:text-[7px] font-semibold px-1 md:px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 whitespace-nowrap shrink-0"
                  style={{ color: b.color }}
                >
                  {b.icon} {b.text}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between px-2 md:px-3 py-0.5 md:py-1 text-[5px] md:text-[8px] font-mono shrink-0" style={{ background: "#1f6feb", color: "#fff" }}>
          <span>⚡ TypeScript React</span>
          <span>Ln {visibleLines}</span>
          <span>UTF-8</span>
        </div>
      </div>
    </SceneShell>
  );
}

function StatCard({
  stat,
  isMobile,
  active,
  index,
}: {
  stat: (typeof STATS)[number];
  isMobile: boolean;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1200 + index * 150, active);
  const display = `${count}${stat.suffix}`;

  if (isMobile) {
    return (
      <div
        className="h-full rounded-xl border border-white/10 text-center py-1 px-1 backdrop-blur-sm flex flex-col items-center justify-center"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div className="text-xs mb-0.5">{stat.icon}</div>
        <div className="text-sm font-extrabold text-white leading-none">{display}</div>
        <div className="text-[5px] text-slate-400 mt-0.5 leading-tight line-clamp-2 px-0.5">{stat.label}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 + index * 0.1 }}
      className="rounded-xl border border-white/10 text-center py-3 px-2 backdrop-blur-sm"
      style={{ background: "rgba(255,255,255,0.06)" }}
    >
      <div className="text-xl mb-1">{stat.icon}</div>
      <div className="text-[22px] font-extrabold text-white leading-none">{display}</div>
      <div className="text-[9px] text-slate-400 mt-1.5 leading-tight">{stat.label}</div>
    </motion.div>
  );
}

function StatsScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full w-full flex flex-col items-center justify-center gap-1 md:gap-3 p-1.5 md:p-4 pt-2.5 md:pt-8 min-h-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={isMobile ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[7px] md:text-[11px] font-semibold tracking-widest text-[#7c83e3] uppercase shrink-0 text-center"
        >
          Trusted by Startups & Companies
        </motion.p>
        <motion.h2
          initial={isMobile ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold text-[8px] md:text-[14px] text-center leading-tight shrink-0 px-1"
        >
          I Help Teams Ship
          <br />
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
            Products That Get Hired & Funded
          </span>
        </motion.h2>

        <div className="flex flex-wrap gap-0.5 md:gap-1 justify-center shrink-0">
          {AUDIENCE_PILLS.map((pill) => (
            <span
              key={pill}
              className="text-[4px] md:text-[6px] font-semibold px-1 md:px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="w-full flex-1 min-h-0 grid grid-cols-2 gap-0.5 md:gap-2">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} isMobile={isMobile} active={active} index={i} />
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

function StackTileCard({ tile, index, active, isMobile }: { tile: StackTile; index: number; active: boolean; isMobile?: boolean }) {
  const Icon = tile.icon;
  const inner = (
    <>
      <div
        className="flex h-7 w-7 max-md:h-[16px] max-md:w-[16px] items-center justify-center rounded-lg max-md:rounded mb-0.5 max-md:mb-0"
        style={{
          color: tile.color,
          background: `${tile.color}22`,
          border: `1px solid ${tile.color}45`,
          boxShadow: `0 0 12px ${tile.color}35`,
        }}
      >
        <Icon className="text-sm max-md:text-[8px]" />
      </div>
      <span className="text-[9px] max-md:text-[5px] font-extrabold text-white leading-none px-0.5 truncate w-full">
        {tile.name}
      </span>
      <span className="text-[7px] max-md:text-[4px] text-slate-300 mt-0.5 uppercase tracking-wide font-semibold line-clamp-1">
        {tile.category}
      </span>
    </>
  );

  const cls =
    "h-full w-full min-h-0 flex flex-col items-center justify-center text-center rounded-xl max-md:rounded-md border border-white/15 backdrop-blur-sm overflow-hidden py-1 px-0.5 max-md:py-0.5";

  if (isMobile) {
    return (
      <div
        className={cls}
        style={{
          background: `linear-gradient(180deg, ${tile.color}20, rgba(255,255,255,0.07))`,
          boxShadow: `inset 0 1px 0 ${tile.color}35`,
        }}
      >
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.85 }}
      transition={{ delay: 0.1 + index * 0.04, type: "spring", stiffness: 260, damping: 22 }}
      className={cls}
      style={{
        background: `linear-gradient(180deg, ${tile.color}20, rgba(255,255,255,0.07))`,
        boxShadow: `inset 0 1px 0 ${tile.color}35`,
      }}
    >
      {inner}
    </motion.div>
  );
}

function SkillsScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full w-full flex flex-col items-center justify-center gap-0.5 md:gap-1.5 p-1 md:p-4 pt-2.5 md:pt-8 min-h-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={isMobile ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : -8 }}
          className="text-[7px] md:text-[11px] font-semibold tracking-widest text-[#a5b4fc] uppercase shrink-0 text-center"
        >
          Frontend Developer
        </motion.p>
        <motion.h2
          initial={isMobile ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 }}
          transition={{ delay: 0.08 }}
          className="text-white font-bold text-[8px] md:text-[14px] text-center leading-tight shrink-0 px-1"
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>

        <div className="flex flex-wrap gap-0.5 md:gap-1 justify-center shrink-0">
          {STACK_HIGHLIGHTS.map((h) => (
            <span
              key={h.label}
              className="text-[5px] md:text-[8px] font-semibold px-1 md:px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-slate-200"
            >
              {h.icon} {h.label}
            </span>
          ))}
        </div>

        <div className="w-full flex-1 min-h-0 grid grid-cols-6 grid-rows-3 gap-0.5 md:gap-1.5 auto-rows-fr">
          {STACK_TILES.map((tile, i) => (
            <StackTileCard key={tile.name} tile={tile} index={i} active={active} isMobile={isMobile} />
          ))}
        </div>

        <div className="flex flex-wrap gap-0.5 md:gap-1 justify-center shrink-0 w-full max-md:overflow-hidden max-md:max-h-[12px]">
          {FRONTEND_DELIVERABLES.map((item) => (
            <span
              key={item}
              className="text-[4px] md:text-[8px] font-semibold px-1 md:px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

function ServiceCard({
  item,
  index,
  active,
  isMobile,
}: {
  item: (typeof OFFERINGS)[number];
  index: number;
  active: boolean;
  isMobile: boolean;
}) {
  const cls = `h-full w-full min-h-0 flex flex-col items-center justify-center text-center rounded-xl max-md:rounded-md border ${item.border} backdrop-blur-sm overflow-hidden py-1.5 px-1 max-md:py-1 max-md:px-0.5`;
  const style = {
    background: `linear-gradient(180deg, ${item.accent}22, rgba(255,255,255,0.07))`,
    boxShadow: `inset 0 1px 0 ${item.accent}35`,
  };

  const inner = (
    <>
      <div className="text-base md:text-xl mb-0 md:mb-1 leading-none">{item.icon}</div>
      <h3 className="text-[6px] md:text-[9px] font-extrabold text-white leading-tight px-0.5 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-[4px] md:text-[7px] text-slate-300 mt-0.5 leading-snug line-clamp-2 max-md:line-clamp-1 px-0.5 font-medium">
        {item.desc}
      </p>
      <div className="flex flex-wrap gap-0.5 justify-center mt-0.5 md:mt-1 px-0.5">
        {item.features.map((f) => (
          <span
            key={f}
            className="text-[4px] md:text-[6px] font-semibold px-0.5 md:px-1.5 py-0.5 rounded-full bg-black/40 border border-white/15 text-slate-200 leading-none"
          >
            {f}
          </span>
        ))}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div className={cls} style={style}>
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.88 }}
      transition={{ delay: 0.1 + index * 0.06, type: "spring", stiffness: 260, damping: 22 }}
      className={cls}
      style={style}
    >
      {inner}
    </motion.div>
  );
}

function ServicesScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full w-full flex flex-col items-center justify-center gap-0.5 md:gap-1.5 p-1 md:p-4 pt-2.5 md:pt-8 min-h-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={isMobile ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : -8 }}
          className="text-[7px] md:text-[11px] font-semibold tracking-widest text-[#a5b4fc] uppercase shrink-0 text-center"
        >
          What I Offer
        </motion.p>
        <motion.h2
          initial={isMobile ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 }}
          transition={{ delay: 0.08 }}
          className="text-white font-bold text-[8px] md:text-[14px] text-center leading-tight shrink-0 px-1"
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
            Services & Solutions
          </span>
        </motion.h2>

        <div className="flex flex-wrap gap-0.5 md:gap-1 justify-center shrink-0">
          {["🌐 Websites", "📱 Mobile Apps", "🎨 UI Design", "💻 Development"].map((tag) => (
            <span
              key={tag}
              className="text-[5px] md:text-[8px] font-semibold px-1 md:px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="w-full flex-1 min-h-0 grid grid-cols-4 grid-rows-2 gap-0.5 md:gap-1.5 auto-rows-fr">
          {OFFERINGS.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} active={active} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

function HireStepCard({
  step,
  index,
  active,
  isLast,
  isMobile,
}: {
  step: (typeof HIRE_STEPS)[number];
  index: number;
  active: boolean;
  isLast?: boolean;
  isMobile?: boolean;
}) {
  const stepInner = (
    <>
      <div className="flex h-4 w-4 md:h-7 md:w-7 items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-400/45 shadow-[0_0_10px_rgba(99,102,241,0.25)]">
        <span className="text-[5px] md:text-[8px] font-extrabold text-indigo-200">{step.step}</span>
      </div>
      <span className="text-[5px] md:text-[8px] font-bold text-white mt-0.5 md:mt-1 leading-tight text-center line-clamp-1">
        {step.title}
      </span>
    </>
  );

  return (
    <div className="flex flex-1 items-center min-w-0">
      {isMobile ? (
        <div className="flex flex-col items-center flex-1 min-w-0">{stepInner}</div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 4 }}
          transition={{ delay: 0.06 + index * 0.05 }}
          className="flex flex-col items-center flex-1 min-w-0"
        >
          {stepInner}
        </motion.div>
      )}
      {!isLast && (
        <div className="h-px flex-1 min-w-[4px] max-w-[10px] md:max-w-[14px] mx-0.5 bg-gradient-to-r from-indigo-500/50 to-indigo-400/20 shrink" />
      )}
    </div>
  );
}

function HirePathCard({
  path,
  index,
  active,
  isMobile,
}: {
  path: (typeof HIRE_PATHS)[number];
  index: number;
  active: boolean;
  isMobile?: boolean;
}) {
  const cls = `relative flex flex-col items-center justify-center text-center rounded-md md:rounded-lg border ${path.border} p-1 md:p-2 min-h-[36px] md:min-h-[58px] overflow-hidden cursor-pointer hover:bg-white/[0.06] transition-colors`;
  const style = {
    background: `linear-gradient(160deg, ${path.accent}18, rgba(255,255,255,0.04))`,
  };
  const inner = (
    <>
      <div
        className="absolute inset-x-0 top-0 h-[1px] md:h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${path.accent}, transparent)` }}
      />
      <span className="text-sm md:text-lg leading-none mb-0.5">{path.icon}</span>
      <span className="text-[6px] md:text-[9px] font-extrabold text-white leading-tight">{path.label}</span>
      <span className="text-[5px] md:text-[7px] text-slate-400 font-medium mt-0.5">{path.tagline}</span>
    </>
  );

  if (isMobile) {
    return (
      <button type="button" onClick={scrollToContact} className={cls} style={style}>
        {inner}
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={scrollToContact}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.96 }}
      transition={{ delay: 0.22 + index * 0.06 }}
      className={cls}
      style={style}
    >
      {inner}
    </motion.button>
  );
}

function CtaScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full w-full flex flex-col px-1.5 md:px-2.5 py-0.5 md:py-2 min-h-0 overflow-hidden"
        style={{ background: "linear-gradient(145deg,#0f0c29 0%,#1a1640 45%,#24243e 100%)" }}
      >
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: -4 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : -4 }}
          className="shrink-0 text-center"
        >
          <div className="inline-flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-[5px] md:text-[7px] font-bold text-emerald-300 uppercase tracking-wider">
              Open for Projects
            </span>
          </div>
          <h2 className="text-white font-bold text-[8px] md:text-[12px] leading-tight mt-0.5 md:mt-1">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
              Work Together?
            </span>
          </h2>
        </motion.div>

        <div className="flex-1 min-h-0 flex flex-col justify-evenly gap-0.5 md:gap-1.5 my-0.5 md:my-1.5 rounded-lg md:rounded-xl border border-white/[0.08] bg-black/25 p-1 md:p-2 overflow-hidden">
          <div className="shrink-0 flex items-start w-full px-0.5">
            {HIRE_STEPS.map((s, i) => (
              <HireStepCard
                key={s.step}
                step={s}
                index={i}
                active={active}
                isLast={i === HIRE_STEPS.length - 1}
                isMobile={isMobile}
              />
            ))}
          </div>

          <div className="shrink-0 grid grid-cols-3 gap-0.5 md:gap-1.5 w-full">
            {HIRE_PATHS.map((path, i) => (
              <HirePathCard key={path.label} path={path} index={i} active={active} isMobile={isMobile} />
            ))}
          </div>

          <div className="shrink-0 flex flex-wrap justify-center gap-0.5 md:gap-1">
            {HIRE_TRUST.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-0.5 px-1 md:px-1.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[4px] md:text-[7px] font-semibold text-slate-300"
              >
                <span className="text-[6px] md:text-[8px] leading-none opacity-90">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 4 }}
          transition={{ delay: 0.35 }}
          className="shrink-0 space-y-0.5 md:space-y-1"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full rounded-md md:rounded-lg py-1 md:py-2 text-center cursor-pointer border border-indigo-400/30 shadow-[0_4px_16px_rgba(99,102,241,0.35)] hover:brightness-110 transition-all"
            style={{ background: "linear-gradient(90deg,#4f46e5,#7c3aed,#9333ea)" }}
          >
            <span className="text-white font-extrabold text-[7px] md:text-[9px] tracking-wide">
              Start Your Project →
            </span>
          </button>
          <div className="grid grid-cols-2 gap-0.5 md:gap-1">
            <button
              type="button"
              onClick={scrollToContact}
              className="text-[5px] md:text-[7px] font-semibold text-slate-300 py-0.5 md:py-1 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              📩 &nbsp;Contact
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="text-[5px] md:text-[7px] font-semibold text-emerald-300 py-0.5 md:py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/15 transition-colors cursor-pointer"
            >
              ⚡ &nbsp;Hire Now
            </button>
          </div>
        </motion.div>
      </div>
    </SceneShell>
  );
}

/* ─── Main ─── */

export default function LaptopScreen() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const isMobile = useIsMobile();
  const scene = SCENES[sceneIdx];

  const selectScene = (index: number) => setSceneIdx(index);

  useEffect(() => {
    const id = setTimeout(() => setSceneIdx((i) => (i + 1) % SCENES.length), DURATIONS[scene]);
    return () => clearTimeout(id);
  }, [scene]);

  const renderScene = () => {
    const active = true;
    switch (scene) {
      case "code":
        return <CodeScene isMobile={isMobile} active={active} />;
      case "stats":
        return <StatsScene isMobile={isMobile} active={active} />;
      case "skills":
        return <SkillsScene isMobile={isMobile} active={active} />;
      case "services":
        return <ServicesScene isMobile={isMobile} active={active} />;
      case "cta":
        return <CtaScene isMobile={isMobile} active={active} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full min-h-0 flex flex-col overflow-hidden touch-manipulation select-none" style={{ background: "#0d1117" }}>
      <ProgressRail sceneIdx={sceneIdx} onSelect={selectScene} isMobile={isMobile} />

      <div className="relative flex-1 min-h-0 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isMobile ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="h-full w-full md:pt-4"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
