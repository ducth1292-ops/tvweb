import MovieCard from "./MovieCard";
import type { Movie } from "@/lib/movies";

export default function MovieRow({
  title,
  items,
  onSelect,
}: {
  title: string;
  items: Movie[];
  onSelect: (movie: Movie) => void;
}) {
  return (
    <section className="relative -mt-10 px-6">
      <h2 className="mb-3 text-lg font-semibold sm:text-xl">{title}</h2>
      <div className="flex snap-x gap-3 overflow-x-auto scrollbar-hide">
        {items.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}