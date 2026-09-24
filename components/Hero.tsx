import Image from "next/image";
import type { Movie } from "@/lib/movies";

export default function Hero({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full">
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-[15%] flex max-w-[1600px] flex-col items-start gap-4 px-6">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          {movie.title}
        </h1>
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded bg-green-600 px-1.5 py-0.5 text-xs font-semibold text-white">
            {movie.match}% Match
          </span>
          <span>{movie.year}</span>
          <span className="rounded border border-zinc-400 px-1.5 py-0.5 text-xs">
            {movie.rating}
          </span>
          <span>{movie.duration}</span>
          <span className="hidden text-zinc-300 sm:inline">
            {movie.genres.join(" · ")}
          </span>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-200">
          In a city that never sleeps, a reluctant hero uncovers a conspiracy
          that could rewrite reality itself. One choice. One chance. One
          horizon.
        </p>
        <div className="mt-2 flex items-center gap-3">
          <button className="flex items-center gap-2 rounded bg-white px-6 py-2.5 font-semibold text-black transition-colors hover:bg-white/80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
            Play
          </button>
          <button className="flex items-center gap-2 rounded bg-zinc-500/50 px-6 py-2.5 font-semibold text-white backdrop-blur transition-colors hover:bg-zinc-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}