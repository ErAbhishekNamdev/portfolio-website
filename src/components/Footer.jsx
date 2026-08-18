import { useState } from 'react';
import {
  FaArrowRight,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaCheckCircle,
} from 'react-icons/fa';
import footerBg from '../assets/footer.png';
import mobileFooterBg from '../assets/mobilefooterview.png';
import logoicons from '../assets/logo.jpeg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      const subject = encodeURIComponent("Project Inquiry from Portfolio");
      const body = encodeURIComponent(
        `Hi Abhishek,\n\nI visited your portfolio and would like to connect with you regarding a project.\n\nMy Email Address: ${email}\n\nLooking forward to hearing from you!`
      );
      window.location.href = `mailto:abhisheknamdev9171@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/abhishek-namdev-software-engineer/', label: 'LinkedIn', icon: <FaLinkedin className="text-lg" /> },
    { href: 'https://x.com/Abhishekna78501', label: 'Twitter', icon: <FaTwitter className="text-lg" /> },
    { href: 'https://github.com/ErAbhishekNamdev', label: 'GitHub', icon: <FaGithub className="text-lg" /> },
    { href: 'https://wa.me/917024073871', label: 'WhatsApp', icon: <FaWhatsapp className="text-lg" /> },
    { href: 'https://www.naukri.com/mnjuser/profile', label: 'Naukri Profile', icon: <FaBriefcase className="text-lg" /> },
  ];

  const whatIBuild = [
    { title: 'High-converting landing pages', href: '#projects' },
    { title: 'Scalable React dashboards', href: '#projects' },
    { title: 'Reusable design systems', href: '#skills' },
    { title: 'Developer & personal portfolios', href: '#projects' },
    { title: 'Micro-interactions & animation', href: '#skills' },
    { title: 'Speed & performance audits', href: '#skills' },
  ];

  const companyLinks = [
    { title: 'About me', href: '#about' },
    { title: 'Services offered', href: '#skills' },
    { title: 'Case studies', href: '#projects' },
    { title: 'Get in touch', href: '#contact' },
  ];

  const supportLinks = [
    { title: 'Free consultation call', href: '#contact' },
    { title: 'Post-launch support', href: '#contact' },
    { title: 'Integration guidance', href: '#skills' },
    { title: 'Frequently asked questions', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-slate-950" id="footer">
      {/* Background Images with Rich Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={mobileFooterBg}
          alt="Footer background"
          className="h-full w-full object-cover object-center opacity-95 md:hidden"
        />
        <img
          src={footerBg}
          alt="Footer background"
          className="hidden h-full w-full object-cover object-center md:block opacity-95"
        />
        {/* Soft background ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-slate-950/10 to-indigo-950/30 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pt-12 pb-12 sm:px-6 lg:px-8">

        {/* Call To Action Glass Card */}
        <div className="mb-12 flex flex-col gap-4 rounded-[18px] bg-white/14 border border-white/10 px-5 py-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8">
          <div className="max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="text-[20px] leading-[26px] tracking-[-1%] mb-[10px] font-black italic text-white md:text-[22px]">
              Let's build high-converting, world-class web products together
            </h2>
            <p className="max-w-full text-[14px] leading-[22px] tracking-[-0.4%] text-white/80 md:max-w-[550px]">
              Drop your email below to connect directly with me. I'll get back to you within 24 hours with a custom project proposal, timeline, and strategy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-auto shrink-0 flex justify-center sm:justify-start">
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center justify-center sm:justify-start">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..."
                required
                className="h-[48px] w-full sm:w-[300px] md:w-[320px] rounded-[14px] bg-white px-4 text-[15px] leading-[24px] text-slate-900 placeholder:text-slate-500 outline-none shadow-sm focus:ring-2 focus:ring-sky-400 transition-all text-center sm:text-left"
              />
              <button
                type="submit"
                className="group flex h-[48px] items-center justify-center gap-2 rounded-[14px] bg-slate-100 hover:bg-slate-200 text-slate-950 px-5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98] w-full sm:w-auto shrink-0 cursor-pointer shadow-sm"
              >
                {submitted ? (
                  <>
                    <FaCheckCircle className="text-emerald-600 h-4 w-4" />
                    <span>Opening mail...</span>
                  </>
                ) : (
                  <>
                    <span>Get in touch</span>
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 text-center sm:text-left">

          {/* Left Column: Brand & Bio Profile (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">

            {/* Brand Logo & Name Header — always row on all screens */}
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3.5 mb-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-pink-500 p-[2px] shadow-lg shadow-blue-500/20">
                <img
                  src={logoicons}
                  alt="Abhishek Namdev"
                  className="h-full w-full object-cover rounded-[14px]"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold font-syne tracking-tight text-white">Abhishek Namdev</h3>
                <p className="text-xs font-semibold text-sky-400 tracking-wide mt-0.5">Specialist Frontend Developer</p>
              </div>
            </div>

            {/* Biography Paragraph */}
            <p className="mb-6 max-w-lg text-sm sm:text-[15px] leading-relaxed text-slate-300 font-normal text-center sm:text-left">
              Senior Frontend Developer & UI Engineer specializing in React, Next.js, and modern web applications. Crafting pixel-perfect designs, lightning-fast performance, and exceptional user experiences for ambitious startups and global brands.
            </p>

            {/* Specialty Glass Badges */}
            <div className="mb-6 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs text-white/90 font-medium backdrop-blur-md shadow-sm transition hover:bg-white/20">
                Freelance React developer
              </span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-sm transition hover:bg-white/20">
                UI/UX web apps
              </span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-sm transition hover:bg-white/20">
                Contract & remote work
              </span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-sm transition hover:bg-white/20">
                React + Next.js builds
              </span>
            </div>

            {/* Blue Square Rounded Social Icon Buttons */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E40AF] text-white border border-white/10 shadow-md transition-all duration-200 hover:bg-[#2563EB] hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: What I build */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-5">
              <span className="text-base">⚡</span>
              <h4 className="text-[15px] font-bold font-syne text-white">What I build</h4>
            </div>
            <ul className="flex flex-col gap-0.5 items-center sm:items-start w-full">
              {whatIBuild.map((item, idx) => (
                <li key={idx} className="w-full flex justify-center sm:justify-start">
                  <a
                    href={item.href}
                    className="group inline-flex items-start gap-3 py-2 px-1 rounded-xl transition-all duration-200"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                      <svg className="w-2.5 h-2.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-[13px] text-white/80 group-hover:text-white transition-colors font-medium leading-snug">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-5">
              <span className="text-base">🏢</span>
              <h4 className="text-[15px] font-bold font-syne text-white">Company</h4>
            </div>
            <ul className="flex flex-col gap-0.5 items-center sm:items-start w-full">
              {companyLinks.map((item, idx) => (
                <li key={idx} className="w-full flex justify-center sm:justify-start">
                  <a
                    href={item.href}
                    className="group inline-flex items-start gap-3 py-2 px-1 rounded-xl transition-all duration-200"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/50 transition-all">
                      <svg className="w-2.5 h-2.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-[13px] text-white/80 group-hover:text-white transition-colors font-medium leading-snug">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-5">
              <span className="text-base">🛡️</span>
              <h4 className="text-[15px] font-bold font-syne text-white">Support</h4>
            </div>
            <ul className="flex flex-col gap-0.5 items-center sm:items-start w-full">
              {supportLinks.map((item, idx) => (
                <li key={idx} className="w-full flex justify-center sm:justify-start">
                  <a
                    href={item.href}
                    className="group inline-flex items-start gap-3 py-2 px-1 rounded-xl transition-all duration-200"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-400/50 transition-all">
                      <svg className="w-2.5 h-2.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-[13px] text-white/80 group-hover:text-white transition-colors font-medium leading-snug">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Horizontal Divider & Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center lg:flex-row lg:text-left">
          <p className="text-xs sm:text-sm text-white/70 text-center lg:text-left">
            © {new Date().getFullYear()} Abhishek Namdev — Senior Frontend Developer crafting fast, modern web experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
            <a href="#" className="transition hover:text-white">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


