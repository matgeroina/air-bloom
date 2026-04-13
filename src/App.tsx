import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";
import About from "./pages/About";
import { content } from "./content";


export default function App() {
  const [lang, setLang] = useState<"en" | "ru">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "ru") {
      setLang("ru");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#e9dde2] text-[#4d3c42]">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main>
        <Routes>
  <Route path="/" element={<Home t={t} />} />
  <Route path="/services" element={<Services t={t} />} />
  <Route path="/gallery" element={<Gallery t={t} />} />
  <Route path="/about" element={<About t={t} />} />
  <Route path="/quote" element={<Quote t={t} />} />
</Routes>
      </main>
<Footer t={t} />
    </div>
  );
}