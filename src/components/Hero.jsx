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
  FaBriefcase,
} from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import LaptopScreen from "./LaptopScreen";

const BADGE_MESSAGES = [
  "Available for Frontend Collaborations",
  "Available for Freelance Projects",
  "Ready for React & Next.js Work",
  "Open to New Opportunities",
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
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abhishek-namdev-software-engineer/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    href: "https://x.com/Abhishekna78501",
    label: "Twitter",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/917024073871",
    label: "WhatsApp",
  },
  {
    icon: <FaBriefcase />,
    href: "https://www.naukri.com/mnjuser/profile",
    label: "Naukri",
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
  const whatsappUrl = "https://wa.me/917024073871";
  const callUrl = "tel:7024073871";

  return (
    <section
      id="hero"
      className={`relative min-h-screen max-md:min-h-0 flex flex-col overflow-hidden transition-colors duration-300 ${dark
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
      <div className="relative z-10 flex-1 flex items-center max-md:items-start px-5 md:px-10 lg:px-16 py-8 max-md:pt-[70px] max-md:pb-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 max-md:gap-4">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[48%_52%] gap-6 lg:gap-10 max-md:gap-8 items-center">
            {/* LEFT */}
            <div className="flex flex-col items-start text-left gap-0 mt-2 max-md:mt-0">
              <div className="h-9 shrink-0 md:hidden" aria-hidden="true" />
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.22 }}
                className={`font-extrabold tracking-tight leading-[1.08] text-[22px] md:text-[clamp(30px,3.6vw,35px)] ${dark ? "text-white" : "text-slate-900"}`}
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
                className="mt-3 flex items-center gap-1.5 text-base md:text-lg font-bold max-md:flex-wrap max-md:text-sm"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                <span className={dark ? "text-slate-400" : "text-slate-500"}>
                  I am a
                </span>
                <span className="relative inline-grid [grid-template-areas:'stack'] font-bold">
                  {/* reserves width so layout doesn't jump while typing */}
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
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className={`mt-4 max-w-[500px] text-left text-[13px] md:text-[15px] leading-[1.75] md:leading-[1.8] tracking-normal text-pretty ${dark ? "text-slate-400" : "text-slate-600"}`}
              >
                I transform ideas into{" "}
                <span className={`font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  exceptional digital experiences
                </span>{" "}
                that drive business growth — helping startups, businesses, and entrepreneurs build{" "}
                <span className="font-semibold bg-gradient-to-r from-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                  fast, scalable, SEO-friendly
                </span>{" "}
                websites and web apps, from landing pages to custom products, with beautiful design and clean code — so you can launch, redesign, or optimize with confidence.
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

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-6 flex flex-wrap items-center gap-3 max-md:w-full max-md:justify-center"
              >
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    initial={{ opacity: 0, y: 12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.78 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                    whileHover={{ y: -5, scale: 1.18 }}
                    whileTap={{ scale: 0.92 }}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-[15px] text-white border border-[#1E3C8C]/50 transition-all duration-300 hover:border-[#2a4fa8] hover:shadow-[0_0_16px_rgba(30,60,140,0.45)]"
                    style={{
                      background: "#1E3C8C",
                      boxShadow: "0 2px 8px rgba(30,60,140,0.3)",
                    }}
                  >
                    {/* Glow ring on hover */}
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_14px_rgba(30,60,140,0.5)]"
                    />
                    <span className="relative z-10">{s.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* RIGHT – Laptop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="flex items-center justify-center max-md:mt-4 max-md:-mx-5 max-md:w-[calc(100%+2.5rem)]"
            >
              <div className="relative w-full max-w-[560px] md:max-w-[600px] lg:max-w-[640px] max-md:max-w-[calc(100vw-24px)] max-md:mx-auto">
                {/* Glow */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: "-20px",
                    background:
                      "radial-gradient(ellipse at 50% 55%,rgba(99,102,241,0.38) 0%,rgba(124,58,237,0.18) 40%,transparent 70%)",
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
                    background: "rgba(192,38,211,0.35)",
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
                    className="relative w-full rounded-[18px] overflow-hidden max-md:rounded-[12px] p-[6px] pb-0 max-md:p-[3px] max-md:pb-0"
                    style={{
                      background: dark
                        ? "linear-gradient(to bottom,#1e2235,#0f1120)"
                        : "linear-gradient(to bottom,#cdd0e0,#b0b5c8)",
                      boxShadow: dark
                        ? "0 32px 80px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.07)"
                        : "0 32px 80px rgba(0,0,0,0.22),0 0 0 1px rgba(255,255,255,0.6)",
                    }}
                  >
                    {/* Traffic lights + camera */}
                    <div className="flex items-center justify-between px-3 py-1.5">
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
                    <div className="w-full rounded-t-xl overflow-hidden max-md:rounded-lg relative aspect-[16/10]">
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
                        ? "linear-gradient(to bottom,#2a2d42,#1a1d2e)"
                        : "linear-gradient(to bottom,#b8bcc8,#9a9eb2)",
                    }}
                  />
                  <div
                    className="mx-auto h-[7px] rounded-b-2xl"
                    style={{
                      width: "82%",
                      background: dark
                        ? "linear-gradient(to bottom,#1a1d2e,#0f1120)"
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
            className={`w-[300px] rounded-[28px] border p-3 shadow-xl backdrop-blur-xl ${dark
              ? "border-white/10 bg-[#2A2A3C] text-white shadow-[0_12px_48px_rgba(0,0,0,0.55)]"
              : "border-slate-200 bg-white text-slate-900"
              }`}
          >
            <div className={`rounded-[10px] p-3.5 ${dark ? "border border-[#F7C948]/20 bg-[#F7C948]/10" : "bg-[#F7C948]/10"}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold">Request a Callback</p>
                  <p className={`mt-1 text-[11px] ${dark ? "text-slate-400" : "text-slate-600"}`}>
                    Enter details and we'll call you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCallbackOpen(false)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${dark
                    ? "border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/10"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <form
              action="https://formsubmit.co/abhisheknamdev9171@gmail.com"
              method="POST"
              className="mt-3 space-y-2.5"
              onSubmit={() => setCallbackOpen(false)}
            >
              <input type="hidden" name="_subject" value="Callback Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                name="name"
                required
                placeholder="Name"
                className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${dark
                  ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                  : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone No"
                className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${dark
                  ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                  : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${dark
                  ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                  : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
              />
              <textarea
                name="message"
                rows={2}
                placeholder="Your Message (optional)"
                className={`w-full rounded-lg border px-3.5 py-2 text-sm outline-none transition focus:ring-2 ${dark
                  ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-[#F7C948] focus:ring-[#F7C948]/25"
                  : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#F7C948] focus:ring-[#F7C948]/20"
                  }`}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#F7C948] px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-[#e8c23c] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}