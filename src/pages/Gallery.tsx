import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";

type Category = "all" | "birthday" | "wedding" | "babyShower" | "corporate";

const galleryItems = [
  { id: 1, title: "Soft Pink Birthday",          category: "birthday"   as const },
  { id: 2, title: "White Wedding Arch",           category: "wedding"    as const },
  { id: 3, title: "Neutral Baby Shower",          category: "babyShower" as const },
  { id: 4, title: "Corporate Entrance Setup",     category: "corporate"  as const },
  { id: 5, title: "Pastel Celebration Backdrop",  category: "birthday"   as const },
  { id: 6, title: "Elegant Ceremony Styling",     category: "wedding"    as const },
  { id: 7, title: "Baby Shower Garland",          category: "babyShower" as const },
  { id: 8, title: "Brand Event Display",          category: "corporate"  as const },
];

const categoryGradient: Record<string, string> = {
  birthday:   "from-[#fce4ec] to-[#f8bbd0]",
  wedding:    "from-[#f3e5f5] to-[#e1bee7]",
  babyShower: "from-[#e3f2fd] to-[#c8dff0]",
  corporate:  "from-[#f5eeea] to-[#e9e0db]",
};

export default function Gallery({ t }: any) {
  const filters = [
    { key: "all"        as const, label: t.gallery.all },
    { key: "birthday"   as const, label: t.gallery.birthday },
    { key: "wedding"    as const, label: t.gallery.wedding },
    { key: "babyShower" as const, label: t.gallery.babyShower },
    { key: "corporate"  as const, label: t.gallery.corporate },
  ];

  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-[#f5edf0] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">{t.gallery.eyebrow}</p>
          <h1 className="section-title font-semibold">{t.gallery.title}</h1>
          <p className="mt-5 leading-[1.8] text-[#715d64]">{t.gallery.text}</p>
        </Reveal>

        {/* Filter buttons */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5" delay={60}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              aria-pressed={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? "soft-btn px-5 py-2.5 text-sm font-medium"
                  : "soft-btn-outline px-5 py-2.5 text-sm font-medium"
              }
            >
              {filter.label}
            </button>
          ))}
        </Reveal>

        {/* Grid — keyed to activeFilter so items re-animate on filter change */}
        <div
          key={activeFilter}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {filteredItems.map((item, i) => (
            <article
              key={item.id}
              className="gallery-tile group soft-card overflow-hidden rounded-[2rem]"
              style={{
                animation: "galleryEnter 0.45s cubic-bezier(0.16,1,0.3,1) both",
                animationDelay: `${i * 55}ms`,
              }}
            >
              {/* Image placeholder */}
              <div className="relative overflow-hidden">
                <div
                  className={`h-64 w-full bg-gradient-to-br ${categoryGradient[item.category]}`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#4d3c42]/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/85">
                    {filters.find((f) => f.key === item.category)?.label}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h2 className="luxury-serif text-2xl font-semibold text-[#4d3c42]">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#b796a0]">
                  {filters.find((f) => f.key === item.category)?.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
