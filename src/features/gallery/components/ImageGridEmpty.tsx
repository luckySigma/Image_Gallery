import { ImageOff } from "lucide-react";

export function ImageGridEmpty() {
  return (
    <section
      role="status"
      className="flex flex-col items-center rounded-xl border border-dashed border-(--ink)/40 bg-(--paper-raised) p-12 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--ink)/40 text-(--ink-muted)">
        <ImageOff className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="font-display mt-4 text-2xl font-bold text-(--ink)">
        NO FRAMES FOUND
      </h2>
      <p className="mt-2 text-sm text-(--ink-muted)">
        Try a different search term or check back later.
      </p>
    </section>
  );
}
