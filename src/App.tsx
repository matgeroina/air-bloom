import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";
import About from "./pages/About";
import { content } from "./content";

function PageRoutes({ t }: { t: any }) {
  const location = useLocation();
  return (
    <main id="main-content" key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/"        element={<Home     t={t} />} />
        <Route path="/services" element={<Services t={t} />} />
        <Route path="/gallery"  element={<Gallery  t={t} />} />
        <Route path="/about"    element={<About    t={t} />} />
        <Route path="/quote"    element={<Quote    t={t} />} />
      </Routes>
    </main>
  );
}

export default function App() {
  const [lang, setLang] = useState<"en" | "ru">("en");

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
