import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const services = (t: any) => [
  {
    tier: "01",
    title: t.common.basic,
    price: "from $150",
    features: [t.services.feature1, t.services.feature2, t.services.feature3],
    featured: false,
  },
  {
    tier: "02",
    title: t.common.premium,
    price: "from $250",
    features: [t.services.feature4, t.services.feature5, t.services.feature6],
    featured: true,
  },
  {
    tier: "03",
    title: t.common.luxury,
    price: "from $400",
    features: [t.services.feature7, t.services.feature8, t.services.feature9],
    featured: false,
  },
];

export default function Services({ t }: any) {
  return (
    <>
      <section className="soft-section px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">{t.services.eyebrow}</p>
            <h1 className="section-title font-semibold">{t.services.title}</h1>
            <p className="mt-5 max-w-xl leading-[1.8] text-[#715d64]">
              {t.services.text}
            </p>
          </Reveal>

          {/* Package cards */}
          <Reveal className="mt-14" delay={80}>
            <div className="grid gap-6 lg:grid-cols-3">
              {services(t).map((item) => (
                <article
                  key={item.title}
                  className={`relative flex flex-col rounded-[2rem] p-7 ${
                    item.featured
                      ? "glass-card ring-2 ring-[#d4a5b3]/30 shadow-[0_12px_48px_rgba(212,165,179,0.18)]"
                      : "soft-card"
                  }`}
                >
                  {item.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#d4a5b3] px-4 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white shadow-sm">
                      {t.services.popular}
                    </span>
                  )}

                  {/* Image placeholder */}
                  <div
                    className={`mb-6 flex h-52 items-center justify-center rounded-[1.5rem] ${
                      item.featured
                        ? "bg-gradient-to-br from-[#f6dce5]/80 to-[#ede4ea]/70"
                        : "bg-white/45"
                    }`}
                  >
                    <p className="script-font text-4xl text-[#d4a5b3]">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-[0.7rem] uppercase tracking-[0.26em] text-[#b796a0]">
                    {item.tier}
                  </p>
                  <h2 className="luxury-serif mt-1 text-3xl font-semibold text-[#4d3c42]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#d4a5b3]">
                    {item.price}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[#715d64]">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#d4a5b3]/20 text-[0.65rem] font-bold text-[#c792a2]">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/quote"
                    className={`mt-8 w-full justify-center px-5 py-3 text-sm font-medium ${
                      item.featured ? "soft-btn" : "soft-btn-outline"
                    }`}
                  >
                    {t.services.inquire}
                  </Link>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Bottom info cards */}
          <Reveal className="mt-10" delay={60}>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="soft-card rounded-[2rem] p-8">
                <h3 className="luxury-serif text-3xl font-semibold text-[#4d3c42]">
                  {t.services.addOns}
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    t.services.addOn1,
                    t.services.addOn2,
                    t.services.addOn3,
                    t.services.addOn4,
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#715d64]">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4a5b3]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="soft-card rounded-[2rem] p-8">
                <h3 className="luxury-serif text-3xl font-semibold text-[#4d3c42]">
                  {t.services.designApproach}
                </h3>
                <p className="mt-5 leading-[1.8] text-[#715d64]">
                  {t.services.designText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-gradient-to-r from-[#f0e3e8] via-[#f7f0f3] to-[#f0e3e8] px-5 py-16 md:px-8 lg:px-12">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="eyebrow mb-2">{t.about.ctaEyebrow}</p>
            <p className="luxury-serif text-2xl font-semibold text-[#4d3c42] md:text-3xl">
              {t.about.ctaTitle}
            </p>
          </div>
          <Link
            to="/quote"
            className="soft-btn flex-shrink-0 px-8 py-3.5 font-medium"
          >
            {t.about.primaryBtn}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
