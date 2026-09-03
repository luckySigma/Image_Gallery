import type { UnsplashImage } from "../gallery.types";

type ImageCardProps = {
  image: UnsplashImage;
  index: number;
};

const SRCSET_WIDTHS = [200, 300, 450, 600] as const;

function buildSizedUrl(rawUrl: string, size: number) {
  return `${rawUrl}&w=${size}&h=${size}&fit=crop&auto=format`;
}

export function ImageCard({ image, index }: ImageCardProps) {
  const imageAlt = image.alt_description ?? `Photo by ${image.user.name}`;

  const isAboveFold = index < 6;
  const src = buildSizedUrl(image.urls.raw, 300);
  const srcSet = SRCSET_WIDTHS.map(
    (size) => `${buildSizedUrl(image.urls.raw, size)} ${size}w`,
  ).join(", ");

  const frameNumber = String(index + 1).padStart(3, "0");

  return (
    <article className="group relative overflow-hidden rounded-xl border border-(--ink)/70 bg-(--paper-raised) transition-shadow duration-300 hover:shadow-[6px_6px_0_0_var(--sprocket)]">
      <img
        src={src}
        srcSet={srcSet}
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
        className="aspect-square w-full object-cover grayscale-15 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
      />

      <p className="font-mono absolute top-2 left-2 rounded-md bg-(--paper-raised)/90 px-1.5 py-0.5 text-[0.65rem] tracking-wider text-(--ink)">
        FRM {frameNumber}
      </p>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-(--paper) via-(--paper)/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="truncate text-sm font-medium text-(--ink)">
          Photo by {image.user.name}
        </p>
      </div>
    </article>
  );
}
