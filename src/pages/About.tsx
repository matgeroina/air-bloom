import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/Reveal";
import type { T } from "../content";

const values = (t: T) => [
  {
    icon: "S",
    title: t.about.values.softAestheticTitle,
    text: t.about.values.softAestheticText,
  },
  {
    icon: "P",
    title: t.about.values.personalApproachTitle,
    text: t.about.values.personalApproachText,
  },
  {
    icon: "G",
    title: t.about.values.ongoingGrowthTitle,
    text: t.about.values.ongoingGrowthText,
  },
];

const processSteps = (t: T) => [
  {
    number: "01",
    title: t.about.process.consultationTitle,
    text: t.about.process.consultationText,
  },
  {
    number: "02",
    title: t.about.process.designDirectionTitle,
    text: t.about.process.designDirectionText,
  },
  {
    number: "03",
    title: t.about.process.refinementTitle,
    text: t.about.process.refinementText,
  },
];

const whyItems = (t: T) => [
  t.about.why1,
  t.about.why2,
  t.about.why3,
  t.about.why4,
  t.about.why5,
];

export default function About({ t }: { t: T }) {
  return (
    <>
      <Helmet>
        <title>About — Air Decor</title>
        <meta name="description" content="Learn about Air Decor — a growing balloon studio focused on soft, elegant, and thoughtfully styled event decor." />
        <meta property="og:title" content="About Air Decor" />
        <meta property="og:description" content="A growing balloon decoration studio with a love for soft palettes, elevated details, and designs that feel light and memorable." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#efe3e8] to-[#f8f2f4] px-5 py-24 md:px-8 lg:px-12">
        <div className="hero-blob left-[-4rem] top-12 h-72 w-72 bg-white/40" />
        <div className="hero-blob right-[-4rem] top-24 h-80 w-80 bg-[#f6dbe4]/65" />
        <div className="hero-blob bottom-0 left-1/3 h-64 w-64 bg-white/28" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow mb-5">{t.about.eyebrow}</p>
            <h1 className="section-title font-semibold text-[#4d3c42]">
              {t.about.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-[1.85] text-[#715d64] md:text-[1.05rem]">
              {t.about.text1}
            </p>
            <p className="mt-5 max-w-lg leading-[1.8] text-[#715d64]">
              {t.about.text2}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/quote" className="soft-btn px-8 py-3.5 font-medium shadow-sm">
                {t.about.primaryBtn}
              </Link>
              <Link to="/gallery" className="soft-btn-outline px-8 py-3.5 font-medium backdrop-blur-sm">
                {t.about.secondaryBtn}
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="float-anim glass-card flex h-[380px] w-full max-w-[340px] items-center justify-center rounded-[2.5rem] shadow-[0_24px_72px_rgba(120,90,100,0.13)] md:h-[460px] md:max-w-[390px]">
              <div className="text-center">
                <p className="script-font text-6xl text-[#c792a2]">Air Decor</p>
                <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#d4a5b3] to-transparent" />
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#b796a0]">
                  {t.about.eyebrow}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{t.about.valuesEyebrow}</p>
            <h2 className="section-title font-semibold">{t.about.valuesTitle}</h2>
            <p className="mt-5 leading-[1.8] text-[#715d64]">{t.about.valuesText}</p>
          </Reveal>

          <Reveal className="mt-14" delay={80}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {values(t).map((item) => (
                <article key={item.title} className="soft-card rounded-[2rem] p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f6dce5] to-[#ede4ea] text-sm font-semibold text-[#c792a2]">
                    {item.icon}
                  </div>
                  <h3 className="luxury-serif text-3xl font-semibold text-[#4d3c42]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-[1.8] text-[#715d64]">{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Story + Why ─────────────────────────────────────────── */}
      <section className="bg-[#f7f1f3] px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="eyebrow mb-4">{t.about.storyEyebrow}</p>
            <h2 className="section-title font-semibold">{t.about.storyTitle}</h2>
            <p className="mt-6 max-w-2xl leading-[1.85] text-[#715d64]">
              {t.about.storyText1}
            </p>
            <p className="mt-5 max-w-2xl leading-[1.8] text-[#715d64]">
              {t.about.storyText2}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="soft-card h-full rounded-[2rem] p-8">
              <p className="eyebrow mb-5">{t.about.whyEyebrow}</p>
              <ul className="space-y-4">
                {whyItems(t).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#715d64]">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#d4a5b3]/20 text-[0.65rem] font-bold text-[#c792a2]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="soft-section px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">{t.about.processEyebrow}</p>
            <h2 className="section-title font-semibold">{t.about.processTitle}</h2>
          </Reveal>

          <Reveal className="mt-14" delay={80}>
            <div className="grid gap-6 lg:grid-cols-3">
              {processSteps(t).map((step) => (
                <article key={step.number} className="soft-card rounded-[2rem] p-8">
                  {/* Number circle */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f6dce5] to-[#ede4ea]">
                    <span className="text-sm font-semibold tracking-widest text-[#c792a2]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="luxury-serif text-3xl font-semibold text-[#4d3c42]">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-[1.8] text-[#715d64]">{step.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#f6eff2] to-[#ece2e6] px-5 py-24 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">{t.about.ctaEyebrow}</p>
          <h2 className="section-title font-semibold">{t.about.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-xl leading-[1.8] text-[#715d64]">
            {t.about.ctaText}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="soft-btn px-8 py-3.5 font-medium shadow-sm">
              {t.about.primaryBtn}
            </Link>
            <Link to="/services" className="soft-btn-outline px-8 py-3.5 font-medium backdrop-blur-sm">
              {t.about.servicesBtn}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
