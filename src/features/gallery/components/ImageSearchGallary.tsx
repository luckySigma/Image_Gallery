import { Search } from "lucide-react";
import { useSearch } from "../hooks/useSearch";
import { SearchBar } from "./SearchBar";
import { GalleryContainer } from "./GalleryContainer";

export function ImageSearchGallary() {
  const { query, setQuery, debounceQuery } = useSearch();
  return (
    <section aria-label="Image search and gallary">
      <SearchBar query={query} setQuery={setQuery} />
      <GalleryContainer debounceQuery={debounceQuery} />
    </section>
  );
}
