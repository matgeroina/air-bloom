import { Link } from "react-router-dom";

export default function Footer({ t }: any) {
  return (
    <footer className="border-t border-white/30 bg-white/35 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="luxury-serif text-3xl font-semibold text-[#4d3c42] transition hover:text-[#c792a2]"
            >
              Air Decor
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-[1.75] text-[#715d64]">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[#b796a0]">
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
          <div>
            <h3 className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[#b796a0]">
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
        <div className="mt-12 border-t border-white/30 pt-6 text-center text-xs text-[#b796a0]">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
