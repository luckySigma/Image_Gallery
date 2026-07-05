export function ImageGridEmpty() {
  return (
    <section
      aria-live="polite"
      className="rounded-x1 border border-dashed border-slate-300 p-8 text-center"
    >
      <h2 className="text-lg font-semibold text-slate-900">No Image</h2>
      <p className="mt-2 text-sm text-slate-600">
        Try a different search term or check back later.
      </p>
    </section>
  );
}
