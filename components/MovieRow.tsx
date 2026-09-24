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
    <section className="relative -mt-10 px-4 sm:px-6">
      <h2 className="mb-3 text-base font-bold sm:mb-4 sm:text-xl lg:text-2xl">
        {title}
      </h2>

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 xl:grid-cols-4 2xl:grid-cols-5">
        {items.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}