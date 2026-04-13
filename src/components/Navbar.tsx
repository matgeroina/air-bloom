import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-[#4d3c42] underline underline-offset-8"
    : "text-[#6f5a61] hover:text-[#4d3c42] transition";

export default function Navbar({
  lang,
  setLang,
  t,
}: {
  lang: "en" | "ru";
  setLang: (l: "en" | "ru") => void;
  t: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/45 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="luxury-serif text-2xl font-semibold text-[#4d3c42] md:text-3xl"
          >
            Air Decor
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={linkClass}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              {t.nav.services}
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              {t.nav.gallery}
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/quote" className={linkClass}>
              {t.nav.contact}
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            {/* language button */}
            <button
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
              className="rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm text-[#4d3c42] backdrop-blur transition hover:bg-white/80"
            >
              {lang === "en" ? "RU" : "EN"}
            </button>

            {/* desktop button */}
            <Link
              to="/quote"
              className="soft-btn hidden items-center px-5 py-3 text-sm font-medium md:inline-flex"
            >
              {t.nav.quote}
            </Link>

            {/* mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/60 text-[#4d3c42] md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* mobile nav */}
        {isOpen && (
          <div className="mt-4 rounded-[1.8rem] border border-white/40 bg-white/75 p-5 shadow-lg backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-4 text-base">
              <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
                {t.nav.home}
              </NavLink>
              <NavLink to="/services" className={linkClass} onClick={() => setIsOpen(false)}>
                {t.nav.services}
              </NavLink>
              <NavLink to="/gallery" className={linkClass} onClick={() => setIsOpen(false)}>
                {t.nav.gallery}
              </NavLink>
              <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
                About
              </NavLink>
              <NavLink to="/quote" className={linkClass} onClick={() => setIsOpen(false)}>
                {t.nav.contact}
              </NavLink>
            </nav>

            <Link
              to="/quote"
              className="soft-btn mt-5 inline-flex w-full justify-center px-5 py-3 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.quote}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}