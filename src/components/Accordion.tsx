import { useState } from "react";

interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="soft-card overflow-hidden rounded-[1.6rem]">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className="flex w-full items-start justify-between gap-6 px-7 py-5 text-left"
          >
            <span className="luxury-serif text-xl font-semibold text-[#4d3c42]">
              {item.q}
            </span>
            <span
              className="mt-1 flex-shrink-0 text-[#d4a5b3] transition-transform duration-300"
              style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 4v12M4 10h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>

          <div
            style={{
              maxHeight: openIndex === i ? "320px" : "0",
              overflow: "hidden",
              transition: "max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="px-7 pb-6 leading-[1.85] text-[#715d64]">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
