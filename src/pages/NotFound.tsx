import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { T } from "../content";

export default function NotFound({ t }: { t: T }) {
  const n = t.notFound;

  return (
    <>
    <Helmet>
      <title>Page Not Found — Air Decor</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#efe3e8] to-[#f8f2f4] px-5 py-20">
      <div className="hero-blob left-[-4rem] top-10 h-72 w-72 bg-white/40" />
      <div className="hero-blob right-[-4rem] top-24 h-80 w-80 bg-[#f6dbe4]/65" />
      <div className="hero-blob bottom-8 left-1/3 h-60 w-60 bg-white/30" />

      <div className="relative z-10 text-center">
        <p
          className="script-font leading-none text-[#d4a5b3]/55"
          style={{ fontSize: "clamp(7rem, 22vw, 14rem)" }}
        >
          {n.label}
        </p>

        <h1 className="luxury-serif -mt-3 text-4xl font-semibold text-[#4d3c42] md:text-5xl">
          {n.title}
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-[1.85] text-[#715d64]">
          {n.text}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/" className="soft-btn px-8 py-3.5 font-medium">
            {n.homeBtn}
          </Link>
          <Link to="/gallery" className="soft-btn-outline px-8 py-3.5 font-medium backdrop-blur-sm">
            {n.galleryBtn}
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
