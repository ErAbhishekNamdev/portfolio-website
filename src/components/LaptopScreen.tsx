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

const MOBILE_CODE_LINES = [
  { text: "const ClientProject = () => (", color: "#82aaff" },
  { text: "  <ProductDelivery", color: "#f78c6c" },
  { text: '    client="Your Brand"', color: "#c3e88d" },
  { text: '    startups="MVP & Launch"', color: "#c3e88d" },
  { text: '    companies="Web Products"', color: "#c3e88d" },
  { text: '    hr="Team-Ready Dev"', color: "#c3e88d" },
  { text: "  />", color: "#f78c6c" },
  { text: ");", color: "#82aaff" },
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
    <div className={`relative h-full min-h-0 flex flex-col overflow-hidden ${className}`}>
      <BackgroundEffects />
      <div className="relative z-10 flex-1 min-h-0 flex flex-col max-md:overflow-y-auto max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </div>
  );
}

function ProgressRail({ sceneIdx, onSelect, isMobile }: { sceneIdx: number; onSelect: (i: number) => void; isMobile: boolean }) {
  return (
    <div className={`absolute left-0 right-0 z-30 flex items-center justify-center gap-0 px-3 ${isMobile ? "top-1" : "top-2"}`}>
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
                className={`rounded-full transition-all duration-300 ${
                  sceneIdx === i
                    ? "h-2 w-2 max-md:h-2.5 max-md:w-2.5 bg-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    : sceneIdx > i
                      ? "h-1.5 w-1.5 max-md:h-2 max-md:w-2 bg-[#6366f1]/60"
                      : "h-1.5 w-1.5 max-md:h-2 max-md:w-2 bg-white/25 group-hover:bg-white/40"
                }`}
              />
              {!isMobile && (
                <span className={`text-[7px] font-semibold uppercase tracking-wider ${sceneIdx === i ? "text-indigo-300" : "text-white/30"}`}>
                  {SCENE_LABELS[key]}
                </span>
              )}
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
      <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-5 border-t border-white/10 bg-[#0d1117]/98 backdrop-blur-md">
        {SCENES.map((key, i) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show ${SCENE_LABELS[key]}`}
            aria-current={sceneIdx === i ? "true" : undefined}
            className={`min-h-[36px] py-2 px-0.5 text-[7px] font-bold uppercase tracking-wide transition-all active:scale-[0.97] touch-manipulation ${
              sceneIdx === i
                ? "text-[#a5b4fc] bg-[#6366f1]/20 border-t-2 border-[#6366f1]"
                : "text-[#8b949e] border-t-2 border-transparent"
            }`}
          >
            {SCENE_LABELS[key]}
          </button>
        ))}
      </div>
    );
  }

  return null;
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
      className={`flex flex-col rounded-md border border-white/10 overflow-hidden ${isMobile ? "mt-1.5 mx-2 mb-1" : "h-full m-2 ml-0"}`}
      style={{ background: "linear-gradient(160deg,#0f172a,#1e1b4b)" }}
    >
      <div className="flex items-center gap-1 px-2 py-1 border-b border-white/10 bg-black/30 shrink-0">
        <span className="text-[6px] max-md:text-[7px] text-slate-400 font-mono">Client Preview</span>
        <span className="ml-auto text-[6px] max-md:text-[7px] text-emerald-400">● Live</span>
      </div>
      <div className="flex-1 p-2 max-md:p-1.5 flex flex-col items-center justify-center gap-1 min-h-[60px] max-md:min-h-[56px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="text-lg max-md:text-base">{current.emoji}</div>
            <div className="text-[8px] max-md:text-[9px] font-bold text-white text-center">{current.label}</div>
            <div className="text-[7px] max-md:text-[8px] text-indigo-300">{current.sub}</div>
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
  const lines = isMobile ? MOBILE_CODE_LINES : CODE_LINES;
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
      <div className="h-full flex flex-col pt-6 max-md:pt-5" style={{ background: "#0d1117" }}>
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 max-md:px-2 max-md:py-1 border-b shrink-0"
          style={{ background: "#161b22", borderColor: "#30363d" }}
        >
          <span className="flex gap-1.5 max-md:gap-1">
            <span className="h-2.5 w-2.5 max-md:h-2 max-md:w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 max-md:h-2 max-md:w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 max-md:h-2 max-md:w-2 rounded-full bg-[#28c840]" />
          </span>
          <span className="text-[10px] max-md:text-[8px] text-[#8b949e] ml-1 font-mono truncate">ClientProject.tsx</span>
          <span className="ml-auto flex items-center gap-1 text-[8px] max-md:text-[7px] text-emerald-400 font-semibold shrink-0">
            <span className="animate-pulse">●</span>
            <span className="max-md:hidden">Client Ready</span>
            <span className="md:hidden">Ready</span>
          </span>
        </div>

        {/* Split: Code | Preview */}
        <div className={`flex-1 min-h-0 flex ${isMobile ? "flex-col" : "flex-row"}`}>
          <div
            ref={bodyRef}
            className={`min-h-0 overflow-hidden max-md:overflow-y-auto font-mono text-[10px] max-md:text-[8px] leading-[1.65] max-md:leading-[1.5] px-3 py-2 max-md:px-2 max-md:py-1.5 ${isMobile ? "flex-none" : "flex-1 border-r border-[#30363d]"}`}
          >
            <div className="text-[#c792ea] mb-1 max-md:text-[7px]">import React from "react";</div>
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-md:break-all"
                style={{ color: line.color || "#8b949e", whiteSpace: isMobile ? "pre-wrap" : "pre" }}
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-[5px] h-[12px] max-md:h-[10px] bg-[#58a6ff] animate-pulse" />
            )}
          </div>
          {!isMobile && (
            <div className="flex-1 min-w-0">
              <LivePreview isMobile={false} />
            </div>
          )}
        </div>

        {isMobile && visibleLines >= lines.length && <LivePreview isMobile />}

        {/* Build badges */}
        <AnimatePresence>
          {showBadges && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-1 px-2 py-1.5 max-md:py-1 border-t shrink-0"
              style={{ background: "#161b22", borderColor: "#30363d" }}
            >
              {BUILD_BADGES.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-0.5 text-[7px] max-md:text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10"
                  style={{ color: b.color }}
                >
                  {b.icon} {b.text}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isMobile && (
          <div className="flex items-center justify-between px-3 py-1 text-[8px] font-mono shrink-0" style={{ background: "#1f6feb", color: "#fff" }}>
            <span>⚡ TypeScript React</span>
            <span>Ln {visibleLines}</span>
            <span>UTF-8</span>
          </div>
        )}
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
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.12 }}
        className="flex items-center gap-3 py-2.5 border-b border-white/10 last:border-0"
      >
        <span className="text-2xl shrink-0">{stat.icon}</span>
        <div>
          <div className="text-xl font-extrabold text-white leading-none">{display}</div>
          <div className="text-[10px] text-slate-400 mt-0.5 font-medium">{stat.mobileLabel}</div>
        </div>
      </motion.div>
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
        className="h-full flex flex-col items-center justify-center gap-3 p-4 max-md:p-3 pt-8 max-md:pt-7"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] max-md:text-[10px] font-semibold tracking-widest text-[#7c83e3] uppercase shrink-0"
        >
          Trusted by Startups & Companies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold text-[14px] max-md:text-[12px] text-center leading-tight shrink-0 px-1"
        >
          I Help Teams Ship
          <br />
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
            Products That Get Hired & Funded
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-1 justify-center shrink-0"
        >
          {AUDIENCE_PILLS.map((pill) => (
            <span
              key={pill}
              className="text-[6px] max-md:text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {isMobile ? (
          <div className="w-full px-1">
            {STATS.map((s, i) => (
              <StatCard key={s.label} stat={s} isMobile active={active} index={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 w-full">
            {STATS.map((s, i) => (
              <StatCard key={s.label} stat={s} isMobile={false} active={active} index={i} />
            ))}
          </div>
        )}
      </div>
    </SceneShell>
  );
}

function StackTileCard({ tile, index, active }: { tile: StackTile; index: number; active: boolean }) {
  const Icon = tile.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.85 }}
      transition={{ delay: 0.1 + index * 0.04, type: "spring", stiffness: 260, damping: 22 }}
      className="h-full w-full min-h-0 flex flex-col items-center justify-center text-center rounded-xl border border-white/15 backdrop-blur-sm overflow-hidden py-1 px-0.5 max-md:py-1.5"
      style={{
        background: `linear-gradient(180deg, ${tile.color}20, rgba(255,255,255,0.07))`,
        boxShadow: `inset 0 1px 0 ${tile.color}35`,
      }}
    >
      <div
        className="flex h-7 w-7 max-md:h-8 max-md:w-8 items-center justify-center rounded-lg mb-0.5 max-md:mb-1"
        style={{
          color: tile.color,
          background: `${tile.color}22`,
          border: `1px solid ${tile.color}45`,
          boxShadow: `0 0 12px ${tile.color}35`,
        }}
      >
        <Icon className="text-sm max-md:text-base" />
      </div>
      <span className="text-[9px] max-md:text-[10px] font-extrabold text-white leading-tight px-0.5 truncate w-full">
        {tile.name}
      </span>
      <span className="text-[7px] max-md:text-[8px] text-slate-300 mt-0.5 uppercase tracking-wide font-semibold">
        {tile.category}
      </span>
    </motion.div>
  );
}

function SkillsScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full flex flex-col items-center justify-center gap-1.5 max-md:gap-2 p-4 max-md:p-3 pt-8 max-md:pt-7 w-full min-h-0"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : -8 }}
          className="text-[11px] max-md:text-[10px] font-semibold tracking-widest text-[#a5b4fc] uppercase shrink-0 text-center"
        >
          Frontend Developer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 }}
          transition={{ delay: 0.08 }}
          className="text-white font-bold text-[14px] max-md:text-[12px] text-center leading-tight shrink-0 px-1"
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 0.12 }}
          className="flex flex-wrap gap-1 justify-center shrink-0"
        >
          {STACK_HIGHLIGHTS.map((h) => (
            <span
              key={h.label}
              className="text-[8px] max-md:text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-slate-200"
            >
              {h.icon} {h.label}
            </span>
          ))}
        </motion.div>

        <div
          className={`w-full flex-1 min-h-0 grid gap-1.5 max-md:gap-2 auto-rows-fr ${
            isMobile ? "grid-cols-4 grid-rows-5" : "grid-cols-6 grid-rows-3"
          }`}
        >
          {STACK_TILES.map((tile, i) => (
            <StackTileCard key={tile.name} tile={tile} index={i} active={active} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-1 justify-center shrink-0 w-full"
        >
          {FRONTEND_DELIVERABLES.map((item) => (
            <span
              key={item}
              className="text-[8px] max-md:text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-slate-200"
            >
              {item}
            </span>
          ))}
        </motion.div>
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.88 }}
      transition={{ delay: 0.1 + index * 0.06, type: "spring", stiffness: 260, damping: 22 }}
      className={`h-full w-full min-h-0 flex flex-col items-center justify-center text-center rounded-xl border ${item.border} backdrop-blur-sm overflow-hidden py-1.5 px-1 max-md:py-2 max-md:px-1.5`}
      style={{
        background: `linear-gradient(180deg, ${item.accent}22, rgba(255,255,255,0.07))`,
        boxShadow: `inset 0 1px 0 ${item.accent}35`,
      }}
    >
      <div className={`${isMobile ? "text-2xl" : "text-xl"} mb-1 leading-none`}>{item.icon}</div>
      <h3 className="text-[9px] max-md:text-[10px] font-extrabold text-white leading-tight px-0.5">
        {item.title}
      </h3>
      <p className="text-[7px] max-md:text-[8px] text-slate-300 mt-0.5 leading-snug line-clamp-2 px-0.5 font-medium">
        {item.desc}
      </p>
      <div className="flex flex-wrap gap-0.5 justify-center mt-1 max-md:mt-1.5 px-0.5">
        {item.features.map((f) => (
          <span
            key={f}
            className="text-[6px] max-md:text-[7px] font-semibold px-1.5 py-0.5 rounded-full bg-black/40 border border-white/15 text-slate-200 leading-none"
          >
            {f}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ServicesScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full flex flex-col items-center justify-center gap-1.5 max-md:gap-2 p-4 max-md:p-3 pt-8 max-md:pt-7 w-full min-h-0"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : -8 }}
          className="text-[11px] max-md:text-[10px] font-semibold tracking-widest text-[#a5b4fc] uppercase shrink-0 text-center"
        >
          What I Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 }}
          transition={{ delay: 0.08 }}
          className="text-white font-bold text-[14px] max-md:text-[12px] text-center leading-tight shrink-0 px-1"
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">
            Services & Solutions
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 0.12 }}
          className="flex flex-wrap gap-1 justify-center shrink-0"
        >
          {["🌐 Websites", "📱 Mobile Apps", "🎨 UI Design", "💻 Development"].map((tag) => (
            <span
              key={tag}
              className="text-[8px] max-md:text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-slate-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div
          className={`w-full flex-1 min-h-0 grid gap-1.5 max-md:gap-2 ${
            isMobile ? "grid-cols-2 grid-rows-4 auto-rows-fr" : "grid-cols-4 grid-rows-2 auto-rows-fr"
          }`}
        >
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
  compact,
}: {
  step: (typeof HIRE_STEPS)[number];
  index: number;
  active: boolean;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
      transition={{ delay: 0.08 + index * 0.06 }}
      className="flex flex-col items-center text-center min-w-0"
    >
      <div
        className={`flex items-center justify-center rounded-full border-2 border-indigo-400/60 bg-[#0f0c29] shrink-0 ${
          compact ? "h-6 w-6 text-xs mb-0.5" : "h-8 w-8 text-sm mb-1"
        }`}
      >
        {step.icon}
      </div>
      <span className={`font-bold text-indigo-300 ${compact ? "text-[6px]" : "text-[7px] max-md:text-[8px]"}`}>
        {step.step}
      </span>
      <span
        className={`font-extrabold text-white leading-tight mt-0.5 ${
          compact ? "text-[7px] line-clamp-1" : "text-[8px] max-md:text-[9px]"
        }`}
      >
        {step.title}
      </span>
      {!compact && (
        <span className="text-[6px] max-md:text-[7px] text-slate-400 leading-snug mt-0.5 px-0.5 line-clamp-2 hidden md:block">
          {step.desc}
        </span>
      )}
    </motion.div>
  );
}

function HirePathCard({
  path,
  index,
  active,
  compact,
}: {
  path: (typeof HIRE_PATHS)[number];
  index: number;
  active: boolean;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
      transition={{ delay: 0.3 + index * 0.06 }}
      className={`flex flex-col items-center text-center rounded-xl border ${path.border} shrink-0 overflow-hidden ${
        compact ? "p-1.5" : "p-2 max-md:p-2.5"
      }`}
      style={{ background: `linear-gradient(180deg, ${path.accent}20, rgba(255,255,255,0.06))` }}
    >
      <span className={`leading-none mb-0.5 ${compact ? "text-lg" : "text-xl max-md:text-2xl"}`}>{path.icon}</span>
      <span className={`font-extrabold text-white leading-tight ${compact ? "text-[8px]" : "text-[9px] max-md:text-[10px]"}`}>
        {path.label}
      </span>
      <span className={`text-slate-300 font-medium ${compact ? "text-[6px] mt-0.5" : "text-[7px] max-md:text-[8px] mt-0.5"}`}>
        {path.tagline}
      </span>
      <div className={`w-full ${compact ? "mt-1 space-y-0" : "mt-1.5 space-y-0.5"}`}>
        {path.perks.map((perk) => (
          <span
            key={perk}
            className={`block text-slate-200 font-semibold leading-tight ${
              compact ? "text-[5px] line-clamp-1" : "text-[6px] max-md:text-[7px]"
            }`}
          >
            ✓ {perk}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CtaScene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  return (
    <SceneShell>
      <div
        className="h-full flex flex-col pt-8 max-md:pt-7 pb-1 px-3 max-md:px-2 min-h-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          className="shrink-0 text-center mb-1.5 max-md:mb-2"
        >
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 mb-1">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-[7px] max-md:text-[8px] font-bold text-emerald-300 uppercase tracking-wide">
              Available for Hire
            </span>
          </div>
          <h2 className="text-white font-bold text-[13px] max-md:text-[12px] leading-tight">
            How to{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">Hire Me</span>
          </h2>
          <p className="text-[7px] max-md:text-[8px] text-slate-300 mt-0.5">Simple process · Great results</p>
        </motion.div>

        {/* Body — scrolls only if needed, no overlap */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden flex flex-col gap-2 max-md:gap-2.5 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
          {/* 4-step process — always 4 columns, one row */}
          <div className="shrink-0 relative">
            <div className="absolute top-[12px] max-md:top-[10px] left-[8%] right-[8%] h-px bg-indigo-500/40 z-0" />
            <div className="relative z-[1] grid grid-cols-4 gap-1 w-full">
              {HIRE_STEPS.map((s, i) => (
                <HireStepCard key={s.step} step={s} index={i} active={active} compact={isMobile} />
              ))}
            </div>
          </div>

          {/* Hire options — 3 equal columns, auto height */}
          <div className="shrink-0 grid grid-cols-3 gap-1.5 max-md:gap-2 w-full">
            {HIRE_PATHS.map((path, i) => (
              <HirePathCard key={path.label} path={path} index={i} active={active} compact={isMobile} />
            ))}
          </div>

          {/* Trust pills — single row, no overlap */}
          <div className="shrink-0 grid grid-cols-4 gap-1 w-full rounded-lg border border-white/10 bg-white/[0.05] py-1.5 max-md:py-2">
            {HIRE_TRUST.map((t) => (
              <div key={t.label} className="flex flex-col items-center min-w-0 px-0.5">
                <span className="text-sm max-md:text-base leading-none">{t.icon}</span>
                <span className="text-[6px] max-md:text-[7px] font-bold text-slate-200 mt-0.5 text-center leading-tight">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — pinned bottom, never overlaps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="shrink-0 pt-1.5 space-y-1"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full rounded-xl py-2 max-md:py-2.5 text-center border border-indigo-400/40 cursor-pointer"
            style={{ background: "linear-gradient(90deg,#4f46e5,#7c3aed,#a855f7)" }}
          >
            <span className="text-white font-extrabold text-[9px] max-md:text-[10px] block">
              Let&apos;s Build Your Website →
            </span>
            <span className="text-white/75 text-[6px] max-md:text-[7px] block mt-0.5">
              Freelance · Contract · Full-Time
            </span>
          </button>
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={scrollToContact}
              className="text-[7px] max-md:text-[8px] font-bold text-slate-100 py-1.5 rounded-lg bg-white/8 border border-white/15 cursor-pointer"
            >
              📩 Contact Me
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="text-[7px] max-md:text-[8px] font-bold text-emerald-200 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 cursor-pointer"
            >
              ⚡ Hire Me Now
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
    <div className="relative w-full h-full overflow-hidden touch-manipulation select-none" style={{ background: "#0d1117" }}>
      <ProgressRail sceneIdx={sceneIdx} onSelect={selectScene} isMobile={isMobile} />
      <SceneNav sceneIdx={sceneIdx} onSelect={selectScene} variant="mobile" />

      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 z-0 max-md:bottom-9 md:pt-4"
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
