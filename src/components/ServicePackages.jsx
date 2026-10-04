import { useState } from 'react';
import { Accordion, AccordionItem } from '@heroui/react';
import { FaArrowRight, FaCheck, FaWhatsapp } from 'react-icons/fa';
import { PACKAGES, FAQS } from './servicesData';

export default function ServicePackages({ dark }) {
  return (
    <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
      {/* Packages */}
      <div>
        <header className="mx-auto mb-8 max-w-xl 2xl:max-w-2xl text-center">
          <p
            className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${
              dark ? 'text-sky-400' : 'text-sky-700'
            }`}
          >
            Packages
          </p>
          <h3
            className={`font-syne text-xl font-extrabold tracking-tight sm:text-2xl 2xl:text-3xl ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Bundled delivery, clear scope
          </h3>
          <p className={`mt-2 text-sm 2xl:text-base ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Pick a package when you want a fixed path — landing, product, or full suite.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border p-5 transition-colors duration-300 ${
                pkg.popular
                  ? dark
                    ? 'border-sky-400/45 bg-gradient-to-b from-sky-500/10 to-[#0C121C]'
                    : 'border-sky-400 bg-gradient-to-b from-sky-50 to-white'
                  : dark
                    ? 'border-white/[0.08] bg-[#0C121C]'
                    : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                    pkg.popular
                      ? dark
                        ? 'text-sky-300'
                        : 'text-sky-700'
                      : dark
                        ? 'text-slate-500'
                        : 'text-slate-400'
                  }`}
                >
                  {pkg.badge}
                </span>
                {pkg.popular && (
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                      dark ? 'bg-sky-400 text-slate-950' : 'bg-sky-600 text-white'
                    }`}
                  >
                    Popular
                  </span>
                )}
              </div>

              <h4 className={`text-[15px] font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                {pkg.name}
              </h4>
              <p
                className={`mt-1.5 font-mono text-sm font-semibold ${
                  dark ? 'text-sky-400' : 'text-sky-700'
                }`}
              >
                {pkg.price}
              </p>
              <p className={`mt-2 mb-4 text-[12.5px] leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {pkg.desc}
              </p>

              <ul className="mb-5 flex flex-1 flex-col gap-2">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <FaCheck
                      className={`mt-0.5 shrink-0 text-[9px] ${dark ? 'text-sky-400' : 'text-sky-600'}`}
                    />
                    <span className={`text-[12px] leading-snug ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`mt-auto block rounded-xl py-2.5 text-center text-[12px] font-bold transition ${
                  pkg.popular
                    ? dark
                      ? 'bg-sky-400 text-slate-950 hover:bg-sky-300'
                      : 'bg-sky-600 text-white hover:bg-sky-500'
                    : dark
                      ? 'bg-white/[0.06] text-white hover:bg-white/10'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Select package
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-12">
        <header className="lg:pt-1">
          <p
            className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${
              dark ? 'text-sky-400' : 'text-sky-700'
            }`}
          >
            FAQ
          </p>
          <h3
            className={`font-syne text-xl font-extrabold tracking-tight sm:text-2xl ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Before you reach out
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Timeline, support, design fidelity, and payment — the usual questions, answered straight.
          </p>
        </header>

        <Accordion
          variant="splitted"
          selectionMode="single"
          defaultExpandedKeys={['0']}
          itemClasses={{
            base: [
              'rounded-xl! shadow-none!',
              dark
                ? 'border border-white/[0.08] bg-[#0C121C] data-[open=true]:border-sky-400/35'
                : 'border border-slate-200 bg-white data-[open=true]:border-sky-300',
            ].join(' '),
            title: [
              'text-[13px] font-semibold sm:text-sm',
              dark ? 'text-white' : 'text-slate-900',
            ].join(' '),
            trigger: 'px-4 py-3.5 sm:px-5',
            content: [
              'px-4 pb-4 pt-0 text-[13px] leading-relaxed sm:px-5',
              dark ? 'text-slate-400' : 'text-slate-600',
            ].join(' '),
            indicator: dark ? 'text-sky-400' : 'text-sky-600',
          }}
          className="gap-2.5 px-0"
        >
          {FAQS.map((faq, idx) => (
            <AccordionItem key={String(idx)} aria-label={faq.q} title={faq.q}>
              {faq.a}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Bottom CTA strip */}
      <CtaStrip dark={dark} />
    </div>
  );
}

function CtaStrip({ dark }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('er.abhisheknamdev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      className={`flex flex-col items-start justify-between gap-6 rounded-2xl border px-5 py-6 sm:flex-row sm:items-center sm:px-7 sm:py-7 ${
        dark
          ? 'border-sky-400/20 bg-gradient-to-r from-sky-500/[0.08] via-[#0C121C] to-[#0C121C]'
          : 'border-sky-200 bg-gradient-to-r from-sky-50 via-white to-white'
      }`}
    >
      <div className="max-w-lg">
        <h3
          className={`font-syne text-lg font-extrabold tracking-tight sm:text-xl ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Let&apos;s build something that converts
        </h3>
        <p className={`mt-1.5 text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          Drop a note — I&apos;ll reply with scope, timeline, and a clear quote.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href="/#contact"
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-bold transition ${
            dark
              ? 'bg-sky-400 text-slate-950 hover:bg-sky-300'
              : 'bg-sky-600 text-white hover:bg-sky-500'
          }`}
        >
          Start a project
          <FaArrowRight className="text-[10px]" />
        </a>
        <a
          href="https://wa.me/917024073871"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition ${
            dark
              ? 'border-white/12 text-white hover:bg-white/[0.06]'
              : 'border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}
        >
          <FaWhatsapp className="text-emerald-500" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className={`inline-flex items-center rounded-xl border px-4 py-2.5 text-[13px] font-medium transition ${
            dark
              ? 'border-white/12 text-slate-300 hover:text-white'
              : 'border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
    </div>
  );
}
