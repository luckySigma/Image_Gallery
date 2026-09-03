import { Search } from "lucide-react";
import type { SearchBarProps } from "../../gallery.types";

export function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="image-search"
        className="font-mono text-[0.65rem] tracking-[0.2em] text-(--ink-muted)"
      >
        SEARCH
      </label>
      <div className="relative mt-1">
        <Search
          className="absolute inset-s-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--ink-muted)"
          aria-hidden="true"
        />

        <input
          type="search"
          id="image-search"
          className="
              w-full
              rounded-xl
              border
              border-(--ink)
              bg-(--paper-raised)
              py-3
              ps-11
              pe-4
              text-sm
              text-(--ink)
              shadow-none
              transition
              placeholder:text-(--ink-muted)
              hover:border-(--ink)
              focus:border-(--ink)
              focus:ring-2
              focus:ring-(--ink)/20
              focus:outline-none
            "
          placeholder="Search Images"
          value={query}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
