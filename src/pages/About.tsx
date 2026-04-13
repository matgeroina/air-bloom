import { Link } from "react-router-dom";

const values = (t: any) => [
  {
    title: t.about.values.softAestheticTitle,
    text: t.about.values.softAestheticText,
  },
  {
    title: t.about.values.personalApproachTitle,
    text: t.about.values.personalApproachText,
  },
  {
    title: t.about.values.ongoingGrowthTitle,
    text: t.about.values.ongoingGrowthText,
  },
];

const processSteps = (t: any) => [
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

export default function About({ t }: any) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#efe3e8] to-[#f8f2f4] px-5 py-20 md:px-8 lg:px-12">
        <div className="hero-blob left-[-4rem] top-10 h-72 w-72 bg-white/40" />
        <div className="hero-blob right-[-4rem] top-20 h-80 w-80 bg-[#f6dbe4]/70" />
        <div className="hero-blob bottom-0 left-1/3 h-64 w-64 bg-white/30" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow mb-4">{t.about.eyebrow}</p>

            <h1 className="section-title max-w-xl font-semibold text-[#4d3c42]">
              {t.about.title}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#715d64] md:text-lg">
              {t.about.text1}
            </p>

            <p className="mt-5 max-w-lg leading-7 text-[#715d64]">
              {t.about.text2}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="soft-btn inline-flex px-7 py-3 font-medium shadow-sm"
              >
                {t.about.primaryBtn}
              </Link>
              <Link
                to="/gallery"
                className="soft-btn-outline inline-flex px-7 py-3 font-medium backdrop-blur-sm"
              >
                {t.about.secondaryBtn}
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="glass-card flex h-[360px] w-full max-w-[320px] items-center justify-center rounded-[2rem] border border-white/30 text-center text-[#8a7079] shadow-[0_20px_60px_rgba(120,90,100,0.12)] md:h-[460px] md:max-w-[380px]">
              about image
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.about.valuesEyebrow}</p>
            <h2 className="section-title font-semibold">{t.about.valuesTitle}</h2>
            <p className="mt-5 text-[#715d64]">
              {t.about.valuesText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values(t).map((item) => (
              <article key={item.title} className="soft-card rounded-[2rem] p-7">
                <h3 className="luxury-serif text-3xl font-semibold text-[#4d3c42]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#715d64]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1f3] px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-3">{t.about.storyEyebrow}</p>
            <h2 className="section-title font-semibold">{t.about.storyTitle}</h2>

            <p className="mt-6 max-w-2xl leading-7 text-[#715d64]">
              {t.about.storyText1}
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-[#715d64]">
              {t.about.storyText2}
            </p>
          </div>

          <div className="soft-card rounded-[2rem] p-7">
            <p className="eyebrow mb-3">{t.about.whyEyebrow}</p>
            <ul className="space-y-4 text-[#715d64]">
              <li>• {t.about.why1}</li>
              <li>• {t.about.why2}</li>
              <li>• {t.about.why3}</li>
              <li>• {t.about.why4}</li>
              <li>• {t.about.why5}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="soft-section px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{t.about.processEyebrow}</p>
            <h2 className="section-title font-semibold">{t.about.processTitle}</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps(t).map((step) => (
              <article key={step.number} className="soft-card rounded-[2rem] p-7">
                <p className="text-sm uppercase tracking-[0.25em] text-[#b796a0]">
                  {step.number}
                </p>
                <h3 className="luxury-serif mt-3 text-3xl font-semibold text-[#4d3c42]">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-[#715d64]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6eff2] px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-3">{t.about.ctaEyebrow}</p>
          <h2 className="section-title font-semibold">
            {t.about.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#715d64]">
            {t.about.ctaText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="soft-btn inline-flex px-7 py-3 font-medium shadow-sm"
            >
              {t.about.primaryBtn}
            </Link>
            <Link
              to="/services"
              className="soft-btn-outline inline-flex px-7 py-3 font-medium backdrop-blur-sm"
            >
              {t.about.servicesBtn}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}