import { useGetImagesQuery, useSearchImagesQuery } from "../../../api/imageApi";
import type { SearchFilters } from "../hooks/useSearch";
import { Gallery } from "./Gallery";
import { ImageGridEmpty } from "./ImageGridEmpty";
import { ImageGridError } from "./ImageGridError";
import { ImageGridSkeleton } from "./ImageGridSkeleton";

type GalleryContainerProps = {
  filters: SearchFilters;
};

export function GalleryContainer({ filters }: GalleryContainerProps) {
  const isSearching = filters.query;

  const {
    data: initialImages = [],
    isLoading: isInitialLoading,
    isError: isInitialError,
    refetch: refetchInitial,
  } = useGetImagesQuery(1);

  const {
    data: searchImages = [],
    isLoading: isSearchLoading,
    isError: isSearchError,
    refetch: refetchSearch,
  } = useSearchImagesQuery(
    {
      page: 1,
      query: filters.query,
      orientation: filters.orientation,
    },
    {
      skip: !isSearching,
    },
  );

  const images = isSearching ? searchImages : initialImages;

  const isLoading = isSearching ? isSearchLoading : isInitialLoading;

  const isError = isSearching ? isSearchError : isInitialError;

  const refetch = isSearching ? refetchSearch : refetchInitial;

  return (
    <section className="min-h-screen">
      {isLoading && <ImageGridSkeleton />}

      {!isLoading && isError && <ImageGridError onRetry={refetch} />}

      {!isLoading && !isError && images.length === 0 && <ImageGridEmpty />}

      {!isLoading && !isError && images.length > 0 && (
        <Gallery images={images} />
      )}
    </section>
  );
}
