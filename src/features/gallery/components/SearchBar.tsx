import { Search } from "lucide-react";

export function SearchBar({ query, setQuery }) {

  return (
    <div className="mb-6 w-full">
      <label htmlFor="image-search" className="sr-only">
        Search Images
      </label>
      <div className="relative">
        <Search
          className="absolute inset-s-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />

        <input
          type="search"
          id="image-search"
          className="
              w-full
              rounded-lg
              border
              border-gray-300
              py-3
              ps-10
              pe-4
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          placeholder="Search Images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
