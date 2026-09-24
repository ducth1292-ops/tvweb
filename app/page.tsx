"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import MovieModal from "@/components/MovieModal";
import { heroMovie, rows } from "@/lib/movies";
import type { Movie } from "@/lib/movies";

export default function Home() {
  const [selected, setSelected] = useState<Movie | null>(null);

  return (
    <div className="relative min-h-screen bg-[#141414]">
      <Navbar />
      <main>
        <Hero movie={heroMovie} />
        {rows.map((row) => (
          <MovieRow
            key={row.title}
            title={row.title}
            items={row.items}
            onSelect={setSelected}
          />
        ))}
        <footer className="mt-16 px-6 pb-10 text-sm text-zinc-500">
          <p>
            Questions? Call 000-800-919-1743
          </p>
          <p className="mt-4">
            © 2026 NextFlex — a demo built with Next.js 16, React 19 and
            Tailwind CSS.
          </p>
        </footer>
      </main>
      <MovieModal movie={selected} onClose={() => setSelected(null)} />
    </div>
  );
}