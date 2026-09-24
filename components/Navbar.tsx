export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <nav className="mx-auto flex max-w-[1600px] items-center gap-6 px-6 py-4">
        <span className="text-2xl font-extrabold tracking-tight text-red-600">
          nextflex
        </span>
        <ul className="hidden items-center gap-5 text-sm text-zinc-200 sm:flex">
          <li className="font-semibold text-white">Home</li>
          <li className="transition-colors hover:text-white">TV Shows</li>
          <li className="transition-colors hover:text-white">Movies</li>
          <li className="transition-colors hover:text-white">New &amp; Popular</li>
          <li className="transition-colors hover:text-white">My List</li>
        </ul>
        <div className="ml-auto flex items-center gap-5 text-zinc-200">
          <span className="cursor-pointer transition-colors hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="cursor-pointer transition-colors hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.045A8.22 8.22 0 0 1 5.85 3.5Z" />
              <path d="M19.267 2.5a.75.75 0 1 0-1.117 1 8.22 8.22 0 0 1 1.987 3.921.75.75 0 0 0 1.479-.045 9.72 9.72 0 0 0-2.349-4.876Z" />
              <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .178 1.124c.342.239.742.359 1.15.364h2.653a2.756 2.756 0 0 0 5.387.75h.002a2.756 2.756 0 0 0 5.387-.75h2.653a2.308 2.308 0 0 0 1.15-.364.75.75 0 0 0 .178-1.124 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25Zm-1.5 16.5a1.256 1.256 0 0 1 3 0h-3Zm6-1.5H7.5a6.768 6.768 0 0 1-1.972-4.5V9a6.75 6.75 0 0 1 13.5 0v3.75c0 1.792-.678 3.434-1.972 4.5Z" clipRule="evenodd" />
            </svg>
          </span>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-red-600 to-red-800" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}