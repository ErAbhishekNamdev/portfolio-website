import { useState } from 'react';
import { 
  FaArrowRight, 
  FaBriefcase, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaWhatsapp,
  FaCheckCircle,
  FaChevronRight
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
    { href: 'https://www.linkedin.com/in/abhishek-namdev-software-engineer/', label: 'LinkedIn', icon: <FaLinkedin className="text-xl" /> },
    { href: 'https://x.com/Abhishekna78501', label: 'Twitter', icon: <FaTwitter className="text-xl" /> },
    { href: 'https://github.com/ErAbhishekNamdev', label: 'GitHub', icon: <FaGithub className="text-xl" /> },
    { href: 'https://wa.me/917024073871', label: 'WhatsApp', icon: <FaWhatsapp className="text-xl" /> },
    { href: 'https://www.naukri.com/mnjuser/profile', label: 'Naukri Profile', icon: <FaBriefcase className="text-xl" /> },
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
      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={mobileFooterBg}
          alt="Footer background"
          className="h-full w-full object-cover object-left opacity-90 md:hidden"
        />
        <img
          src={footerBg}
          alt="Footer background"
          className="hidden h-full w-full object-cover object-left sm:object-center md:block md:object-right-top opacity-90"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1272px] px-4 pt-[50px] pb-[72px] sm:px-6 lg:px-8">
        
        {/* Call To Action Glass Card */}
        <div className="mb-[46px] flex flex-col gap-4 rounded-[18px] bg-white/14 border border-white/10 px-5 py-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8 text-center sm:text-left">
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

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1 & 2: Brand Profile & Bios */}
          <div className="lg:col-span-2 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
              <div 
                className="relative w-11 h-11 shrink-0 rounded-xl overflow-hidden p-[2px] shadow-[0_4px_20px_rgba(0,212,255,0.4)]"
                style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 50%, #F472B6 100%)" }}
              >
                <img 
                  src={logoicons} 
                  alt="Abhishek Namdev" 
                  className="h-full w-full object-cover rounded-[10px]" 
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold tracking-tight text-white">Abhishek Namdev</h3>
                <p className="text-xs font-semibold text-sky-400 tracking-wide">Specialist Frontend Developer</p>
              </div>
            </div>

            <p className="mb-[24px] max-w-full md:max-w-[412px] text-[15px] leading-[26px] tracking-[-0.5px] text-white/80 font-normal text-center sm:text-left mx-auto sm:mx-0">
              Senior Frontend Developer & UI Engineer specializing in React, Next.js, and modern web applications. Crafting pixel-perfect designs, lightning-fast performance, and exceptional user experiences for ambitious startups and global brands.
            </p>

            {/* Specialty Glass Badges */}
            <div className="mb-6 flex flex-wrap justify-center sm:justify-start gap-2.5">
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-sm transition hover:bg-white/20">
                Freelance React developer
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-sm transition hover:bg-white/20">
                UI/UX web apps
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-sm transition hover:bg-white/20">
                Contract & remote work
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-sm transition hover:bg-white/20">
                React + Next.js builds
              </span>
            </div>

            {/* Social Links */}
            <div className="mb-6 flex items-center justify-center sm:justify-start gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#1E3C8C] text-white transition hover:bg-[#173566] hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: What I Build */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="mb-[16px] text-[20px] leading-[28px] tracking-[-0.5px] font-[400] text-white text-center sm:text-left">
              What I build
            </h4>
            <ul className="space-y-[16px] text-[15px] leading-[24px] text-white/70 flex flex-col items-center sm:items-start">
              {whatIBuild.map((item, idx) => (
                <li key={idx} className="w-full text-center sm:text-left">
                  <a 
                    href={item.href} 
                    className="group inline-flex sm:flex items-center sm:items-start justify-center sm:justify-start gap-2 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <FaChevronRight className="mt-[3px] h-2.5 w-2.5 shrink-0 text-white/50 group-hover:text-white transition-colors" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="mb-[16px] text-[20px] leading-[28px] tracking-[-0.5px] font-[400] text-white text-center sm:text-left">
              Company
            </h4>
            <ul className="space-y-[16px] text-[15px] leading-[24px] text-white/70 flex flex-col items-center sm:items-start">
              {companyLinks.map((item, idx) => (
                <li key={idx} className="w-full text-center sm:text-left">
                  <a 
                    href={item.href} 
                    className="group inline-flex sm:flex items-center sm:items-start justify-center sm:justify-start gap-2 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <FaChevronRight className="mt-[3px] h-2.5 w-2.5 shrink-0 text-white/50 group-hover:text-white transition-colors" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Support */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="mb-[16px] text-[20px] leading-[28px] tracking-[-0.5px] font-[400] text-white text-center sm:text-left">
              Support
            </h4>
            <ul className="space-y-[16px] text-[15px] leading-[24px] text-white/70 flex flex-col items-center sm:items-start">
              {supportLinks.map((item, idx) => (
                <li key={idx} className="w-full text-center sm:text-left">
                  <a 
                    href={item.href} 
                    className="group inline-flex sm:flex items-center sm:items-start justify-center sm:justify-start gap-2 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <FaChevronRight className="mt-[3px] h-2.5 w-2.5 shrink-0 text-white/50 group-hover:text-white transition-colors" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-[40px] flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-[26px] text-center lg:flex-row lg:text-left">
          <p className="text-[15px] font-[400] leading-[20px] tracking-[-0.5px] text-slate-300 text-center lg:text-left">
            © {new Date().getFullYear()} Abhishek Namdev — Frontend developer crafting fast, modern web experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[15px] text-slate-300 md:justify-center md:gap-[24px] lg:justify-start">
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

