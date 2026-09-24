"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Movie } from "@/lib/movies";

export default function MovieModal({
  movie,
  onClose,
}: {
  movie: Movie | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!movie) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-[#181818] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">{movie.title}</h2>

          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="rounded bg-green-600 px-1.5 py-0.5 text-xs font-semibold text-white">
              {movie.match}% Match
            </span>
            <span>{movie.year}</span>
            <span className="rounded border border-zinc-500 px-1.5 py-0.5 text-xs">
              {movie.rating}
            </span>
            <span>{movie.duration}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="mt-4 leading-relaxed text-zinc-200">
            {movie.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button className="flex items-center gap-2 rounded bg-white px-6 py-2.5 font-semibold text-black transition-colors hover:bg-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
              Play
            </button>
            <button className="flex items-center gap-2 rounded bg-zinc-500/50 px-6 py-2.5 font-semibold text-white backdrop-blur transition-colors hover:bg-zinc-500/40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 2.25A.75.75 0 0 0 11.25 11v5.25a.75.75 0 0 0 1.5 0V11a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
              </svg>
              My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}