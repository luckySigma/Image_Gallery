import type { UnsplashImage } from "../gallery.types";
import { ImageGrid } from "./ImageGrid";

type GalleryProps = {
  images: UnsplashImage[];
};

export function Gallery({ images }: GalleryProps) {
  return (
    <section aria-label="Image gallery">
      <ImageGrid images={images} />
    </section>
  );
}
