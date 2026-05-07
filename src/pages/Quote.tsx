import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "../lib/supabase";
import type { T } from "../content";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  packageType: string;
  colors: string;
  notes: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  packageType: "",
  colors: "",
  notes: "",
};

export default function Quote({ t }: { t: T }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.from("quote_requests").insert({
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone || null,
      event_type: formData.eventType,
      event_date: formData.eventDate,
      location: formData.location || null,
      package_type: formData.packageType,
      colors: formData.colors || null,
      notes: formData.notes || null,
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      navigate("/thank-you");
    }
  }

  return (
    <>
    <Helmet>
      <title>Get a Quote — Air Decor</title>
      <meta name="description" content="Request a personalised balloon decoration quote for your event. Tell us about your vision and we'll get back to you within 24 hours." />
      <meta property="og:title" content="Get a Quote — Air Decor" />
      <meta property="og:description" content="Request a quote for your balloon decoration. We respond within 24 hours." />
      <meta property="og:type" content="website" />
    </Helmet>
    <section className="soft-section px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">{t.quote.eyebrow}</p>
          <h1 className="section-title font-semibold">{t.quote.title}</h1>
          <p className="mt-5 max-w-xl leading-7 text-[#715d64]">
            {t.quote.text}
          </p>

          <div className="soft-card mt-8 rounded-[2rem] p-7">
            <h2 className="luxury-serif text-3xl font-semibold">{t.quote.whatWeAsk}</h2>
            <ul className="mt-5 space-y-3 text-[#715d64]">
              <li>• {t.quote.ask1}</li>
              <li>• {t.quote.ask2}</li>
              <li>• {t.quote.ask3}</li>
              <li>• {t.quote.ask4}</li>
            </ul>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-7 md:p-8">
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            aria-label={t.quote.title}
            noValidate
          >
            <p className="text-xs text-[#b796a0]">
              <span aria-hidden="true">*</span>{" "}
              <span>{t.quote.requiredNote}</span>
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.fullName} <span aria-hidden="true" className="text-[#c792a2]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  autoComplete="name"
                  className="input w-full"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.email} <span aria-hidden="true" className="text-[#c792a2]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  className="input w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="input w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.eventDate} <span aria-hidden="true" className="text-[#c792a2]">*</span>
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  required
                  aria-required="true"
                  min={new Date().toISOString().split("T")[0]}
                  className="input w-full"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="eventType" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.eventType} <span aria-hidden="true" className="text-[#c792a2]">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  aria-required="true"
                  className="select w-full"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="">{t.quote.selectEvent}</option>
                  <option value="Birthday">{t.gallery.birthday}</option>
                  <option value="Wedding">{t.gallery.wedding}</option>
                  <option value="Baby Shower">{t.gallery.babyShower}</option>
                  <option value="Corporate">{t.gallery.corporate}</option>
                </select>
              </div>

              <div>
                <label htmlFor="packageType" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.packageType} <span aria-hidden="true" className="text-[#c792a2]">*</span>
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  required
                  aria-required="true"
                  className="select w-full"
                  value={formData.packageType}
                  onChange={handleChange}
                >
                  <option value="">{t.quote.selectPackage}</option>
                  <option value="Basic">{t.common.basic}</option>
                  <option value="Premium">{t.common.premium}</option>
                  <option value="Luxury">{t.common.luxury}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="mb-2 block text-sm text-[#715d64]">
                {t.quote.location}
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="input w-full"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="colors" className="mb-2 block text-sm text-[#715d64]">
                {t.quote.colors}
              </label>
              <input
                id="colors"
                name="colors"
                type="text"
                className="input w-full"
                value={formData.colors}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="notes" className="mb-2 block text-sm text-[#715d64]">
                {t.quote.notes}
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                className="textarea w-full"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            {status === "error" && (
              <div role="alert" className="rounded-[1.2rem] border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                {t.quote.errorMsg} {errorMsg && `(${errorMsg})`}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              aria-disabled={status === "loading"}
              className="soft-btn inline-flex items-center gap-2 px-6 py-3 font-medium disabled:opacity-60"
            >
              {status === "loading" && (
                <span
                  className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                  aria-hidden="true"
                />
              )}
              {status === "loading" ? t.quote.submitting : t.quote.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
