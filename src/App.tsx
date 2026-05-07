import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";
import About from "./pages/About";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import { content, type T } from "./content";
import type { Lang } from "./types";
import { ScrollToTop } from "./components/ScrollToTop";

function PageRoutes({ t }: { t: T }) {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <main id="main-content" key={location.pathname} className="page-enter">
        <Routes location={location}>
          <Route path="/"          element={<Home      t={t} />} />
          <Route path="/services"  element={<Services  t={t} />} />
          <Route path="/gallery"   element={<Gallery   t={t} />} />
          <Route path="/about"     element={<About     t={t} />} />
          <Route path="/quote"     element={<Quote     t={t} />} />
          <Route path="/thank-you" element={<ThankYou  t={t} />} />
          <Route path="*"          element={<NotFound  t={t} />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "ru") setLang("ru");
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#e9dde2] text-[#4d3c42]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:text-[#4d3c42] focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar lang={lang} setLang={setLang} t={t} />
      <PageRoutes t={t} />
      <Footer t={t} />
    </div>
  );
}
