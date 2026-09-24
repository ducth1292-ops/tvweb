import Image from "next/image";
import type { Movie } from "@/lib/movies";

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
      className="group w-[220px] shrink-0 cursor-pointer snap-start text-left transition-transform duration-200 hover:scale-105 sm:w-[240px]"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-md">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          sizes="(min-width: 640px) 240px, 220px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="line-clamp-2 text-sm font-semibold">{movie.title}</p>
          <p className="mt-1 text-xs text-zinc-300">
            {movie.year} · {movie.genres[0]}
          </p>
        </div>
      </div>
    </button>
  );
}