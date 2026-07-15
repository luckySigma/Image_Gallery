import { useGetImagesQuery, useSearchImagesQuery } from "../../../api/imageApi";
import { Gallery } from "./Gallery";
import { ImageGridEmpty } from "./ImageGridEmpty";
import { ImageGridError } from "./ImageGridError";
import { ImageGridSkeleton } from "./ImageGridSkeleton";

type GalleryContainerProps = {
  debounceQuery: string;
};

export function GalleryContainer({ debounceQuery }: GalleryContainerProps) {
  const {
    data: initialImages = [],
    isLoading: isInitialLoading,
    isError: isInitialError,
    refetch: refetchInitial,
  } = useGetImagesQuery(1);

  const {
    currentData: searchImages = [],
    isLoading: isSearchLoading,
    isError: isSearchError,
    refetch: refetchSearch,
  } = useSearchImagesQuery(
    { page: 1, query: debounceQuery },
    {
      skip: !debounceQuery,
    },
  );

  const images = debounceQuery ? searchImages : initialImages;

  const isLoading = debounceQuery ? isSearchLoading : isInitialLoading;

  const isError = debounceQuery ? isSearchError : isInitialError;

  const refetch = debounceQuery ? refetchSearch : refetchInitial;

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
