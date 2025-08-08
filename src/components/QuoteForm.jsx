import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function TripInquirySection() {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const sheetURL = "https://sheet.best/api/sheets/YOUR_SHEET_ID"; // opcional

  const send = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    if (!data.name || !data.email || !data.phone) {
      setStatus({ type: "error", msg: "Please fill name, email, and phone." });
      return;
    }

    data.date_submitted = new Date().toISOString();
    data.source = "Trip Inquiry Modal";

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_PUBLIC_KEY"
      );

      if (sheetURL && !sheetURL.includes("YOUR_SHEET_ID")) {
        await fetch(sheetURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      setStatus({ type: "success", msg: "Thanks! We’ll reach out shortly." });
      formRef.current?.reset();
      setTimeout(() => {
        setOpen(false);
        setStatus({ type: "", msg: "" });
      }, 1200);
    } catch (err) {
      setStatus({ type: "error", msg: "Couldn’t send. Please try again." });
    }
  };

  return (
    <>
      {/* CTA con fondo */}
      <section
        id="contact"
        className="relative py-24 px-6"
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/cta.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Next Unforgettable Getaway?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Whether you're dreaming of a group trip to Mexico or a personalized Caribbean escape, let's make it happen. Start planning your stress-free, all-inclusive vacation today.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="inline-block bg-[#F2BE22] text-[#2b2973] font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"
          >
            Start your Trip Inquiry
          </button>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-[#2b2973]">Trip Inquiry</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form ref={formRef} onSubmit={send} className="p-6 grid gap-5">
              {/* Básico */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name*"
                  className="p-4 rounded-lg border border-gray-300"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  className="p-4 rounded-lg border border-gray-300"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="p-4 rounded-lg border border-gray-300"
                required
              />

              {/* Contexto general */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination (Mexico, DR, Jamaica, etc.)"
                  className="p-4 rounded-lg border border-gray-300"
                />
                <input
                  type="text"
                  name="group_size"
                  placeholder="Group size (e.g. 6 adults, 2 kids)"
                  className="p-4 rounded-lg border border-gray-300"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="date_window"
                  placeholder="Dates or window (e.g. Jun 10–17)"
                  className="p-4 rounded-lg border border-gray-300"
                />
                <select
                  name="trip_type"
                  className="p-4 rounded-lg border border-gray-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Trip type (optional)
                  </option>
                  <option value="group">Group</option>
                  <option value="family">Family</option>
                  <option value="romance">Romance</option>
                  <option value="friends">Friends</option>
                  <option value="corporate">Corporate</option>
                  <option value="solo">Solo</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us briefly about budget, resort style, or any must-haves."
                className="p-4 rounded-lg border border-gray-300"
                rows="4"
              />

              {/* anti-bot */}
              <input type="text" name="company" className="hidden" tabIndex="-1" autoComplete="off" />

              {/* Consentimiento */}
              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input type="checkbox" name="consent" className="mt-1 accent-[#2b2973]" required />
                I agree to be contacted by Group Travel Co about my inquiry.
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="bg-[#2b2973] hover:bg-[#221f5c] text-white py-3 px-6 rounded-lg transition"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? "Sending..." : "Send Request"}
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>

              {status.msg && (
                <p
                  className={`text-sm ${
                    status.type === "error" ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {status.msg}
                </p>
              )}

              <p className="text-center text-xs text-gray-500">
                Based in St. Louis, MO · Serving the Midwest & beyond
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
