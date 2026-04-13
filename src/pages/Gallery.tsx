import { useMemo, useState } from "react";

type Category = "all" | "birthday" | "wedding" | "babyShower" | "corporate";

const galleryItems = [
  { id: 1, title: "Soft Pink Birthday", category: "birthday" as const },
  { id: 2, title: "White Wedding Arch", category: "wedding" as const },
  { id: 3, title: "Neutral Baby Shower", category: "babyShower" as const },
  { id: 4, title: "Corporate Entrance Setup", category: "corporate" as const },
  { id: 5, title: "Pastel Celebration Backdrop", category: "birthday" as const },
  { id: 6, title: "Elegant Ceremony Styling", category: "wedding" as const },
  { id: 7, title: "Baby Shower Garland", category: "babyShower" as const },
  { id: 8, title: "Brand Event Display", category: "corporate" as const },
];

export default function Gallery({ t }: any) {
  const filters = [
    { key: "all" as const, label: t.gallery.all },
    { key: "birthday" as const, label: t.gallery.birthday },
    { key: "wedding" as const, label: t.gallery.wedding },
    { key: "babyShower" as const, label: t.gallery.babyShower },
    { key: "corporate" as const, label: t.gallery.corporate },
  ];

  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-[#f5edf0] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">{t.gallery.eyebrow}</p>
          <h1 className="section-title font-semibold">{t.gallery.title}</h1>
          <p className="mt-5 leading-7 text-[#715d64]">
            {t.gallery.text}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? "soft-btn px-5 py-3 text-sm font-medium"
                  : "soft-btn-outline px-5 py-3 text-sm font-medium"
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="gallery-tile soft-card overflow-hidden rounded-[2rem]"
            >
              <div className="flex h-72 items-center justify-center bg-white/40 text-[#927780]">
                {t.gallery.placeholder}
              </div>

              <div className="p-5">
                <h2 className="luxury-serif text-2xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#b796a0]">
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