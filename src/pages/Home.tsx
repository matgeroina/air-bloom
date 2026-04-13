import { Link } from "react-router-dom";

const packages = (t: any) => [
  {
    title: t.common.basic,
    text: "A soft and simple setup for smaller celebrations.",
    price: "from $150",
  },
  {
    title: t.common.premium,
    text: "A fuller focal arrangement with more styling details.",
    price: "from $250",
  },
  {
    title: t.common.luxury,
    text: "A statement installation for elegant large events.",
    price: "from $400",
  },
];

export default function Home({ t }: any) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e9dde2] to-[#f4ecef]">
        <div className="hero-blob left-[-4rem] top-8 h-80 w-80 bg-white/40" />
        <div className="hero-blob right-[-5rem] top-20 h-96 w-96 bg-[#f6dbe4]/70" />
        <div className="hero-blob bottom-0 left-1/3 h-72 w-72 bg-white/30" />

        {/* background word */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 1600 520" className="w-[145vw] max-w-none">
            <text
              x="50%"
              y="52%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="script-font stroke-white/70"
              style={{
                fontSize: "320px",
                fill: "rgba(255,255,255,20%)",
                strokeWidth: 3,
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

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">{t.home.eyebrow}</p>

            <h1 className="section-title max-w-xl font-semibold text-[#4d3c42]">
              {t.home.title}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#715d64] md:text-lg">
              {t.home.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="soft-btn inline-flex px-7 py-3 font-medium shadow-sm"
              >
                {t.home.primaryBtn}
              </Link>
              <Link
                to="/gallery"
                className="soft-btn-outline inline-flex px-7 py-3 font-medium backdrop-blur-sm"
              >
                {t.home.secondaryBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* packages */}
      <section className="soft-section px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.home.packagesEyebrow}</p>
            <h2 className="section-title font-semibold">
              {t.home.packagesTitle}
            </h2>
            <p className="mt-5 text-[#715d64]">
              {t.home.packagesText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages(t).map((item: any) => (
              <article key={item.title} className="soft-card rounded-[2rem] p-6">
                <div className="mb-5 flex h-52 items-center justify-center rounded-[1.6rem] bg-white/45 text-[#927780]">
                  package image
                </div>
                <h3 className="luxury-serif text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#b796a0]">
                  {item.price}
                </p>
                <p className="mt-4 leading-7 text-[#715d64]">{item.text}</p>
                <button className="soft-btn mt-6 inline-flex px-5 py-3 text-sm font-medium">
                  view details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}