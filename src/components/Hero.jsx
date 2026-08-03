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

export default function Hero() {
  const { dark } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const badgeMessages = [
    "Available for New Opportunities",
    "Available for Freelance Projects",
    "Available for Frontend Collaborations",
    "Ready for React & UI work",
  ];
  const [badgeText, setBadgeText] = useState("");
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [badgeStage, setBadgeStage] = useState("typing");

  useEffect(() => {
    let timeoutId;
    const currentMessage = badgeMessages[badgeIndex];

    if (badgeStage === "typing") {
      const nextLength = badgeText.length + 1;
      if (nextLength <= currentMessage.length) {
        timeoutId = window.setTimeout(() => {
          setBadgeText(currentMessage.slice(0, nextLength));
        }, 80);
      } else {
        timeoutId = window.setTimeout(() => setBadgeStage("pause"), 1200);
      }
    }

    if (badgeStage === "deleting") {
      const nextLength = badgeText.length - 1;
      if (nextLength >= 0) {
        timeoutId = window.setTimeout(() => {
          setBadgeText(currentMessage.slice(0, nextLength));
        }, 45);
      } else {
        setBadgeIndex((prev) => (prev + 1) % badgeMessages.length);
        setBadgeStage("typing");
      }
    }

    if (badgeStage === "pause") {
      timeoutId = window.setTimeout(() => setBadgeStage("deleting"), 1000);
    }

    return () => window.clearTimeout(timeoutId);
  }, [badgeText, badgeIndex, badgeStage]);

  const whatsappNumber = "917024073871";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const callUrl = "tel:7024073871";
  const businessWhatsapp = "917024073871";
  const businessEmail = "abhisheknamdev9171@gmail.com";

  const handleCallbackField = (field, value) => {
    setCallbackForm((prev) => ({ ...prev, [field]: value }));
  };

  const heroRoleLines = [
    "Software Developer",
    "Web Developer",
    "Freelance Frontend Specialist",
  ];
  const [heroRoleIndex, setHeroRoleIndex] = useState(0);
  const [heroRoleText, setHeroRoleText] = useState("");
  const [heroRoleStage, setHeroRoleStage] = useState("typing");

  useEffect(() => {
    let timeoutId;
    const currentRole = heroRoleLines[heroRoleIndex];

    if (heroRoleStage === "typing") {
      const nextLength = heroRoleText.length + 1;
      if (nextLength <= currentRole.length) {
        timeoutId = window.setTimeout(() => {
          setHeroRoleText(currentRole.slice(0, nextLength));
        }, 80);
      } else {
        timeoutId = window.setTimeout(() => setHeroRoleStage("pause"), 900);
      }
    }

    if (heroRoleStage === "deleting") {
      const nextLength = heroRoleText.length - 1;
      if (nextLength >= 0) {
        timeoutId = window.setTimeout(() => {
          setHeroRoleText(currentRole.slice(0, nextLength));
        }, 45);
      } else {
        setHeroRoleIndex((prev) => (prev + 1) % heroRoleLines.length);
        setHeroRoleStage("typing");
      }
    }

    if (heroRoleStage === "pause") {
      timeoutId = window.setTimeout(() => setHeroRoleStage("deleting"), 850);
    }

    return () => window.clearTimeout(timeoutId);
  }, [heroRoleIndex, heroRoleStage, heroRoleText, heroRoleLines.length]);

  const handleCallbackSubmit = (event) => {
    event.preventDefault();
    const subject = `Callback request from ${callbackForm.name || "visitor"}`;
    const body = `Name: ${callbackForm.name}%0D%0APhone: ${callbackForm.phone}%0D%0AEmail: ${callbackForm.email}%0D%0AMessage: ${callbackForm.message}`;
    const mailtoLink = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    const whatsappMessage = `Hello, I submitted a callback request.%0AName: ${callbackForm.name}%0APhone: ${callbackForm.phone}%0AEmail: ${callbackForm.email}%0AMessage: ${callbackForm.message}`;
    const whatsappLink = `https://wa.me/${businessWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(mailtoLink, "_blank");
    window.open(whatsappLink, "_blank");
    setCallbackOpen(false);
    setCallbackForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-br from-[#02040C] via-[#09122A] to-[#0C1730]"
          : "bg-[#F4F6FB]"
      }`}
    >
      {/* Ambient background glows */}
      {dark && (
        <>
          <div
            className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(0,229,160,0.06) 40%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute top-[-100px] right-[-100px] w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(155,89,255,0.18) 0%, rgba(255,110,199,0.06) 40%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
        </>
      )}

      {!dark && (
        <>
          <div
            className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-[-100px] right-[-100px] w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(192,38,211,0.05) 50%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed z-[10000] inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide border mb-6 backdrop-blur-md ${
            dark
              ? "bg-[#111118]/90 border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              : "bg-white/95 border-emerald-500/50 text-emerald-700 shadow-md"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="flex items-center gap-1">
            <span>{badgeText}</span>
            <span className="inline-block animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-syne font-extrabold tracking-tight leading-none ${
            dark ? "text-white" : "text-slate-900"
          }`}
          style={{
            fontSize: "clamp(46px, 7.5vw, 92px)",
            textShadow: dark ? "0 0 60px rgba(0,212,255,0.2)" : "none",
          }}
        >
          Abhishek Namdev
        </motion.h1>

        {/* Subtitle / Role Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 space-y-4"
        >
          <div className="flex items-center justify-center text-xl md:text-2xl font-bold font-syne">
            <span className={`mr-2 ${dark ? "text-slate-300" : "text-slate-700"}`}>
              I am
            </span>
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#F472B6] bg-clip-text text-transparent">
              {heroRoleText}
            </span>
            <span className="ml-1 inline-block h-[1.1em] w-1 rounded-full bg-current animate-pulse" />
          </div>
          <p
            className={`text-base md:text-lg max-w-2xl mx-auto font-medium ${
              dark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Crafting high-performance web applications, interactive 3D
            experiences, and modern scalable digital products.
          </p>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              dark
                ? "bg-gradient-to-r from-[#00D4FF] to-[#00B8E0] text-slate-950 font-bold shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-105"
                : "bg-gradient-to-r from-[#0284C7] to-[#7C3AED] text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/45 hover:scale-105"
            }`}
          >
            Get In Touch <FaArrowRight className="text-xs" />
          </a>
          <a
            href="#"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
              dark
                ? "border-white/30 text-white hover:border-white/60 hover:bg-white/15 backdrop-blur-md"
                : "border-slate-400 text-slate-900 bg-white/90 hover:border-slate-500 hover:bg-white shadow-md"
            }`}
          >
            <FaDownload className="text-xs" /> Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/ErAbhishekNamdev", label: "GitHub" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abhishek-namdev-software-engineer/", label: "LinkedIn" },
            { icon: <FaTwitter />, link: "https://x.com/Abhishekna78501", label: "Twitter" },
            { icon: <FaWhatsapp />, link: whatsappUrl, label: "WhatsApp" },
            { icon: <FaBriefcase />, link: "https://www.naukri.com/mnjuser/profile", label: "Naukri" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border text-lg transition-all duration-300 ${
                dark
                  ? "bg-[#1E3C8C] dark:border-transparent border-white text-white hover:text-[#00D4FF] hover:border-[#00D4FF]/60 hover:bg-[#0f172a]/80"
                  : "bg-[#1E3C8C] border-slate-300 text-white hover:text-[#0284C7] hover:border-[#0284C7]/60 shadow-md"
              }`}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Fixed contact widget */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        {contactOpen && (
          <div
            className={`w-[300px] rounded-[32px] border bg-white/95 dark:bg-[#2A2A3C] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 ${dark ? "border-white/10 bg-slate-950/95 text-white" : "border-slate-200 bg-white text-slate-900"}`}
          >
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => window.open(callUrl, "_self")}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-[#00D4FF] hover:bg-[#EFF8FF] dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-[#0C1A2F]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00D4FF]/15 text-[#00D4FF]">
                  <FaPhoneAlt />
                </span>
                <div>
                  <div className="text-sm font-semibold">Call Us</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    7024073871
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-[#25D366] hover:bg-[#ECFFF2] dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-[#102317]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                  <FaWhatsapp />
                </span>
                <div>
                  <div className="text-sm font-semibold">Whatsapp</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    7024073871
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => {
                  setCallbackOpen(true);
                  setContactOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-[#F6B93B] hover:bg-[#FFF4E2] dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-[#3B2A0C]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6B93B]/15 text-[#F6B93B]">
                  <FaCommentDots />
                </span>
                <div>
                  <div className="text-sm font-semibold">
                    Request a Call back
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Quick response guaranteed
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* <button
          type="button"
          onClick={() => setContactOpen((prev) => !prev)}
          className={`flex h-16 w-16 items-center justify-center rounded-full border text-xl shadow-2xl transition-all duration-300 ${
            contactOpen ? 'bg-[#ffffff] text-[#0B1225] border-slate-300' : dark ? 'bg-[#0E172E] text-white border-[#ffffff12]' : 'bg-[#10B981] text-white border-slate-200'
          } ${dark ? 'shadow-[#0B1B35]/60' : 'shadow-slate-300/80'}`}
        >
          {contactOpen ? <FaTimes /> : <FaCommentDots />}
        </button> */}
        <div className="relative">
          {/* Outer pulse ring */}
          {!contactOpen && (
            <span className="absolute inset-0 rounded-full bg-[#00D4FF]/40 animate-ping" />
          )}

          <button
            type="button"
            onClick={() => setContactOpen((prev) => !prev)}
            aria-label={contactOpen ? "Close chat" : "Open chat"}
            className={`relative flex h-20 w-20 items-center justify-center rounded-full text-3xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              contactOpen
                ? "bg-gradient-to-br from-[#00D4FF] via-[#7C3AED] to-[#C026D3] text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                : "bg-gradient-to-br from-[#00D4FF] via-[#7C3AED] to-[#C026D3] text-white shadow-[0_8px_35px_rgba(124,58,237,0.55)] hover:shadow-[0_8px_45px_rgba(124,58,237,0.75)]"
            }`}
          >
            {contactOpen ? (
              // <FaTimes className="text-3xl" />
                            <FaRobot className="text-4xl" />
            ) : (
              <FaRobot className="text-4xl" />
            )}
          </button>

          {/* Online status dot */}
          {!contactOpen && (
            <span className="absolute bottom-1 right-1 flex h-5 w-5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-5 w-5 rounded-full bg-emerald-500 border-2 border-white" />
            </span>
          )}
        </div>
      </div>

      {callbackOpen && (
        <div className="fixed right-4 bottom-24 z-50 sm:right-6 sm:bottom-24">
          <div
            className={`w-[300px] rounded-[28px] border p-3 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition ${dark ? "border-white/10 bg-slate-950/95 dark:bg-[#2A2A3C] text-white" : "border-slate-200 bg-white text-slate-900"}`}
          >
            <div className="rounded-[10px] bg-[#F7C948]/10 dark:bg-black/60 p-3.5 shadow-sm shadow-[#F7C948]/20">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold">Request a Call back</p>
                  <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
                    Enter details and we’ll call you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCallbackOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200"
                  aria-label="Close callback form"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <form onSubmit={handleCallbackSubmit} className="mt-3 space-y-2.5">
              <input
                value={callbackForm.name}
                onChange={(e) => handleCallbackField("name", e.target.value)}
                className="w-full rounded-[8px] border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none transition focus:border-[#F7C948] focus:ring-2 focus:ring-[#F7C948]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                placeholder="Name"
                required
              />
              <input
                value={callbackForm.phone}
                onChange={(e) => handleCallbackField("phone", e.target.value)}
                className="w-full rounded-[8px] border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none transition focus:border-[#F7C948] focus:ring-2 focus:ring-[#F7C948]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                placeholder="Phone No"
                type="tel"
                required
              />
              <input
                value={callbackForm.email}
                onChange={(e) => handleCallbackField("email", e.target.value)}
                className="w-full rounded-[8px] border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none transition focus:border-[#F7C948] focus:ring-2 focus:ring-[#F7C948]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                placeholder="Email"
                type="email"
                required
              />
              <textarea
                value={callbackForm.message}
                onChange={(e) => handleCallbackField("message", e.target.value)}
                className="w-full rounded-[8px] border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none transition focus:border-[#F7C948] focus:ring-2 focus:ring-[#F7C948]/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                rows={2}
                placeholder="Your Message (optional)"
              />
              <button
                type="submit"
                className="w-full rounded-[8px] bg-[#F7C948] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#e8c23c]"
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
