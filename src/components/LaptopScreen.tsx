import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeMute, FaVolumeUp, FaForward, FaPlay } from "react-icons/fa";
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

const INTRO_VIDEOS = [
  "/videos/good_generate_a_new_video_you.mp4",
  "/videos/generate_second_part_of_that_v.mp4",
  "/videos/good_but_in_bg_explane_using_w.mp4",
];

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
    {
      id: "startup",
      url: "https://startup-mvp.io/preview",
      badge: "Startup MVP",
      tagline: "AI SaaS Dashboard",
      accent: "from-cyan-500 via-indigo-500 to-purple-600",
      content: (
        <div className="w-full h-full flex flex-col justify-between gap-1 md:gap-1.5 p-1 md:p-2 text-left min-h-0">
          {/* Mini Web Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-1 shrink-0">
            <span className="text-[7px] sm:text-[8.5px] md:text-[10px] font-black text-cyan-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
              ⚡ NexusAI
            </span>
            <div className="flex gap-1.5 text-[5.5px] sm:text-[7px] md:text-[8px] text-slate-200 font-semibold">
              <span className="hover:text-white transition-colors cursor-pointer">Features</span>
              <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
              <span className="text-white px-1.5 py-0.5 rounded bg-cyan-500/30 text-cyan-200 font-extrabold border border-cyan-400/50 shadow-sm">
                Demo
              </span>
            </div>
          </div>

          {/* Hero Banner with Crisp White Glassmorphic Border */}
          <div className="rounded-lg bg-gradient-to-r from-slate-900/90 via-indigo-950/90 to-slate-900/90 p-1.5 md:p-2.5 border border-white/25 shadow-lg backdrop-blur-md shrink-0">
            <h4 className="text-[8px] sm:text-[9.5px] md:text-[11.5px] font-black text-white leading-tight tracking-tight">
              Next-Gen AI SaaS Platform
            </h4>
            <p className="text-[5.5px] sm:text-[7px] md:text-[8px] text-slate-300 mt-0.5 leading-tight font-medium line-clamp-1">
              Build & scale your startup product in record time with typed APIs.
            </p>
            <div className="flex items-center gap-1.5 mt-1 md:mt-1.5">
              <button
                type="button"
                className="text-[5.5px] sm:text-[7px] md:text-[8px] font-black px-2 py-0.5 rounded bg-cyan-400 text-slate-950 shadow-sm hover:bg-cyan-300 transition-all cursor-pointer shrink-0"
              >
                Launch App →
              </button>
              <span className="text-[5.5px] sm:text-[7px] md:text-[8px] text-emerald-400 font-mono font-extrabold truncate">
                14.2k Active Users
              </span>
            </div>
          </div>

          {/* Mini Dashboard Cards with Crisp White Borders */}
          <div className="grid grid-cols-2 gap-1 md:gap-1.5 shrink-0">
            <div className="p-1 md:p-2 rounded-lg bg-white/[0.04] border border-white/20 backdrop-blur-md flex flex-col justify-between hover:border-white/40 transition-colors shadow-sm">
              <span className="text-[5.5px] sm:text-[6.5px] md:text-[7.5px] font-bold text-slate-300 uppercase tracking-wider truncate">
                Monthly Revenue
              </span>
              <span className="text-[8.5px] sm:text-[10.5px] md:text-[12.5px] font-black text-emerald-400 font-mono mt-0.5">
                $48,250
              </span>
              <div className="w-full bg-emerald-500/20 h-1 md:h-1.5 rounded-full mt-1 overflow-hidden border border-emerald-400/30">
                <div className="bg-emerald-400 h-full w-[82%] shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-lg bg-white/[0.04] border border-white/20 backdrop-blur-md flex flex-col justify-between hover:border-white/40 transition-colors shadow-sm">
              <span className="text-[5.5px] sm:text-[6.5px] md:text-[7.5px] font-bold text-slate-300 uppercase tracking-wider truncate">
                Conversion Rate
              </span>
              <span className="text-[8.5px] sm:text-[10.5px] md:text-[12.5px] font-black text-cyan-400 font-mono mt-0.5">
                14.8%
              </span>
              <div className="w-full bg-cyan-500/20 h-1 md:h-1.5 rounded-full mt-1 overflow-hidden border border-cyan-400/30">
                <div className="bg-cyan-400 h-full w-[88%] shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "company",
      url: "https://company-brand.com/app",
      badge: "Company Site",
      tagline: "E-Commerce Platform",
      accent: "from-emerald-500 via-teal-500 to-sky-600",
      content: (
        <div className="w-full h-full flex flex-col justify-between gap-1 md:gap-1.5 p-1 md:p-2 text-left min-h-0">
          {/* Mini Web Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-1 shrink-0">
            <span className="text-[7px] sm:text-[8.5px] md:text-[10px] font-black text-emerald-400 font-mono flex items-center gap-1">
              🛍️ StoreX Brand
            </span>
            <span className="text-[5.5px] sm:text-[7px] md:text-[8px] text-emerald-300 font-extrabold bg-emerald-500/30 px-1.5 py-0.5 rounded border border-emerald-400/50 shadow-sm">
              Cart (3 items)
            </span>
          </div>

          {/* Product Showcase with White Glassmorphic Border */}
          <div className="rounded-lg bg-gradient-to-r from-slate-900/90 via-teal-950/90 to-slate-900/90 p-1.5 md:p-2.5 border border-white/25 shadow-lg backdrop-blur-md shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-[8px] sm:text-[9.5px] md:text-[11.5px] font-black text-white leading-tight">
                  Premium Tech Gear
                </h4>
                <span className="text-[5.5px] sm:text-[7px] md:text-[8px] text-amber-400 font-mono font-bold">
                  ★★★★★ 4.9/5 Rating
                </span>
              </div>
              <span className="text-[9px] sm:text-[11px] md:text-[13px] font-black text-emerald-400 font-mono">
                $199
              </span>
            </div>
            <div className="flex gap-1.5 mt-1.5">
              <div className="flex-1 p-1 md:p-1.5 rounded-md bg-white/[0.06] border border-white/20 text-[5.5px] sm:text-[7px] md:text-[8px] text-slate-100 font-bold flex items-center gap-1 truncate">
                <span>🎧 Headphones</span>
              </div>
              <div className="flex-1 p-1 md:p-1.5 rounded-md bg-white/[0.06] border border-white/20 text-[5.5px] sm:text-[7px] md:text-[8px] text-slate-100 font-bold flex items-center gap-1 truncate">
                <span>⌚ Smart Watch</span>
              </div>
            </div>
          </div>

          {/* Checkout Feature Pills */}
          <div className="flex items-center justify-between text-[5.5px] sm:text-[7px] md:text-[8px] text-slate-200 px-0.5 font-bold shrink-0">
            <span>🚚 Free Shipping</span>
            <span>🛡️ 2-Yr Warranty</span>
            <span>⚡ Instant Checkout</span>
          </div>
        </div>
      ),
    },
    {
      id: "portfolio",
      url: "https://enterprise-app.dev/portal",
      badge: "Enterprise App",
      tagline: "Corporate Portal",
      accent: "from-purple-500 via-indigo-500 to-blue-600",
      content: (
        <div className="w-full h-full flex flex-col justify-between gap-1 md:gap-1.5 p-1 md:p-2 text-left min-h-0">
          {/* Mini Web Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-1 shrink-0">
            <span className="text-[7px] sm:text-[8.5px] md:text-[10px] font-black text-purple-400 font-mono flex items-center gap-1">
              💼 CodeCraft Portal
            </span>
            <span className="text-[5.5px] sm:text-[7px] md:text-[8px] text-purple-300 font-mono font-extrabold bg-purple-500/30 px-1.5 py-0.5 rounded border border-purple-400/50 shadow-sm">
              Production Ready
            </span>
          </div>

          {/* Enterprise Hero with White Glassmorphic Border */}
          <div className="rounded-lg bg-gradient-to-r from-slate-900/90 via-indigo-950/90 to-slate-900/90 p-1.5 md:p-2.5 border border-white/25 shadow-lg backdrop-blur-md shrink-0">
            <h4 className="text-[8px] sm:text-[9.5px] md:text-[11.5px] font-black text-white leading-tight">
              Engineering Excellence
            </h4>
            <p className="text-[5.5px] sm:text-[7px] md:text-[8px] text-purple-200 mt-0.5 font-medium line-clamp-1">
              High-performance web apps built for startup & enterprise scale.
            </p>
            <div className="grid grid-cols-3 gap-1 mt-1.5 text-center">
              <div className="p-1 rounded-md bg-white/[0.06] border border-white/20">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black text-cyan-300 block font-mono">30+</span>
                <span className="text-[5px] sm:text-[6.5px] md:text-[7.5px] text-slate-200 font-semibold">Shipped</span>
              </div>
              <div className="p-1 rounded-md bg-white/[0.06] border border-white/20">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black text-emerald-300 block font-mono">100%</span>
                <span className="text-[5px] sm:text-[6.5px] md:text-[7.5px] text-slate-200 font-semibold">On-Time</span>
              </div>
              <div className="p-1 rounded-md bg-white/[0.06] border border-white/20">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black text-purple-300 block font-mono">1000+</span>
                <span className="text-[5px] sm:text-[6.5px] md:text-[7.5px] text-slate-200 font-semibold">DSA Solved</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % previews.length), 3200);
    return () => clearInterval(id);
  }, [previews.length]);

  const current = previews[idx];

  return (
    <div
      className="flex flex-col rounded-xl md:rounded-2xl border border-white/20 overflow-hidden h-full m-0.5 ml-0 mr-1 my-0.5 md:m-2 md:ml-0 shadow-2xl min-h-0"
      style={{ background: "linear-gradient(160deg,#070b16,#0e1526)" }}
    >
      {/* Browser Chrome Bar */}
      <div className="flex items-center gap-1.5 px-2 py-1 md:px-3 md:py-1.5 border-b border-white/20 bg-[#0b1021]/90 shrink-0">
        <div className="flex gap-1 shrink-0">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm" />
          <span className="w-2 h-2 rounded-full bg-amber-500 shadow-sm" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm" />
        </div>
        <div className="flex-1 flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-[6px] sm:text-[7.5px] md:text-[9px] text-slate-100 font-mono truncate mx-1 border border-white/20 shadow-inner">
          <span className="text-emerald-400">🔒</span>
          <span className="truncate">{current.url}</span>
        </div>
        <span className="text-[6px] sm:text-[7.5px] md:text-[9px] text-emerald-400 font-mono font-black shrink-0 flex items-center gap-1">
          ● Live
        </span>
      </div>

      {/* Dynamic Website UI Preview Card */}
      <div className="flex-1 p-1 md:p-1.5 flex flex-col justify-between min-h-0 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full flex flex-col justify-between min-h-0"
          >
            {current.content}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pill Selector */}
        <div className="flex items-center justify-between border-t border-white/15 pt-1 mt-0.5 px-1 md:px-2 shrink-0">
          <span className="text-[6px] sm:text-[7.5px] md:text-[9px] text-slate-200 font-mono font-bold">
            {current.badge}
          </span>
          <div className="flex gap-1">
            {previews.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setIdx(i)}
                className={`h-1 md:h-1.5 rounded-full transition-all ${i === idx ? "w-3.5 md:w-5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "w-1 md:w-1.5 bg-white/30"}`}
              />
            ))}
          </div>
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
          <div className="flex-1 min-w-0">
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
  return (
    <div className="flex flex-1 items-center min-w-0">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
        transition={{ delay: 0.08 + index * 0.07, duration: 0.4 }}
        className="flex flex-col items-center flex-1 min-w-0 gap-1"
      >
        {/* Icon circle */}
        <div className="relative flex items-center justify-center">
          <div
            className="flex h-6 w-6 md:h-10 md:w-10 items-center justify-center rounded-full border border-indigo-400/50 bg-indigo-500/15"
            style={{ boxShadow: "0 0 16px rgba(99,102,241,0.4)" }}
          >
            <span className="text-[10px] md:text-lg leading-none">{step.icon}</span>
          </div>
          <span
            className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 flex h-3 w-3 md:h-4.5 md:w-4.5 items-center justify-center rounded-full bg-[#6366f1] text-[5px] md:text-[8px] font-black text-white border border-white/20"
            style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)" }}
          >
            {step.step}
          </span>
        </div>
        <span className="text-[6px] md:text-[10px] font-black text-white leading-tight text-center">{step.title}</span>
        <span className="hidden md:block text-[7px] text-slate-300 text-center leading-tight font-medium">{step.desc}</span>
      </motion.div>
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ delay: 0.2 + index * 0.07, duration: 0.4 }}
          className="h-[2px] flex-1 min-w-[8px] md:min-w-[14px] mx-0.5 origin-left rounded-full"
          style={{ background: "linear-gradient(90deg,#6366f1,#7c3aed80)" }}
        />
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
  const inner = (
    <>
      {/* Top color bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] md:h-[4px] rounded-t-xl"
        style={{ background: `linear-gradient(90deg, transparent, ${path.accent}, transparent)` }}
      />
      {/* Glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${path.accent}25, transparent 70%)` }}
      />
      <span className="text-xl md:text-3xl leading-none mb-1 relative z-10">{path.icon}</span>
      <span className="text-[8px] md:text-[13px] font-black text-white leading-tight relative z-10">{path.label}</span>
      <span
        className="text-[6px] md:text-[9px] font-bold mt-0.5 relative z-10"
        style={{ color: path.accent }}
      >
        {path.tagline}
      </span>
      <div className="flex flex-col gap-0.5 mt-1 relative z-10">
        {path.perks.map((perk) => (
          <span key={perk} className="text-[5px] md:text-[8px] text-slate-200 font-medium flex items-center gap-1 justify-center">
            <span className="text-[6px] md:text-[8px] font-extrabold" style={{ color: path.accent }}>✓</span> {perk}
          </span>
        ))}
      </div>
    </>
  );

  const cls = `group relative flex flex-col items-center justify-center text-center rounded-lg md:rounded-2xl border ${path.border} p-2 md:p-3.5 overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/40 shadow-lg`;
  const style = { background: `linear-gradient(160deg, ${path.accent}18, rgba(10,14,28,0.9))` };

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
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10, scale: active ? 1 : 0.95 }}
      transition={{ delay: 0.25 + index * 0.08, type: "spring", stiffness: 260, damping: 22 }}
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
        className="h-full w-full flex flex-col gap-1.5 md:gap-3 px-3 md:px-5 py-2 md:py-4 min-h-0 overflow-hidden justify-between"
        style={{ background: "linear-gradient(145deg,#06040d 0%,#0c0924 50%,#150c33 100%)" }}
      >
        {/* Header */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : -8 }}
          transition={{ duration: 0.4 }}
          className="shrink-0 flex flex-col items-center gap-1"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 md:px-3.5 py-0.5 md:py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
              style={{ boxShadow: "0 0 8px rgba(52,211,153,0.9)" }}
            />
            <span className="text-[6px] md:text-[9px] font-black text-emerald-300 uppercase tracking-widest">
              Open for Projects
            </span>
          </div>
          <h2 className="text-white font-black text-[11px] md:text-[17px] leading-tight text-center tracking-tight">
            Ready to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#00D4FF,#7C3AED,#ec4899)" }}
            >
              Work Together?
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="shrink-0 flex items-start w-full px-1 md:px-3">
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

        {/* Path cards */}
        <div className="shrink-0 grid grid-cols-3 gap-1.5 md:gap-3 w-full">
          {HIRE_PATHS.map((path, i) => (
            <HirePathCard key={path.label} path={path} index={i} active={active} isMobile={isMobile} />
          ))}
        </div>

        {/* Trust pills */}
        <motion.div
          initial={isMobile ? false : { opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 0.45 }}
          className="shrink-0 flex flex-wrap justify-center gap-1 md:gap-1.5"
        >
          {HIRE_TRUST.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1 px-2 md:px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[5px] md:text-[8px] font-bold text-slate-200 shadow-sm"
            >
              <span className="text-[7px] md:text-[10px]">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
          transition={{ delay: 0.5 }}
          className="shrink-0 flex flex-col gap-1 md:gap-2"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="relative w-full rounded-lg md:rounded-xl py-1.5 md:py-3 text-center cursor-pointer overflow-hidden group shadow-lg"
            style={{
              background: "linear-gradient(90deg,#00D4FF,#6366f1,#a855f7)",
              boxShadow: "0 4px 25px rgba(6,182,212,0.45)",
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)" }}
            />
            <span className="relative text-slate-950 font-black text-[8px] md:text-[13px] tracking-wide uppercase">
              Start Your Project →
            </span>
          </button>
          <div className="grid grid-cols-2 gap-1 md:gap-2">
            <button
              type="button"
              onClick={scrollToContact}
              className="text-[6px] md:text-[9px] font-bold text-slate-200 py-1 md:py-2 rounded-md md:rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 transition-all cursor-pointer"
            >
              📩 Contact Me
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="text-[6px] md:text-[9px] font-bold text-emerald-300 py-1 md:py-2 rounded-md md:rounded-lg bg-emerald-500/20 border border-emerald-400/40 hover:bg-emerald-500/30 transition-all cursor-pointer"
              style={{ boxShadow: "0 0 15px rgba(52,211,153,0.25)" }}
            >
              ⚡ Hire Now
            </button>
          </div>
        </motion.div>
      </div>
    </SceneShell>
  );
}


/* ─── Main ─── */

interface LaptopScreenProps {
  speechFinished?: boolean;
}

export default function LaptopScreen({ speechFinished = false }: LaptopScreenProps) {
  const [hasSpeechTriggered, setHasSpeechTriggered] = useState(false);
  const [isPlayingVideos, setIsPlayingVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [sceneIdx, setSceneIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const isMobile = useIsMobile();
  const scene = SCENES[sceneIdx];

  // Start intro videos automatically once welcome speech finishes
  useEffect(() => {
    if (speechFinished && !hasSpeechTriggered) {
      setHasSpeechTriggered(true);
      setIsPlayingVideos(true);
      setVideoIndex(0);
    }
  }, [speechFinished, hasSpeechTriggered]);

  // Instantly play current video and pause/preload others for zero-lag switching
  useEffect(() => {
    if (!isPlayingVideos) return;
    INTRO_VIDEOS.forEach((_, idx) => {
      const v = videoRefs.current[idx];
      if (!v) return;
      v.muted = isMuted;
      if (idx === videoIndex) {
        v.currentTime = 0;
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsMuted(true);
            v.muted = true;
            v.play().catch(() => { });
          });
        }
      } else {
        v.pause();
      }
    });
  }, [videoIndex, isPlayingVideos, isMuted]);

  // Auto transition scenes ONLY when not playing intro videos
  useEffect(() => {
    if (isPlayingVideos) return;
    const id = setTimeout(() => {
      setDirection(1);
      setSceneIdx((i) => (i + 1) % SCENES.length);
    }, DURATIONS[scene]);
    return () => clearTimeout(id);
  }, [scene, isPlayingVideos]);

  const handleNextVideo = () => {
    if (videoIndex < INTRO_VIDEOS.length - 1) {
      setVideoIndex((prev) => prev + 1);
    } else {
      setIsPlayingVideos(false);
    }
  };

  const skipVideos = () => {
    setIsPlayingVideos(false);
  };

  const replayVideos = () => {
    setVideoIndex(0);
    setIsPlayingVideos(true);
  };

  const goToScene = (index: number) => {
    setDirection(index >= sceneIdx ? 1 : -1);
    setSceneIdx(index);
  };

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

  // If intro videos are active, render the video player with preloaded videos
  if (isPlayingVideos && INTRO_VIDEOS.length > 0) {
    return (
      <div
        className="relative w-full h-full min-h-0 flex flex-col items-center justify-center bg-black overflow-hidden select-none"
      >
        {/* Header Overlay Controls */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-2 md:px-3 py-1.5 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[9px] md:text-[11px] font-semibold text-white/90 font-mono tracking-wide">
              Intro {videoIndex + 1}/{INTRO_VIDEOS.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[8px] md:text-[10px] font-medium backdrop-blur-md transition-colors"
              title={isMuted ? "Unmute sound" : "Mute sound"}
            >
              {isMuted ? <FaVolumeMute className="text-red-400 text-[9px]" /> : <FaVolumeUp className="text-emerald-400 text-[9px]" />}
              <span>{isMuted ? "Muted" : "Sound On"}</span>
            </button>
            <button
              type="button"
              onClick={skipVideos}
              className="flex items-center gap-1 px-2 py-0.5 md:px-2.5 md:py-1 rounded bg-indigo-600/90 hover:bg-indigo-600 text-white text-[8px] md:text-[10px] font-semibold backdrop-blur-md transition-all hover:scale-105"
            >
              <span>Skip</span>
              <FaForward className="text-[7px] md:text-[8px]" />
            </button>
          </div>
        </div>

        {/* Video Stage - All 3 videos preloaded in DOM for zero-lag instant switching */}
        <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
          {INTRO_VIDEOS.map((src, idx) => (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={src}
              preload="auto"
              muted={isMuted}
              playsInline
              onEnded={() => {
                if (idx === videoIndex) {
                  handleNextVideo();
                }
              }}
              onError={() => {
                if (idx === videoIndex) {
                  handleNextVideo();
                }
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${idx === videoIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            />
          ))}
        </div>

        {/* Progress Bar Indicator */}
        <div className="absolute bottom-1.5 inset-x-3 z-20 flex items-center justify-center gap-1.5">
          {INTRO_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setVideoIndex(idx)}
              className="focus:outline-none py-1"
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${idx === videoIndex
                  ? "w-6 md:w-8 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.9)]"
                  : idx < videoIndex
                    ? "w-2.5 md:w-3 bg-white/60"
                    : "w-2.5 md:w-3 bg-white/20 hover:bg-white/40"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Standard dynamic laptop screen presentation
  return (
    <div
      className="relative w-full h-full min-h-0 flex flex-col overflow-hidden touch-manipulation select-none ring-1 ring-inset ring-white/[0.06]"
      style={{ background: "#0d1117" }}
    >
      {/* Scene area */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={scene}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 40, scale: 0.97 }),
              center: { opacity: 1, x: 0, scale: 1 },
              exit: (d: number) => ({ opacity: 0, x: d * -40, scale: 0.97 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            className="h-full w-full"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Minimal dot indicator & replay intro button */}
      <div className="shrink-0 flex items-center justify-between px-3 py-1 bg-[#0d1117]/90 border-t border-white/5">
        <button
          type="button"
          onClick={replayVideos}
          className="flex items-center gap-1 text-[7px] md:text-[9px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          title="Replay intro videos"
        >
          <FaPlay className="text-[6px] md:text-[7px]" />
          <span>Intro Video</span>
        </button>

        <div className="flex items-center gap-1.5">
          {SCENES.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => goToScene(i)}
              aria-label={SCENE_LABELS[key]}
              className="focus:outline-none"
            >
              <motion.span
                animate={{
                  width: sceneIdx === i ? 16 : 5,
                  backgroundColor: sceneIdx === i ? "#6366f1" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="block h-[5px] rounded-full"
                style={{ display: "block" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
