import { useState } from "react";

const FAQS = [
  {
    q: "How long will my project take?",
    a: "Most websites launch in one to two weeks. A refresh is usually a week and a logo around five days, depending on how quickly feedback comes back.",
  },
  {
    q: "What is included in a website project?",
    a: "Structure, copy layout, design, the full responsive build, basic SEO setup and launch. You get a finished, live site, not a template you have to finish yourself.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Aftercare is optional and priced as a small monthly fee. If you would rather maintain the site yourself, we hand over everything you need.",
  },
  {
    q: "How does pricing and payment work?",
    a: "Pricing is set out clearly before we begin, with a deposit to start and the balance on launch. No retainers you did not ask for, no surprise invoices.",
  },
  {
    q: "Do we need to meet in person?",
    a: "No. Muse is a remote studio and everything runs over calls, email and shared previews, wherever you are based.",
  },
  {
    q: "Can I get just a logo, without a full site?",
    a: "Absolutely. A wordmark, palette and type system can be delivered on its own, usually in about five days.",
  },
];

export function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="font-display text-4xl">FAQs</h2>
      <div className="mt-8 divide-y divide-border border-t border-border">
        {FAQS.map((item, i) => (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="font-display text-lg">{item.q}</span>
              <span className="text-accent">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <p className="fade-in-soft pb-4 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
