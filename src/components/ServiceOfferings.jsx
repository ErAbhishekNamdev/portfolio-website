import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { SERVICES_DATA, FILTER_TABS } from './servicesData';

export default function ServiceOfferings({ dark }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => {
          if (activeFilter === 'optimization') {
            return s.category === 'optimization' || s.category === 'devops';
          }
          return s.category === activeFilter;
        });

  return (
    <div>
      {/* Intro */}
      <header className="mx-auto mb-10 max-w-2xl 2xl:max-w-3xl text-center">
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            dark ? 'text-sky-400' : 'text-sky-700'
          }`}
        >
          Services & Pricing
        </p>
        <h2
          className={`font-syne text-[1.75rem] font-extrabold leading-[1.12] tracking-tight sm:text-4xl 2xl:text-5xl ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
        >
          What I Can Build For You
        </h2>
        <p className={`mt-3 text-sm leading-relaxed sm:text-[15px] 2xl:text-base ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          Frontend & UI engineering — React, Next.js, and performance work for startups that need
          sharp, high-converting web products.
        </p>
      </header>

      {/* Filters — underline tabs, centered */}
      <div
        className={`mx-auto mb-10 flex max-w-fit justify-center gap-1 overflow-x-auto border-b pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dark ? 'border-white/10' : 'border-slate-200'
        }`}
        role="tablist"
        aria-label="Service categories"
      >
        {FILTER_TABS.map((tab) => {
          const active = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative shrink-0 px-3.5 pb-3 pt-1 text-[13px] font-semibold transition-colors sm:px-4 ${
                active
                  ? dark
                    ? 'text-sky-300'
                    : 'text-sky-700'
                  : dark
                    ? 'text-slate-500 hover:text-slate-300'
                    : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
              {active && (
                <motion.span
                  layoutId="services-filter-line"
                  className={`absolute inset-x-2 -bottom-px h-0.5 rounded-full ${
                    dark ? 'bg-sky-400' : 'bg-sky-600'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-5 2xl:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                layout
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, delay: idx * 0.04 }}
                className={`group flex flex-col rounded-2xl border p-5 sm:p-6 ${
                  dark
                    ? 'border-white/[0.08] bg-[#0C121C] hover:border-sky-400/25'
                    : 'border-slate-200/80 bg-white hover:border-sky-300/80'
                } transition-colors duration-300`}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base ${
                        dark
                          ? 'bg-sky-500/10 text-sky-400 ring-1 ring-sky-400/20'
                          : 'bg-sky-50 text-sky-700 ring-1 ring-sky-200'
                      }`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <span
                        className={`font-mono text-[10px] font-medium tracking-wider ${
                          dark ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`mt-0.5 text-[15px] font-bold leading-snug sm:text-base ${
                          dark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`shrink-0 text-right font-mono text-[11px] font-semibold leading-tight sm:text-xs ${
                      dark ? 'text-sky-400' : 'text-sky-700'
                    }`}
                  >
                    {service.price}
                  </p>
                </div>

                <p className={`mb-4 text-[13px] leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                <ul className="mb-5 flex flex-1 flex-col gap-2">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCheck
                        className={`mt-1 shrink-0 text-[9px] ${dark ? 'text-sky-400' : 'text-sky-600'}`}
                      />
                      <span className={`text-[12.5px] leading-snug ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto flex items-center justify-between gap-3 border-t pt-4 ${
                    dark ? 'border-white/[0.06]' : 'border-slate-100'
                  }`}
                >
                  <p
                    className={`truncate text-[11px] ${dark ? 'text-slate-500' : 'text-slate-400'}`}
                    title={service.tech.join(' · ')}
                  >
                    {service.tech.slice(0, 3).join(' · ')}
                  </p>
                  <a
                    href="/#contact"
                    className={`inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold transition group-hover:gap-2.5 ${
                      dark ? 'text-sky-400 hover:text-sky-300' : 'text-sky-700 hover:text-sky-900'
                    }`}
                  >
                    Get quote
                    <FaArrowRight className="text-[9px]" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
