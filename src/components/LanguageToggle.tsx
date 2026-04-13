import type { Lang } from "../types";

export default function LanguageToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "btn btn-sm bg-pink-300" : "btn btn-sm"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ru")}
        className={lang === "ru" ? "btn btn-sm bg-pink-300" : "btn btn-sm"}
      >
        RU
      </button>
    </div>
  );
}