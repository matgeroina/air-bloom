import { Link } from "react-router-dom";
import type { T } from "../content";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.135-1.867 3.135-4.563 0-2.387-1.715-4.056-4.163-4.056-2.835 0-4.498 2.126-4.498 4.323 0 .856.33 1.772.741 2.272a.3.3 0 01.069.287c-.076.315-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"
      fill="currentColor"
    />
  </svg>
);

export default function Footer({ t }: { t: T }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/30 bg-white/35 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="luxury-serif text-3xl font-semibold text-[#4d3c42] transition hover:text-[#c792a2]"
            >
              Air Decor
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-[1.75] text-[#715d64]">
              {t.footer.description}
            </p>

            {/* Social */}
            <div className="mt-6">
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.26em] text-[#b796a0]">
                {t.footer.followUs}
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/55 text-[#715d64] transition hover:bg-white/85 hover:text-[#c792a2]"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  aria-label="Pinterest"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/55 text-[#715d64] transition hover:bg-white/85 hover:text-[#c792a2]"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-[0.68rem] uppercase tracking-[0.26em] text-[#b796a0]">
              {t.footer.navigation}
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-[#715d64]">
              <Link to="/"         className="transition hover:text-[#4d3c42]">{t.nav.home}</Link>
              <Link to="/services" className="transition hover:text-[#4d3c42]">{t.nav.services}</Link>
              <Link to="/gallery"  className="transition hover:text-[#4d3c42]">{t.nav.gallery}</Link>
              <Link to="/about"    className="transition hover:text-[#4d3c42]">{t.nav.about}</Link>
              <Link to="/quote"    className="transition hover:text-[#4d3c42]">{t.nav.quote}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="mb-5 text-[0.68rem] uppercase tracking-[0.26em] text-[#b796a0]">
              {t.footer.contact}
            </h3>
            <div className="space-y-3 text-sm text-[#715d64]">
              <p>Madison, Wisconsin</p>
              <a
                href="mailto:hello@airdecorstudio.com"
                className="block transition hover:text-[#4d3c42]"
              >
                hello@airdecorstudio.com
              </a>
              <a
                href="tel:+15551234567"
                className="block transition hover:text-[#4d3c42]"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/30 pt-6 text-xs text-[#b796a0] sm:flex-row">
          <p>© {year} {t.footer.copyright}</p>
          <p className="luxury-serif italic text-[#d4a5b3]">Soft. Elegant. Yours.</p>
        </div>
      </div>
    </footer>
  );
}
