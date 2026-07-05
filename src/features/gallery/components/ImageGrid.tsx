import type { UnsplashImage } from "../gallery.types";
import { ImageCard } from "./ImageCard";

type ImageGridProps = {
  images: UnsplashImage[];
};

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <section aria-label="Image-gallery">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((image, index) => (
          <li key={image.id}>
            <ImageCard image={image} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
