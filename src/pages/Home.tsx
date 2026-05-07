import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/Reveal";
import type { T } from "../content";

const packages = (t: T) => [
  { tier: "01", title: t.common.basic,   price: t.common.price1, text: t.home.package1Text },
  { tier: "02", title: t.common.premium, price: t.common.price2, text: t.home.package2Text },
  { tier: "03", title: t.common.luxury,  price: t.common.price3, text: t.home.package3Text },
];

export default function Home({ t }: { t: T }) {
  return (
    <>
      <Helmet>
        <title>Air Decor — Elegant Balloon Decoration Studio</title>
        <meta name="description" content="Soft, airy, and beautifully styled balloon decorations for birthdays, weddings, baby showers, and special events." />
        <meta property="og:title" content="Air Decor — Elegant Balloon Decoration Studio" />
        <meta property="og:description" content="Soft, airy, and beautifully styled balloon decorations for birthdays, weddings, baby showers, and special events." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e9dde2] via-[#eddfe6] to-[#f4ecef]">
        <div className="hero-blob left-[-5rem] top-16 h-80 w-80 bg-white/40" />
        <div className="hero-blob right-[-6rem] top-28 h-96 w-96 bg-[#f6dbe4]/65" />
        <div className="hero-blob bottom-16 left-[28%] h-72 w-72 bg-white/30" />

        {/* Background script word */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 1600 520" className="w-[145vw] max-w-none">
            <text
              x="50%"
              y="52%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="script-font"
              style={{
                fontSize: "320px",
                fill: "rgba(255,255,255,0.18)",
                stroke: "rgba(255,255,255,0.6)",
                strokeWidth: 2.5,
                strokeDasharray: 2600,
                strokeDashoffset: 2600,
                animation:
                  "drawText 7s ease forwards, fillText 2.5s ease forwards 5.5s",
              }}
            >
              AirBloom
            </text>
          </svg>
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-24 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          {/* Left column */}
          <div className="max-w-xl">
            <p className="eyebrow mb-5">{t.home.eyebrow}</p>

            <h1
              className="section-title font-semibold text-[#4d3c42]"
              style={{ lineHeight: 1.04 }}
            >
              {t.home.title}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-[1.85] text-[#715d64] md:text-[1.05rem]">
              {t.home.text}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="soft-btn px-8 py-3.5 font-medium"
              >
                {t.home.primaryBtn}
              </Link>
              <Link
                to="/gallery"
                className="soft-btn-outline px-8 py-3.5 font-medium backdrop-blur-sm"
              >
                {t.home.secondaryBtn}
              </Link>
            </div>
          </div>

          {/* Right column — decorative panel */}
          <div className="hidden justify-end lg:flex">
            <div className="relative h-[490px] w-full max-w-[390px]">
              {/* Main floating card */}
              <div className="float-anim glass-card absolute inset-0 flex flex-col items-center justify-center rounded-[2.8rem] p-8 text-center shadow-[0_28px_88px_rgba(120,90,100,0.14)]">
                <p className="script-font text-[4.5rem] leading-none text-[#c792a2]">
                  Air Decor
                </p>
                <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d4a5b3] to-transparent" />
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.38em] text-[#b796a0]">
                  {t.home.eyebrow}
                </p>

                <div className="mt-9 flex gap-4">
                  {[t.common.basic, t.common.premium, t.common.luxury].map(
                    (label) => (
                      <div
                        key={label}
                        className="rounded-2xl bg-white/55 px-4 py-3 text-center"
                      >
                        <p className="luxury-serif text-lg font-semibold text-[#4d3c42]">
                          {label}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Small accent card */}
              <div className="soft-card absolute -bottom-4 -right-4 rounded-[1.5rem] px-5 py-4 shadow-lg">
                <p className="luxury-serif text-2xl font-semibold italic text-[#4d3c42]">
                  Soft. Elegant. Yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ────────────────────────────────────────────── */}
      <section className="soft-section px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{t.home.packagesEyebrow}</p>
            <h2 className="section-title font-semibold">
              {t.home.packagesTitle}
            </h2>
            <p className="mt-5 leading-[1.8] text-[#715d64]">
              {t.home.packagesText}
            </p>
          </Reveal>

          <Reveal className="mt-14" delay={80}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {packages(t).map((item) => (
                <article
                  key={item.title}
                  className="soft-card flex flex-col rounded-[2rem] p-7"
                >
                  {/* Placeholder image area */}
                  <div className="mb-6 flex h-52 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#f6dce5]/70 to-[#ede4ea]/60">
                    <p className="script-font text-5xl text-[#d4a5b3]">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-[0.7rem] uppercase tracking-[0.26em] text-[#b796a0]">
                    {item.tier}
                  </p>
                  <h3 className="luxury-serif mt-1 text-3xl font-semibold text-[#4d3c42]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#d4a5b3]">
                    {item.price}
                  </p>
                  <p className="mt-4 flex-1 leading-[1.8] text-[#715d64]">
                    {item.text}
                  </p>

                  <Link
                    to="/quote"
                    className="soft-btn mt-7 w-full justify-center px-5 py-3 text-sm font-medium"
                  >
                    {t.home.viewDetails}
                  </Link>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center" delay={120}>
            <Link
              to="/services"
              className="soft-btn-outline inline-flex px-8 py-3.5 text-sm font-medium"
            >
              {t.home.viewAllServices}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#f8f2f5] to-[#efe3e8] px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{t.home.testimonialsEyebrow}</p>
            <h2 className="section-title font-semibold">
              {t.home.testimonialsTitle}
            </h2>
          </Reveal>

          <Reveal className="mt-14" delay={80}>
            <div className="grid gap-6 md:grid-cols-3">
              {t.home.testimonials.map(
                (item) => (
                  <article
                    key={item.name}
                    className="soft-card flex flex-col rounded-[2rem] p-8"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 text-[#d4a5b3]" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.13L8 10.5l-3.708 2.082L5 8.452 2 5.528l4.146-.772L8 1z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-5 flex-1 leading-[1.85] text-[#715d64]">
                      <span className="luxury-serif mr-1 text-3xl leading-none text-[#d4a5b3]">"</span>
                      {item.quote}
                      <span className="luxury-serif ml-1 text-3xl leading-none text-[#d4a5b3]">"</span>
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3 border-t border-[#f0e5e9] pt-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f6dce5] to-[#ede4ea] text-sm font-semibold text-[#c792a2]">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#4d3c42]">{item.name}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#b796a0]">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
