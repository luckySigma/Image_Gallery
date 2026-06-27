import type { UnsplashImage } from "../gallery.types";

type ImageCardProps = {
  image: UnsplashImage;
  index: number;
};

export function ImageCard({ image, index }: ImageCardProps) {
  const imageAlt = image.alt_description ?? `Photo by ${image.user.name}`;

  const isAboveFold = index < 6;
  const src = `${image.urls.raw}&w=300&h=300&fit=crop&auto=format`;

  return (
    <article className="group cursor-pointer">
      <img
        src={src}
        srcSet={`
            ${image.urls.raw}&w=200&h=200&fit=crop&auto=format 200w,
            ${image.urls.raw}&w=300&h=300&fit=crop&auto=format 300w,
            ${image.urls.raw}&w=450&h=450&fit=crop&auto=format 450w,
            ${image.urls.raw}&w=600&h=600&fit=crop&auto=format 600w
          `}
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 768px) 50vw,
          (max-width: 1024px) 33vw,
          20vw
        "
        alt={imageAlt}
        width={300}
        height={300}
        loading={isAboveFold ? "eager" : "lazy"}
        fetchPriority={isAboveFold ? "high" : "auto"}
        className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="p-3">
        <p className="truncate text-sm font-medium text-slate-800">
          Photo by {image.user.name}
        </p>
      </div>
    </article>
  );
}
