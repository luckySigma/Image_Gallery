import { useSearch } from "../hooks/useSearch";
import { GalleryContainer } from "./GalleryContainer";
import { SearchBar } from "./SearchBar";

export function ImageSearchGallary() {
  const { query, setQuery, debounceQuery } = useSearch();
  return (
    <section aria-label="Image search and gallary">
      <SearchBar query={query} setQuery={setQuery} />
      <GalleryContainer debounceQuery={debounceQuery} />
    </section>
  );
}
