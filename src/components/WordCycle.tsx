import { useEffect, useState } from "react";

const WORDS = ["beautiful", "considered", "memorable", "timeless"];

export function WordCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-ink py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-baseline justify-center gap-x-3 px-6 text-coffee-foreground">
        <span className="text-xs uppercase tracking-[0.24em] text-coffee-foreground/70">
          Your business deserves a
        </span>
        <span key={index} className="word-cycle font-display text-3xl italic sm:text-4xl">
          {WORDS[index]}
        </span>
        <span className="font-display text-3xl sm:text-4xl">website</span>
      </div>
    </section>
  );
}
