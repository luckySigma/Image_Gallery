import { AlertTriangle } from "lucide-react";

type ImageGridErrorProps = {
  onRetry: () => void;
};

export function ImageGridError({ onRetry }: ImageGridErrorProps) {
  return (
    <section
      role="alert"
      className="flex flex-col items-center rounded-xl border border-(--safelight)/50 bg-(--paper-raised) p-12 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--safelight) text-(--safelight)">
        <AlertTriangle className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="font-display mt-4 text-2xl font-bold text-(--ink)">
        UNABLE TO LOAD IMAGES
      </h2>
      <p className="mt-2 text-sm text-(--ink-muted)">
        Please check your connection and try again
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-5 rounded-lg border border-(--safelight) bg-(--safelight) px-5 py-2.5 text-sm font-semibold text-(--paper-raised) transition hover:bg-transparent hover:text-(--safelight) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--safelight)"
      >
        Try again
      </button>
    </section>
  );
}
