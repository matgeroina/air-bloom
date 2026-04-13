import { useState } from "react";

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

export default function Quote({ t }: any) {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.fullName}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="input w-full"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
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
                  className="input w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.eventDate}
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  required
                  className="input w-full"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="eventType" className="mb-2 block text-sm text-[#715d64]">
                  {t.quote.eventType}
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
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
                  {t.quote.packageType}
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  required
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

            <button type="submit" className="soft-btn inline-flex px-6 py-3 font-medium">
              {t.quote.submit}
            </button>

            {submitted && (
              <div className="mt-4 rounded-[1.2rem] border border-white/40 bg-white/60 px-5 py-4 text-[#5c484f]">
                {t.quote.submitted}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}