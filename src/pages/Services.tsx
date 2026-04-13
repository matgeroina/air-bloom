const services = (t: any) => [
  {
    title: t.common.basic,
    price: "from $150",
    features: [
      t.services.feature1,
      t.services.feature2,
      t.services.feature3,
    ],
  },
  {
    title: t.common.premium,
    price: "from $250",
    features: [
      t.services.feature4,
      t.services.feature5,
      t.services.feature6,
    ],
  },
  {
    title: t.common.luxury,
    price: "from $400",
    features: [
      t.services.feature7,
      t.services.feature8,
      t.services.feature9,
    ],
  },
];

export default function Services({ t }: any) {
  return (
    <section className="soft-section px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">{t.services.eyebrow}</p>
          <h1 className="section-title font-semibold">{t.services.title}</h1>
          <p className="mt-5 leading-7 text-[#715d64]">
            {t.services.text}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services(t).map((item) => (
            <article key={item.title} className="soft-card rounded-[2rem] p-7">
              <div className="mb-5 flex h-52 items-center justify-center rounded-[1.6rem] bg-white/45 text-[#927780]">
                package photo
              </div>

              <h2 className="luxury-serif text-3xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#b796a0]">
                {item.price}
              </p>

              <ul className="mt-5 space-y-3 text-[#715d64]">
                {item.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <button className="soft-btn mt-7 inline-flex px-5 py-3 text-sm font-medium">
                {t.services.inquire}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="soft-card rounded-[2rem] p-7">
            <h3 className="luxury-serif text-3xl font-semibold">{t.services.addOns}</h3>
            <ul className="mt-5 space-y-3 text-[#715d64]">
              <li>• {t.services.addOn1}</li>
              <li>• {t.services.addOn2}</li>
              <li>• {t.services.addOn3}</li>
              <li>• {t.services.addOn4}</li>
            </ul>
          </div>

          <div className="soft-card rounded-[2rem] p-7">
            <h3 className="luxury-serif text-3xl font-semibold">{t.services.designApproach}</h3>
            <p className="mt-5 leading-7 text-[#715d64]">
              {t.services.designText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}