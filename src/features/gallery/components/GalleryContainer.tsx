import { useGetImagesQuery } from "../../../api/imageApi";
import { Gallery } from "./Gallery";
import { ImageGridEmpty } from "./ImageGridEmpty";
import { ImageGridError } from "./ImageGridError";
import { ImageGridSkeleton } from "./ImageGridSkeleton";

export function GalleryContainer() {
  const {
    data: images = [],
    isLoading,
    isError,
    refetch,
  } = useGetImagesQuery(1);

  return (
    <section className="min-h-[500px]">
      {isLoading && <ImageGridSkeleton />}

      {!isLoading && isError && <ImageGridError onRetry={refetch} />}

      {!isLoading && !isError && images.length === 0 && <ImageGridEmpty />}

      {!isLoading && !isError && images.length > 0 && (
        <Gallery images={images} />
      )}
    </section>
  );
}
