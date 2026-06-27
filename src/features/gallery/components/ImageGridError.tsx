type ImageGridErrorProps = {
  onRetry: () => void;
};

export function ImageGridError({ onRetry }: ImageGridErrorProps) {
  return (
    <section
      role="alert"
      className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
    >
      <h2>Unabale to load Images</h2>
      <p className="mt-2 text-sm text-red-700">
        Please check your connection and try again
      </p>

      <button
        type="button"
        onClick={inRetry}
        className="mt-4 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition 
            hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
      >
        Try again
      </button>
    </section>
  );
}
