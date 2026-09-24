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
    <section className="relative px-4 py-6 sm:px-6 sm:py-8">
      <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-xl lg:text-2xl">
        {title}
      </h2>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 lg:overflow-visible lg:pb-0 xl:grid-cols-4 2xl:grid-cols-5">
        {items.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}