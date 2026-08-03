import { FaArrowRight, FaBriefcase, FaGithub, FaLaptopCode, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import footerBg from '../assets/footer.png';
import mobileFooterBg from '../assets/mobilefooterview.png';
import logoIcon from '../assets/logoIcon.png';
import newLogo from '../assets/newlogo.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white bg-slate-950" id="footer">
      <div className="absolute inset-0">
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
        <div className="mb-[46px] flex flex-col gap-4 rounded-[18px] bg-white/14 border border-white/10 px-4 py-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8">
          <div className="max-w-full text-center sm:text-left">
            <h2 className="text-[20px] leading-[24px] tracking-[-1%] mb-[12px] font-black italic text-white md:text-[20px]">
              Let's turn your idea into a great product
            </h2>

            <p className="max-w-full text-[14px] leading-[20px] tracking-[-0.4%] text-white/80 md:max-w-[550px] md:text-[14px]">
              Share a few details about your project and I'll get back to you within 24 hours with a clear plan and timeline.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 items-center sm:flex-row lg:w-auto">
            <input
              type="email"
              placeholder="Your email..."
              className="h-[48px] w-full rounded-[14px] bg-white px-4 text-[16px] leading-[24px] tracking-[-0.4%] text-slate-900 placeholder:text-slate-500 outline-none md:w-[320px]"
            />

            <button className="flex h-[48px] items-center justify-center gap-2 rounded-[14px] bg-slate-100 px-5 text-[16px] font-semibold text-slate-950 transition hover:bg-slate-200 md:text-[16px] w-full sm:w-auto">
              Get in touch
              <FaArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 text-center sm:text-left">
            <p className="mb-[10px] md:mb-[30px] max-w-full md:max-w-[412px] text-[16px] leading-[26px] tracking-[-0.5px] text-white/80">
              I'm a freelance frontend developer specializing in React, Tailwind CSS, and modern web applications. I deliver polished UI, fast performance, and accessible experiences for startups, SaaS, and personal brands.
            </p>
            <div className="mb-2 flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-3">
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/80">Freelance React developer</span>
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/80">UI/UX web apps</span>
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/80">Contract & remote work</span>
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/80">React + Next.js builds</span>
            </div>

            <div className="mb-6 flex items-center justify-center gap-3 sm:justify-start">
              {[
                { href: 'https://www.linkedin.com/in/abhishek-namdev-software-engineer/', label: 'LinkedIn', icon: <FaLinkedin /> },
                { href: 'https://x.com/Abhishekna78501', label: 'Twitter', icon: <FaTwitter /> },
                { href: 'https://github.com/ErAbhishekNamdev', label: 'GitHub', icon: <FaGithub /> },
                { href: 'https://wa.me/917024073871', label: 'WhatsApp', icon: <FaWhatsapp /> },
                { href: 'https://www.naukri.com/mnjuser/profile', label: 'Naukri', icon: <FaBriefcase /> },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#1E3C8C] text-white transition hover:bg-[#173566]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="mb-[14px] text-[20px] leading-[28px] tracking-[-0.5px] font-[400] text-white">What I build</p>
            <ul className="space-y-[16px] text-[16px] leading-[26px] tracking-[-0.5px] font-[400] text-white/70">
              <li>High-converting landing pages</li>
              <li>Scalable React dashboards</li>
              <li>Reusable design systems</li>
              <li>Developer & personal portfolios</li>
              <li>Micro-interactions & animation</li>
              <li>Speed & performance audits</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="mb-[14px] text-[20px] leading-[28px] tracking-[-0.5px] font-[400] text-white">Company</p>
            <ul className="space-y-[16px] text-[16px] leading-[26px] tracking-[-0.5px] font-[400] text-white/70">
              <li>About me</li>
              <li>Services offered</li>
              <li>Case studies</li>
              <li>Get in touch</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="mb-[14px] text-[20px] leading-[28px] tracking-[-0.5px] font-[400] text-white">Support</p>
            <ul className="space-y-[16px] text-[16px] leading-[26px] tracking-[-0.5px] font-[400] text-white/70">
              <li>Free consultation call</li>
              <li>Post-launch support</li>
              <li>Integration guidance</li>
              <li>Frequently asked questions</li>
            </ul>
          </div>
        </div>

        <div className="mt-[40px] flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-[26px] text-center md:items-center md:gap-6 lg:flex-row lg:text-left">
          <p className="text-[16px] font-[400] leading-[16px] tracking-[-0.5px] text-slate-300">
            © 2026 Abhishek Namdev — Frontend developer crafting fast, modern web experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[16px] font-[400] leading-[16px] tracking-[-0.5px] text-slate-300 md:justify-center md:gap-[24px] lg:justify-start">
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