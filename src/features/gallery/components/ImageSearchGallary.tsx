import { useSearch } from "../hooks/useSearch";
import { GalleryContainer } from "./GalleryContainer";
import { CategoryFilter } from "./SearchControls/CategoryFilter";
import { OrientationFilter } from "./SearchControls/OrientationFilter";
import { SearchBar } from "./SearchControls/SearchBar";

type ImageSearchGallaryProps = {
  stickyOffset?: number;
};

export function ImageSearchGallary({ stickyOffset = 0 }: ImageSearchGallaryProps) {
  const {
    query,
    setQuery,
    orientation,
    setOrientation,
    filters,
  } = useSearch();

  const handleSearchChange = (value: string) => {
    setQuery(value);

    if (!value) {
      setOrientation("landscape");
    }
  };

  return (
    <section aria-label="Image search and gallery">
      <div
        className="sticky-search-bar sticky z-40 mb-8 flex flex-col gap-4 pt-4 pb-2 sm:pt-5 min-[567px]:flex-row min-[567px]:items-end"
        style={{ top: stickyOffset }}
      >
        <div className="min-w-0 flex-1">
          <SearchBar
            query={query}
            onChange={handleSearchChange}
          />
        </div>

        <div className="w-full min-[567px]:w-32 sm:w-44 lg:w-64">
          <CategoryFilter
            category={query}
            onChange={setQuery}
          />
        </div>

        <div className="w-full min-[567px]:w-32 sm:w-44 lg:w-64">
          <OrientationFilter
            orientation={orientation}
            onChange={setOrientation}
          />
        </div>
      </div>

      <GalleryContainer filters={filters} />
    </section>
  );
}
