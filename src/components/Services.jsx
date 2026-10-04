import { useTheme } from '../ThemeContext';
import ServiceOfferings from './ServiceOfferings';
import ServicePackages from './ServicePackages';

export default function Services({ isFullPage = false }) {
  const { dark } = useTheme();

  return (
    <section
      id="services"
      className={`relative overflow-hidden px-4 transition-colors duration-300 sm:px-6 lg:px-8 ${
        isFullPage ? 'py-12 md:py-16' : 'py-14 md:py-20'
      } ${dark ? 'bg-[#080B11]' : 'bg-[#EEF2F7]'}`}
    >
      {/* Atmosphere — soft sky wash, not flat */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className={`absolute -left-24 top-0 h-72 w-72 rounded-full blur-3xl ${
            dark ? 'bg-sky-500/10' : 'bg-sky-400/20'
          }`}
        />
        <div
          className={`absolute -right-16 top-40 h-64 w-64 rounded-full blur-3xl ${
            dark ? 'bg-cyan-400/5' : 'bg-slate-300/40'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 h-px ${
            dark
              ? 'bg-gradient-to-r from-transparent via-sky-500/30 to-transparent'
              : 'bg-gradient-to-r from-transparent via-sky-400/40 to-transparent'
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-[1120px] 2xl:max-w-[1680px] 2xl:px-12">
        <ServiceOfferings dark={dark} />
        <ServicePackages dark={dark} />
      </div>
    </section>
  );
}
