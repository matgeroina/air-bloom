import { Link } from "react-router-dom";

export default function Footer({ t }: any) {
  return (
    <footer className="border-t border-white/30 bg-white/35 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8 lg:px-12">
        
        {/* brand */}
        <div>
          <h2 className="luxury-serif text-3xl font-semibold">Air Decor</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#715d64]">
            {t.footer.description}
          </p>
        </div>

        {/* navigation */}
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b796a0]">
            {t.footer.navigation}
          </h3>
          <div className="flex flex-col gap-3 text-[#715d64]">
            <Link to="/">{t.nav.home}</Link>
            <Link to="/services">{t.nav.services}</Link>
            <Link to="/gallery">{t.nav.gallery}</Link>
            <Link to="/quote">{t.nav.quote}</Link>
          </div>
        </div>

        {/* contact */}
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b796a0]">
            {t.footer.contact}
          </h3>
          <div className="space-y-3 text-[#715d64]">
            <p>Madison, Wisconsin</p>
            <p>hello@airdecorstudio.com</p>
            <p>(555) 123-4567</p>
          </div>
        </div>

      </div>
    </footer>
  );
}