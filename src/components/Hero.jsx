import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaDownload,
  FaPhoneAlt,
  FaWhatsapp,
  FaCommentDots,
  FaTimes,
  FaRobot,
} from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import LaptopScreen from "./LaptopScreen";
import naukriIcon from "../assets/image copy 2.png";

const BADGE_MESSAGES = [
  "Available for Frontend Collaborations",
  "Available for Freelance Projects",
  "Ready for React & Next.js Work",
  'Building High-Performance Web Apps',
  "Open to New Opportunities",
  "Ready for React & Next.js Work",
];

const ROLE_LINES = [
  "Frontend Developer",
  "React & Next.js Expert",
  "Website Designer",
  "Web App Builder",
  "Freelance Developer",
];

const LONGEST_ROLE = ROLE_LINES.reduce((a, b) => (a.length > b.length ? a : b));

function useTyping(lines) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState("typing");

  useEffect(() => {
    let id;
    const current = lines[index];
    if (stage === "typing") {
      if (text.length < current.length)
        id = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      else id = setTimeout(() => setStage("pause"), 1100);
    } else if (stage === "pause") {
      id = setTimeout(() => setStage("deleting"), 1000);
    } else {
      if (text.length > 0)
        id = setTimeout(() => setText(current.slice(0, text.length - 1)), 45);
      else {
        setIndex((i) => (i + 1) % lines.length);
        setStage("typing");
      }
    }
    return () => clearTimeout(id);
  }, [text, index, stage, lines]);

  return text;
}



const SOCIALS = [
  {
    icon: <FaGithub />,
    href: "https://github.com/ErAbhishekNamdev",
    label: "GitHub",
    bg: "#1c1c1e",
    border: "rgba(255,255,255,0.15)",
    hoverBorder: "rgba(255,255,255,0.4)",
    glow: "rgba(255,255,255,0.18)",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abhishek-namdev-software-engineer/",
    label: "LinkedIn",
    bg: "#0A66C2",
    border: "rgba(10,102,194,0.5)",
    hoverBorder: "rgba(10,102,194,0.9)",
    glow: "rgba(10,102,194,0.45)",
  },
  {
    icon: <FaTwitter />,
    href: "https://x.com/Abhishekna78501",
    label: "Twitter / X",
    bg: "#000000",
    border: "rgba(255,255,255,0.12)",
    hoverBorder: "rgba(255,255,255,0.35)",
    glow: "rgba(255,255,255,0.15)",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/917024073871",
    label: "WhatsApp",
    bg: "#25D366",
    border: "rgba(37,211,102,0.45)",
    hoverBorder: "rgba(37,211,102,0.9)",
    glow: "rgba(37,211,102,0.45)",
  },
  {
    icon: <img src={naukriIcon} alt="Naukri" className="w-full h-full object-cover rounded-xl" />,
    href: "https://www.naukri.com/mnjuser/profile",
    label: "Naukri",
    bg: "transparent",
    border: "rgba(37,99,235,0.4)",
    hoverBorder: "rgba(37,99,235,0.9)",
    glow: "rgba(37,99,235,0.5)",
    isImage: true,
  },
];

const AVATAR_COLORS = ["#6366f1", "#7c3aed", "#c026d3", "#ec4899"];
const AVATAR_INITIALS = ["AN", "RS", "KP", "MV"];

function StatusBadge({ dark, badgeText }) {
  return (
    <div className="fixed top-[72px] md:top-20 left-1/2 -translate-x-1/2 z-[9999] flex justify-center pointer-events-none max-md:px-4 max-md:w-full md:w-auto">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={`pointer-events-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold tracking-wide border backdrop-blur-md transition-all duration-150 max-md:max-w-[calc(100vw-2rem)] max-md:px-3 max-md:py-1.5 max-md:text-[11px] ${dark
          ? "bg-[#111118]/90 border-emerald-500/35 text-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.18)]"
          : "bg-white/95 border-emerald-500/45 text-emerald-700 shadow-sm"
          }`}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="flex items-center gap-0.5 whitespace-nowrap max-md:truncate">
          {badgeText}
          <span className="animate-pulse max-md:shrink-0">|</span>
        </span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { dark, introPopupOpen } = useTheme();
  const badgeText = useTyping(BADGE_MESSAGES);
  const roleText = useTyping(ROLE_LINES);
  const [contactOpen, setContactOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [cbLoading, setCbLoading] = useState(false);
  const [cbSuccess, setCbSuccess] = useState(false);
  const [cbError, setCbError] = useState("");
  const whatsappUrl = "https://wa.me/917024073871";
  const callUrl = "tel:7024073871";

  async function handleCallbackSubmit(e) {
    e.preventDefault();
    setCbLoading(true);
    setCbError("");
    const formData = new FormData(e.target);
    formData.append("access_key", "ab110ab7-2adf-4524-8baa-91916758c32c");
    formData.append("subject", "📞 Callback Request — Portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setCbSuccess(true);
        e.target.reset();
        setTimeout(() => { setCbSuccess(false); setCallbackOpen(false); }, 3000);
      } else {
        setCbError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setCbError("Network error. Please try again.");
    } finally {
      setCbLoading(false);
    }
  }

  return (
    <section
      id="hero"
      className={`relative min-h-0 lg:min-h-screen flex flex-col overflow-hidden transition-colors duration-300 ${dark
        ? "bg-[#0A0D14]"
        : "bg-[#F4F6FB]"
        }`}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px,transparent 1px),
                          linear-gradient(90deg,rgba(99,102,241,0.06) 1px,transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 560,
            height: 560,
            top: -160,
            left: -140,
            filter: "blur(80px)",
            background: dark
              ? "radial-gradient(circle,rgba(99,102,241,0.25) 0%,rgba(124,58,237,0.1) 45%,transparent 70%)"
              : "radial-gradient(circle,rgba(99,102,241,0.14) 0%,rgba(124,58,237,0.05) 45%,transparent 70%)",
          }}
          animate={{ scale: [1, 1.07, 1], x: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 480,
            height: 480,
            bottom: -100,
            right: -80,
            filter: "blur(80px)",
            background: dark
              ? "radial-gradient(circle,rgba(192,38,211,0.22) 0%,rgba(244,114,182,0.07) 45%,transparent 70%)"
              : "radial-gradient(circle,rgba(192,38,211,0.10) 0%,rgba(244,114,182,0.04) 45%,transparent 70%)",
          }}
          animate={{ scale: [1, 1.09, 1], y: [0, -22, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {!introPopupOpen && <StatusBadge dark={dark} badgeText={badgeText} />}

      {/* ── Two-column grid ── */}
      <div className="relative z-10 flex-1 flex items-start py-6 max-md:pt-[88px] max-md:pb-4 md:pt-[76px] md:pb-6 lg:pt-[82px] lg:pb-8">
        <div className="w-full max-w-container mx-auto px-4 md:px-6 flex flex-col gap-6 max-md:gap-4 lg:gap-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[48%_52%] gap-6 lg:gap-10 max-md:gap-12 items-center">
            {/* LEFT */}
            <div className="flex flex-col items-start text-left gap-0 max-md:mt-0 md:mt-0 w-full">

              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.22 }}
                className={`max-md:mt-2 font-extrabold tracking-tight leading-[1.08] text-[22px] md:text-[clamp(28px,3.2vw,35px)] ${dark ? "text-white" : "text-slate-900"}`}
                style={{
                  fontFamily: "'Syne',sans-serif",
                }}
              >
                Abhishek{" "}
                <span
                  className="bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#C026D3] bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: "text" }}
                >
                  Namdev
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-base md:text-lg font-bold max-md:text-sm w-full"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                <span className={`shrink-0 ${dark ? "text-slate-400" : "text-slate-500"}`}>
                  I am a
                </span>
                <span className="relative hidden md:inline-grid [grid-template-areas:'stack'] font-bold">
                  <span
                    className="[grid-area:stack] invisible whitespace-nowrap pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    {LONGEST_ROLE}
                  </span>
                  <span className="[grid-area:stack] inline-flex items-baseline whitespace-nowrap">
                    <span className="bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent">
                      {roleText}
                    </span>
                    <span
                      className={`caret-blink ml-0.5 inline-block h-[1.05em] w-[2px] shrink-0 rounded-sm ${dark ? "bg-[#00D4FF]" : "bg-[#7C3AED]"}`}
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span className="inline-flex items-baseline md:hidden font-bold">
                  <span className="bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent">
                    {roleText}
                  </span>
                  <span
                    className={`caret-blink ml-0.5 inline-block h-[1.05em] w-[2px] shrink-0 rounded-sm ${dark ? "bg-[#00D4FF]" : "bg-[#7C3AED]"}`}
                    aria-hidden="true"
                  />
                </span>
              </motion.div>
              {/* Mobile — single paragraph, natural left-aligned wrap */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className={`md:hidden mt-3 w-full max-w-full text-left text-[13px] leading-[1.8] tracking-normal ${dark ? "text-slate-400" : "text-slate-600"}`}
                style={{ textAlign: "left", hyphens: "none" }}
              >
                I transform ideas into{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  high-performing digital&nbsp;experiences
                </span>{" "}
                that{" "}
                <span className={dark ? "text-white" : ""}>
                  help startups, businesses, and entrepreneurs grow
                </span>
                . I build{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  fast, scalable, and&nbsp;SEO-friendly
                </span>{" "}
                websites and web apps — from{" "}
                <span className={`font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  landing pages to full-featured&nbsp;applications
                </span>{" "}
                — with clean code, modern design, and{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  long-term business&nbsp;growth
                </span>{" "}
                in mind.
              </motion.p>

              {/* Desktop — concise + 2 extra lines (mobile unchanged) */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className={`hidden md:block mt-4 max-w-[500px] text-left text-[15px] leading-[1.85] tracking-normal text-pretty ${dark ? "text-slate-400" : "text-slate-600"}`}
              >
                I transform ideas into{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  high-performing digital experiences
                </span>{" "}
                that{" "}
                <span className={dark ? "text-white" : ""}>
                  help startups, businesses, and entrepreneurs grow
                </span>
                . Whether you&apos;re{" "}
                <span className={`font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  launching a new business, designing a brand-new website, or redesigning an existing one,
                </span>{" "}
                I build{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  fast, scalable, and SEO-friendly
                </span>{" "}
                websites and web apps with clean code, modern design, and a seamless user experience. From{" "}
                <span className={`font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  high-converting landing pages
                </span>{" "}
                to{" "}
                <span className={`font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  full-featured web applications,
                </span>{" "}
                every project is built to strengthen your online presence, engage your audience, and support{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  long-term business growth.
                </span>
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.62 }}
                className="mt-7 flex flex-wrap items-center gap-3 max-md:w-full max-md:flex-row max-md:flex-nowrap max-md:gap-2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 max-md:flex-1 max-md:justify-center max-md:gap-1.5 max-md:px-3 max-md:py-2.5 max-md:text-xs"
                  style={{
                    background: "linear-gradient(to right,#6366F1,#7C3AED)",
                    boxShadow: "0 0 28px rgba(99,102,241,0.45)",
                  }}
                >
                  Get In Touch <FaArrowRight style={{ fontSize: 10 }} />
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border max-md:flex-1 max-md:justify-center max-md:gap-1.5 max-md:px-3 max-md:py-2.5 max-md:text-xs max-md:whitespace-nowrap ${dark
                    ? "border-white/20 text-white dark:bg-[#2A2A3C] hover:border-indigo-400/50 hover:bg-indigo-500/10"
                    : "border-slate-300 text-slate-800 bg-white/90  hover:border-indigo-400 shadow-sm"
                    }`}
                >
                  <FaDownload style={{ fontSize: 10 }} /> Download Resume
                </a>
              </motion.div>

              {/* Socials — centered on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-6 max-md:mt-5 flex w-full flex-wrap items-center justify-start gap-3 max-md:justify-center max-md:mx-auto max-md:mb-2"
              >
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    initial={{ opacity: 0, y: 12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.78 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                    whileHover={{ y: -5, scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-[18px] text-white border transition-all duration-300"
                    style={{
                      background: s.bg,
                      borderColor: s.border,
                      boxShadow: `0 2px 8px ${s.glow}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = s.hoverBorder;
                      e.currentTarget.style.boxShadow = `0 0 18px ${s.glow}, 0 4px 12px ${s.glow}`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = s.border;
                      e.currentTarget.style.boxShadow = `0 2px 8px ${s.glow}`;
                    }}
                  >
                    {/* Brand glow pulse on hover */}
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: `0 0 16px ${s.glow}` }}
                    />
                    <span className="relative z-10 flex items-center justify-center">{s.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* RIGHT – Laptop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="flex w-full items-center justify-center max-md:mt-6 max-md:pt-2 max-md:-mx-3 max-md:w-[calc(100%+1.5rem)]"
            >
              <div className="relative w-full max-md:max-w-[calc(100vw-1rem)] md:max-w-[680px] lg:max-w-[720px] xl:max-w-[760px] mx-auto">
                {/* Glow — stronger in dark mode so laptop reads off the bg */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: dark ? "-28px" : "-20px",
                    background: dark
                      ? "radial-gradient(ellipse at 50% 55%,rgba(99,102,241,0.55) 0%,rgba(124,58,237,0.28) 42%,transparent 72%)"
                      : "radial-gradient(ellipse at 50% 55%,rgba(99,102,241,0.38) 0%,rgba(124,58,237,0.18) 40%,transparent 70%)",
                    filter: "blur(45px)",
                  }}
                />
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: -30,
                    left: "10%",
                    right: "10%",
                    height: 60,
                    background: dark ? "rgba(124,58,237,0.45)" : "rgba(192,38,211,0.35)",
                    filter: "blur(30px)",
                    borderRadius: "50%",
                  }}
                />

                {/* Floating laptop */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                  style={{ transformStyle: "preserve-3d", perspective: 1200 }}
                >
                  {/* Lid */}
                  <div
                    className={`relative w-full rounded-[18px] overflow-hidden max-md:rounded-[12px] p-[6px] pb-0 max-md:p-[3px] max-md:pb-0 ${
                      dark
                        ? "border border-white/[0.16] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_40px_rgba(99,102,241,0.22),0_24px_64px_rgba(0,0,0,0.55)]"
                        : ""
                    }`}
                    style={{
                      background: dark
                        ? "linear-gradient(to bottom,#4a5168 0%,#3a4058 40%,#2f354a 75%,#262b3d 100%)"
                        : "linear-gradient(to bottom,#cdd0e0,#b0b5c8)",
                      boxShadow: dark
                        ? undefined
                        : "0 32px 80px rgba(0,0,0,0.22),0 0 0 1px rgba(255,255,255,0.6)",
                    }}
                  >
                    {/* Traffic lights + camera */}
                    <div
                      className={`flex items-center justify-between px-3 py-1.5 ${dark ? "bg-[#2a2f42]/80" : ""}`}
                    >
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                      </div>
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-slate-600" : "bg-slate-400"}`}
                      />
                      <div className="w-10" />
                    </div>

                    {/* Screen */}
                    <div
                      className={`w-full rounded-t-xl overflow-hidden max-md:rounded-lg relative aspect-[16/10] ${
                        dark ? "ring-1 ring-inset ring-white/[0.12] shadow-inner" : ""
                      }`}
                      style={dark ? { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" } : undefined}
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <LaptopScreen />
                      </div>
                      <div
                        className="absolute top-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg,rgba(255,255,255,0.06) 0%,transparent 100%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Base */}
                  <div
                    className="mx-auto h-[10px]"
                    style={{
                      width: "96%",
                      background: dark
                        ? "linear-gradient(to bottom,#3a4058,#2f354a)"
                        : "linear-gradient(to bottom,#b8bcc8,#9a9eb2)",
                    }}
                  />
                  <div
                    className="mx-auto h-[7px] rounded-b-2xl"
                    style={{
                      width: "82%",
                      background: dark
                        ? "linear-gradient(to bottom,#2f354a,#252a3a)"
                        : "linear-gradient(to bottom,#9a9eb2,#7e8295)",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Chat widget — fixed bottom-right ── */}
      <div className="fixed right-4 bottom-4 z-[10000] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        {contactOpen && (
          <div
            className={`w-[300px] rounded-[32px] border p-3 shadow-2xl backdrop-blur-xl ${dark
              ? "border-white/10 bg-[#2A2A3C] text-white shadow-[0_12px_48px_rgba(0,0,0,0.55)]"
              : "border-slate-200 bg-white text-slate-900"
              }`}
          >
            <div className="flex flex-col gap-3">
              {/* Call */}
              <button
                type="button"
                onClick={() => window.open(callUrl, "_self")}
                className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${dark
                  ? "border-white/10 bg-white/[0.05] text-white hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10"
                  : "border-slate-200 bg-white text-slate-900 hover:border-[#00D4FF] hover:bg-[#EFF8FF]"
                  }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00D4FF]/15 text-[#00D4FF]">
                  <FaPhoneAlt />
                </span>
                <div>
                  <div className="text-sm font-semibold">Call Us</div>
                  <div className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>7024073871</div>
                </div>
              </button>
              {/* WhatsApp */}
              <button
                type="button"
                onClick={() => window.open(whatsappUrl, "_blank")}
                className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${dark
                  ? "border-white/10 bg-white/[0.05] text-white hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
                  : "border-slate-200 bg-white text-slate-900 hover:border-[#25D366] hover:bg-[#ECFFF2]"
                  }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                  <FaWhatsapp />
                </span>
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>7024073871</div>
                </div>
              </button>
              {/* Callback */}
              <button
                type="button"
                onClick={() => {
                  setCallbackOpen(true);
                  setContactOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${dark
                  ? "border-white/10 bg-white/[0.05] text-white hover:border-[#F6B93B]/50 hover:bg-[#F6B93B]/10"
                  : "border-slate-200 bg-white text-slate-900 hover:border-[#F6B93B] hover:bg-[#FFF4E2]"
                  }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6B93B]/15 text-[#F6B93B]">
                  <FaCommentDots />
                </span>
                <div>
                  <div className="text-sm font-semibold">
                    Request a Callback
                  </div>
                  <div className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
                    Quick response guaranteed
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        <div className="relative">
          {!contactOpen && (
            <span className="absolute inset-0 rounded-full bg-[#00D4FF]/40 animate-ping" />
          )}
          <button
            type="button"
            onClick={() => setContactOpen((p) => !p)}
            aria-label={contactOpen ? "Close chat" : "Open chat"}
            className="relative flex h-20 w-20 items-center justify-center rounded-full text-3xl transition-all duration-300 hover:scale-110 active:scale-95 text-white"
            style={{
              background: "linear-gradient(135deg,#00D4FF,#7C3AED,#C026D3)",
              boxShadow: dark
                ? "0 8px 35px rgba(124,58,237,0.65)"
                : "0 8px 35px rgba(124,58,237,0.55)",
            }}
          >
            <FaRobot style={{ fontSize: 34 }} />
          </button>
          {!contactOpen && (
            <span className="absolute bottom-1 right-1 flex h-5 w-5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className={`relative inline-flex h-5 w-5 rounded-full bg-emerald-500 border-2 ${dark ? "border-[#2A2A3C]" : "border-white"}`} />
            </span>
          )}
        </div>
      </div>

      {callbackOpen && (
        <div className="fixed right-4 bottom-24 z-[10000] sm:right-6 sm:bottom-24">
          <div
            className={`w-[300px] rounded-[28px] border p-3 shadow-xl backdrop-blur-xl ${
              dark
                ? "border-white/10 bg-[#2A2A3C] text-white shadow-[0_12px_48px_rgba(0,0,0,0.55)]"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <div className={`rounded-[10px] p-3.5 ${ dark ? "border border-[#F7C948]/20 bg-[#F7C948]/10" : "bg-[#F7C948]/10" }`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold">Request a Callback</p>
                  <p className={`mt-1 text-[11px] ${ dark ? "text-slate-400" : "text-slate-600" }`}>
                    Enter details and we'll call you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => { setCallbackOpen(false); setCbSuccess(false); setCbError(""); }}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                    dark
                      ? "border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/10"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* ── Success State ── */}
            {cbSuccess ? (
              <div className="mt-4 flex flex-col items-center gap-2 py-4 text-center">
                <span className="text-3xl">✅</span>
                <p className="text-sm font-semibold text-emerald-500">Request Sent!</p>
                <p className={`text-[11px] ${ dark ? "text-slate-400" : "text-slate-500" }`}>
                  We'll call you back shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleCallbackSubmit}
                className="mt-3 space-y-2.5"
              >
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone No"
                  className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
                />
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Your Message (optional)"
                  className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
                />

                {/* Error message */}
                {cbError && (
                  <p className="text-[11px] text-red-500 font-medium">{cbError}</p>
                )}

                <button
                  type="submit"
                  disabled={cbLoading}
                  className="w-full rounded-lg bg-[#F7C948] px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-[#e8c23c] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {cbLoading ? (
                    <>
                      <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-slate-700 border-t-transparent" />
                      Sending...
                    </>
                  ) : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}