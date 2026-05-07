import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/Reveal";
import type { T } from "../content";

export default function ThankYou({ t }: { t: T }) {
  const ty = t.thankYou;

  return (
    <>
    <Helmet>
      <title>Thank You — Air Decor</title>
      <meta name="description" content="Your quote request has been received. We'll be in touch within 24 hours." />
    </Helmet>
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#efe3e8] to-[#f8f2f4] px-5 py-20">
      <div className="hero-blob left-[-4rem] top-10 h-72 w-72 bg-white/40" />
      <div className="hero-blob right-[-4rem] top-24 h-80 w-80 bg-[#f6dbe4]/65" />
      <div className="hero-blob bottom-8 left-1/3 h-60 w-60 bg-white/30" />

      <Reveal className="relative z-10 text-center">
        {/* Check circle */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f6dce5] to-[#ede4ea] shadow-[0_8px_32px_rgba(212,165,179,0.25)]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 16.5l6 6 12-12"
              stroke="#c792a2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="eyebrow mb-4">{ty.eyebrow}</p>
        <h1 className="section-title font-semibold text-[#4d3c42]">{ty.title}</h1>

        <p className="mx-auto mt-6 max-w-lg leading-[1.85] text-[#715d64]">
          {ty.text}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/" className="soft-btn px-8 py-3.5 font-medium">
            {ty.homeBtn}
          </Link>
          <Link to="/gallery" className="soft-btn-outline px-8 py-3.5 font-medium backdrop-blur-sm">
            {ty.galleryBtn}
          </Link>
        </div>
      </Reveal>
    </section>
    </>
  );
}
