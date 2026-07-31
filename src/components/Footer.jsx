import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

export default function Footer() {
  const { dark } = useTheme();
  const bg = dark ? 'bg-[#030308]' : 'bg-white border-t border-slate-200/80';
  const subtext = dark ? 'text-slate-500' : 'text-slate-600';

  return (
    <footer className={`py-8 px-4 ${bg} relative transition-colors duration-300`}>
      {/* Glow line separator */}
      <div className="glow-line absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-syne text-xl font-extrabold tracking-wide gradient-text">
          Abhishek Namdev
        </a>

        <p className={`${subtext} text-xs flex items-center gap-1.5 font-medium`}>
          Built with <FaHeart className="text-[#FF6EC7] text-xs" /> using React, Framer Motion &amp; Tailwind CSS
        </p>

        <div className="flex gap-4">
          {[
            { icon: <FaGithub />, href: '#', label: 'GitHub' },
            { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
            { icon: <FaTwitter />, href: '#', label: 'Twitter' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              className={`${subtext} hover:text-[#00D4FF] dark:hover:text-[#00D4FF] transition-colors text-base`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
