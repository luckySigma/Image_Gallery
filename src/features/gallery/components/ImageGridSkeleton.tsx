import { IMAGES_PER_PAGE } from "../../../api/imageApi";

export function ImageGridSkeleton() {
  return (
    <section aria-label="Loading image gallery" aria-busy="true">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: IMAGES_PER_PAGE }, (_, index) => (
          <li key={index} className="animate-pulse">
            <div className="aspect-square rounded-xl bg-amber-100" />
            <div className="mt-3 h-4 w-2/3 rounded bg-amber-100" />
          </li>
        ))}
      </ul>
    </section>
  );
}
