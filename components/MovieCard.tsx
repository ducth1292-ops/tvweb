import Image from "next/image";
import type { Movie } from "@/lib/movies";

function StarRating({ match }: { match: number }) {
  const filled = Math.round((match / 100) * 5);
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${filled} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 ${
            i < filled ? "fill-amber-400" : "fill-zinc-700"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function MovieCard({
  movie,
  onSelect,
}: {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}) {
  return (
    <button
      onClick={() => onSelect(movie)}
      className="group relative w-[160px] shrink-0 snap-start overflow-hidden rounded-xl text-left transition-all duration-300 hover:z-10 hover:scale-[1.05] hover:shadow-[0_8px_40px_rgba(0,0,0,0.8)] sm:w-[200px] md:w-[220px] lg:w-auto lg:shrink lg:hover:scale-[1.03]"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-800">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 220px, (min-width: 640px) 200px, 160px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-2.5 top-2.5 rounded-md bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
          {movie.match}% Match
        </span>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <StarRating match={movie.match} />
          <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-white drop-shadow sm:text-base lg:text-lg">
            {movie.title}
          </h3>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300 sm:text-xs">
            {movie.year} · {movie.rating} · {movie.duration}
          </p>

          <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100">
            <p className="line-clamp-3 text-xs leading-relaxed text-zinc-300">
              {movie.description}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white">
              More Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-red-600/60" />
    </button>
  );
}