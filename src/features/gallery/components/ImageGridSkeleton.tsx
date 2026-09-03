import { IMAGES_PER_PAGE } from "../../../api/imageApi";

export function ImageGridSkeleton() {
  return (
    <section aria-label="Loading image gallery" aria-busy="true">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: IMAGES_PER_PAGE }, (_, index) => (
          <li key={index}>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-(--ink)/70 bg-(--paper-raised)">
              <div className="animate-shimmer absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-(--ink)/10 to-transparent" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
