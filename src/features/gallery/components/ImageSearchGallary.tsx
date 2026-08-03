import { useSearch } from "../hooks/useSearch";
import { GalleryContainer } from "./GalleryContainer";
import { CategoryFilter } from "./SearchControls/CategoryFilter";
import { OrientationFilter } from "./SearchControls/OrentationFilter";
import { SearchBar } from "./SearchControls/SearchBar";

export function ImageSearchGallary() {
  const {
    query,
    setQuery,
    orientation,
    setOrientation,
    filters,
  } = useSearch();

  const handleCategoryChange = (value: string) => {
    setQuery(value);
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);

    if (!value) {
      setOrientation("landscape");
    }
  };

  return (
    <section aria-label="Image search and gallery">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1">
          <SearchBar
            query={query}
            onChange={handleSearchChange}
          />
        </div>

        <div className="w-full lg:w-64">
          <CategoryFilter
            category={query}
            onChange={handleCategoryChange}
          />
        </div>

        <div className="w-full lg:w-64">
          <OrientationFilter
            orientation={orientation}
            setOrientation={setOrientation}
          />
        </div>
      </div>

      <GalleryContainer filters={filters} />
    </section>
  );
}
