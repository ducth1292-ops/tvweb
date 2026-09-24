export type Movie = {
  id: number;
  title: string;
  year: number;
  match: number;
  rating: string;
  duration: string;
  genres: string[];
  image: string;
  description: string;
  hero?: boolean;
};

const image = (id: number, w: number, h: number) =>
  `https://picsum.photos/seed/movie${id}/${w}/${h}`;

const description = (id: number) => {
  const openings = [
    "In a world where nothing is what it seems,",
    "When a routine mission goes horribly wrong,",
    "After decades of silence, a signal arrives,",
    "On the night the city goes dark,",
    "As the clock strikes midnight,",
    "When secrets buried for years resurface,",
    "In the aftermath of a global blackout,",
    "Bound by an oath they can never break,",
    "Somewhere between memory and madness,",
    "When the last safe place on Earth falls,",
  ];
  const middles = [
    "a reluctant hero must confront the truth",
    "two strangers discover they share the same past",
    "a young prodigy unlocks a power she can't control",
    "an undercover agent walks straight into a trap",
    "a small-town sheriff faces an impossible choice",
    "a crew of misfits plans the heist of the century",
    "a grieving scientist risks everything to bring back what was lost",
    "an unlikely alliance forms against a rising threat",
    "a codebreaker races to stop an invisible enemy",
    "a family reunion unearths a deadly secret",
  ];
  const endings = [
    "before time runs out.",
    "— but every choice has a price.",
    "and there is no turning back.",
    "forcing a final, desperate stand.",
    "and the truth changes everything.",
    "in a battle that will define a generation.",
    "while the world watches in silence.",
    "knowing only one of them will walk away.",
    "across a shattered landscape of broken promises.",
    "to save the ones they love most.",
  ];
  const pick = (arr: string[]) => arr[id % arr.length];
  return `${pick(openings)} ${pick(middles)} ${pick(endings)}`;
};

const M = (
  id: number,
  title: string,
  year: number,
  match: number,
  rating: string,
  duration: string,
  genres: string[]
): Movie => ({
  id,
  title,
  year,
  match,
  rating,
  duration,
  genres,
  image: image(id, 400, 600),
  description: description(id),
});

export const movies: Movie[] = [
  M(1, "Neon Horizon", 2026, 98, "TV-MA", "2h 11m", ["Sci-Fi", "Thriller"]),
  M(2, "Midnight Heist", 2025, 95, "TV-14", "1h 48m", ["Crime", "Action"]),
  M(3, "The Last Signal", 2024, 92, "PG-13", "2h 05m", ["Drama", "Mystery"]),
  M(4, "Crimson Tides", 2025, 91, "TV-MA", "1h 57m", ["Horror", "Mystery"]),
  M(5, "Parallel Lives", 2026, 89, "TV-14", "2h 20m", ["Romance", "Drama"]),
  M(6, "Iron Colossus", 2024, 88, "PG-13", "2h 34m", ["Action", "Adventure"]),
  M(7, "Silent Drift", 2025, 87, "TV-MA", "1h 42m", ["Thriller", "Crime"]),
  M(8, "Starlight Bakery", 2024, 93, "PG", "1h 39m", ["Comedy", "Family"]),
  M(9, "Fractured", 2026, 84, "TV-MA", "2h 02m", ["Psychological", "Drama"]),
  M(10, "Desert Bloom", 2025, 86, "TV-14", "1h 51m", ["Adventure", "Drama"]),
  M(11, "Quantum Heist", 2026, 90, "TV-MA", "2h 15m", ["Sci-Fi", "Action"]),
  M(12, "The Lighthouse Keeper", 2024, 94, "PG-13", "1h 47m", ["Mystery", "Drama"]),
  M(13, "Velvet Thunder", 2025, 85, "TV-MA", "1h 58m", ["Action", "Crime"]),
  M(14, "Ocean's Whisper", 2026, 88, "PG", "1h 36m", ["Animation", "Family"]),
  M(15, "Shadow Protocol", 2024, 91, "TV-14", "2h 08m", ["Spy", "Thriller"]),
  M(16, "Wildfire", 2025, 87, "TV-MA", "1h 54m", ["Drama", "Thriller"]),
  M(17, "Echoes of Tomorrow", 2026, 90, "PG-13", "2h 12m", ["Sci-Fi", "Drama"]),
  M(18, "The Glass Cathedral", 2024, 89, "TV-14", "1h 46m", ["Drama", "Mystery"]),
  M(19, "Beneath the Static", 2025, 86, "TV-MA", "2h 00m", ["Horror", "Sci-Fi"]),
  M(20, "Painted Skies", 2026, 92, "PG", "1h 41m", ["Animation", "Family"]),
  M(21, "Cold Harbor", 2025, 88, "TV-MA", "1h 49m", ["Thriller", "Crime"]),
  M(22, "The Cartographer's Daughter", 2024, 93, "PG-13", "2h 18m", ["Adventure", "Drama"]),
  M(23, "Second Sunrise", 2026, 85, "TV-14", "1h 52m", ["Romance", "Drama"]),
  M(24, "Overdrive", 2025, 89, "PG-13", "2h 06m", ["Action", "Sci-Fi"]),
  M(25, "The Quiet Hours", 2024, 94, "TV-14", "1h 44m", ["Drama", "Mystery"]),
  M(26, "Ghost Circuit", 2026, 87, "TV-MA", "1h 59m", ["Sci-Fi", "Thriller"]),
  M(27, "Paper Crowns", 2025, 90, "PG", "1h 37m", ["Comedy", "Family"]),
  M(28, "Storm Chasers", 2024, 86, "TV-14", "1h 53m", ["Adventure", "Drama"]),
  M(29, "The Forgotten Empire", 2026, 91, "PG-13", "2h 25m", ["Fantasy", "Adventure"]),
  M(30, "Last Exit: Nowhere", 2025, 88, "TV-MA", "1h 50m", ["Thriller", "Mystery"]),
  M(31, "Fever Dream", 2024, 85, "TV-MA", "1h 45m", ["Horror", "Psychological"]),
  M(32, "The Golden Hour", 2026, 92, "PG-13", "2h 03m", ["Romance", "Drama"]),
  M(33, "Velocity", 2025, 89, "PG-13", "1h 56m", ["Action", "Crime"]),
  M(34, "Aurora Falls", 2024, 87, "TV-14", "2h 09m", ["Mystery", "Drama"]),
  M(35, "The Clockwork Garden", 2026, 93, "PG", "1h 40m", ["Animation", "Fantasy"]),
  M(36, "Redline Runners", 2025, 86, "TV-14", "1h 47m", ["Action", "Thriller"]),
  M(37, "The Hollow Crown", 2024, 90, "TV-MA", "2h 16m", ["Drama", "History"]),
  M(38, "Stray Voltage", 2026, 88, "TV-MA", "1h 55m", ["Sci-Fi", "Drama"]),
  M(39, "House of Whispers", 2025, 91, "TV-MA", "1h 48m", ["Horror", "Mystery"]),
  M(40, "The Sunken City", 2024, 89, "PG-13", "2h 07m", ["Adventure", "Fantasy"]),
  M(41, "Infinite Recess", 2026, 87, "TV-14", "2h 14m", ["Sci-Fi", "Thriller"]),
  M(42, "Marigold Lane", 2025, 92, "PG", "1h 38m", ["Comedy", "Family"]),
  M(43, "The Weight of Water", 2024, 88, "TV-14", "1h 58m", ["Drama", "Mystery"]),
  M(44, "Blackout Protocol", 2026, 90, "TV-MA", "2h 10m", ["Action", "Sci-Fi"]),
  M(45, "The Raven's Gate", 2025, 89, "PG-13", "2h 01m", ["Fantasy", "Adventure"]),
  M(46, "Nightshade", 2024, 86, "TV-MA", "1h 43m", ["Thriller", "Crime"]),
  M(47, "Southern Cross", 2026, 91, "TV-14", "2h 19m", ["Drama", "Adventure"]),
  M(48, "The Last Lighthouse", 2025, 93, "PG", "1h 35m", ["Animation", "Family"]),
  M(49, "Echo Chamber", 2024, 85, "TV-MA", "1h 46m", ["Psychological", "Thriller"]),
  M(50, "North of Nowhere", 2026, 88, "TV-14", "1h 52m", ["Drama", "Mystery"]),
  M(51, "Cobalt Sky", 2025, 89, "PG-13", "2h 04m", ["Sci-Fi", "Drama"]),
  M(52, "The Orchard", 2024, 92, "PG-13", "1h 49m", ["Romance", "Drama"]),
  M(53, "Static Bloom", 2026, 87, "TV-MA", "1h 57m", ["Horror", "Sci-Fi"]),
  M(54, "Chasing Mercury", 2025, 90, "TV-14", "2h 13m", ["Action", "Adventure"]),
  M(55, "The Ninth Wave", 2024, 94, "PG-13", "1h 50m", ["Drama", "Thriller"]),
  M(56, "Paper Moonlight", 2026, 91, "PG", "1h 40m", ["Animation", "Fantasy"]),
  M(57, "Iron Harbor", 2025, 86, "TV-MA", "2h 00m", ["Crime", "Drama"]),
  M(58, "The Infinite Hour", 2024, 88, "TV-14", "1h 59m", ["Mystery", "Sci-Fi"]),
  M(59, "Wildflowers", 2026, 92, "PG-13", "1h 44m", ["Romance", "Drama"]),
  M(60, "Zero Meridian", 2025, 89, "TV-MA", "2h 17m", ["Thriller", "Action"]),
  M(61, "The Marble Sea", 2024, 87, "PG", "1h 36m", ["Animation", "Adventure"]),
  M(62, "Ghostlight", 2026, 90, "TV-MA", "1h 53m", ["Horror", "Mystery"]),
  M(63, "Appaloosa Run", 2025, 85, "TV-14", "1h 51m", ["Western", "Drama"]),
  M(64, "The Broken Atlas", 2024, 91, "PG-13", "2h 21m", ["Adventure", "Drama"]),
];

export const heroMovie: Movie = {
  ...movies[0],
  image: image(1, 1920, 1080),
  hero: true,
};

export const rows: { title: string; items: Movie[] }[] = [
  { title: "Trending Now", items: movies.slice(0, 10) },
  { title: "New Releases", items: movies.slice(4, 14) },
  { title: "Top 10 in Your Country", items: movies.slice(10, 20) },
  { title: "Because You Watched Neon Horizon", items: movies.slice(2, 12) },
  { title: "Award-Winning Dramas", items: movies.slice(20, 30) },
  { title: "Sci-Fi & Fantasy", items: movies.slice(24, 34) },
  { title: "Family Movie Night", items: movies.slice(32, 42) },
  { title: "Edge-of-Your-Seat Thrillers", items: movies.slice(40, 50) },
  { title: "Hidden Gems", items: movies.slice(50, 64) },
];