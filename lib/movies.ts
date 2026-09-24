export type Movie = {
  id: number;
  title: string;
  year: number;
  match: number;
  rating: string;
  duration: string;
  genres: string[];
  image: string;
  hero?: boolean;
};

const image = (id: number, w: number, h: number) =>
  `https://picsum.photos/seed/movie${id}/${w}/${h}`;

export const movies: Movie[] = [
  { id: 1, title: "Neon Horizon", year: 2026, match: 98, rating: "TV-MA", duration: "2h 11m", genres: ["Sci-Fi", "Thriller"], image: image(1, 400, 600) },
  { id: 2, title: "Midnight Heist", year: 2025, match: 95, rating: "TV-14", duration: "1h 48m", genres: ["Crime", "Action"], image: image(2, 400, 600) },
  { id: 3, title: "The Last Signal", year: 2024, match: 92, rating: "PG-13", duration: "2h 05m", genres: ["Drama", "Mystery"], image: image(3, 400, 600) },
  { id: 4, title: "Crimson Tides", year: 2025, match: 91, rating: "TV-MA", duration: "1h 57m", genres: ["Horror", "Mystery"], image: image(4, 400, 600) },
  { id: 5, title: "Parallel Lives", year: 2026, match: 89, rating: "TV-14", duration: "2h 20m", genres: ["Romance", "Drama"], image: image(5, 400, 600) },
  { id: 6, title: "Iron Colossus", year: 2024, match: 88, rating: "PG-13", duration: "2h 34m", genres: ["Action", "Adventure"], image: image(6, 400, 600) },
  { id: 7, title: "Silent Drift", year: 2025, match: 87, rating: "TV-MA", duration: "1h 42m", genres: ["Thriller", "Crime"], image: image(7, 400, 600) },
  { id: 8, title: "Starlight Bakery", year: 2024, match: 93, rating: "PG", duration: "1h 39m", genres: ["Comedy", "Family"], image: image(8, 400, 600) },
  { id: 9, title: "Fractured", year: 2026, match: 84, rating: "TV-MA", duration: "2h 02m", genres: ["Psychological", "Drama"], image: image(9, 400, 600) },
  { id: 10, title: "Desert Bloom", year: 2025, match: 86, rating: "TV-14", duration: "1h 51m", genres: ["Adventure", "Drama"], image: image(10, 400, 600) },
  { id: 11, title: "Quantum Heist", year: 2026, match: 90, rating: "TV-MA", duration: "2h 15m", genres: ["Sci-Fi", "Action"], image: image(11, 400, 600) },
  { id: 12, title: "The Lighthouse Keeper", year: 2024, match: 94, rating: "PG-13", duration: "1h 47m", genres: ["Mystery", "Drama"], image: image(12, 400, 600) },
  { id: 13, title: "Velvet Thunder", year: 2025, match: 85, rating: "TV-MA", duration: "1h 58m", genres: ["Action", "Crime"], image: image(13, 400, 600) },
  { id: 14, title: "Ocean's Whisper", year: 2026, match: 88, rating: "PG", duration: "1h 36m", genres: ["Animation", "Family"], image: image(14, 400, 600) },
  { id: 15, title: "Shadow Protocol", year: 2024, match: 91, rating: "TV-14", duration: "2h 08m", genres: ["Spy", "Thriller"], image: image(15, 400, 600) },
  { id: 16, title: "Wildfire", year: 2025, match: 87, rating: "TV-MA", duration: "1h 54m", genres: ["Drama", "Thriller"], image: image(16, 400, 600) },
];

export const heroMovie: Movie = {
  ...movies[0],
  image: image(1, 1920, 1080),
  hero: true,
};

export const rows: { title: string; items: Movie[] }[] = [
  { title: "Trending Now", items: movies.slice(0, 10) },
  { title: "New Releases", items: movies.slice(4, 14) },
  { title: "Top 10 in Your Country", items: movies.slice(10, 16) },
  { title: "Because You Watched Neon Horizon", items: movies.slice(2, 12) },
];