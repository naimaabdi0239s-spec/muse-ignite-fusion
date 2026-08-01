import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Amazing all around. Very quick to respond to requests and coordinate with me, very accurate interpretation of my wants, clearly a result of thorough planning. Very receptive to my major and minor changes, and delivered an amazing final product. Would work with again!",
    name: "Tobias",
    role: "Tech Support For Everyone",
  },
  {
    quote:
      "Truly amazing work! Built me a website straight out of my vision and had it running within 2 days. Definitely would recommend.",
    name: "Keith",
    role: "Freelance client",
  },
  {
    quote:
      "Working with Muse was such a great experience. They really took the time to understand what I wanted and brought my vision to life better than I imagined. The website looks amazing, feels professional, and makes my business look so much more put together. I couldn't be happier with how it turned out.",
    name: "Mona",
    role: "Former client",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 3000);
    return () => clearInterval(id);
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 text-center">
      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
        Kind words from our clients
      </p>
      <blockquote
        key={index}
        className="fade-in-soft mt-5 font-display text-xl italic leading-snug sm:text-2xl"
      >
        &ldquo;{active.quote}&rdquo;
      </blockquote>
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {active.name} &middot; {active.role}
      </p>
      <div className="mt-5 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
