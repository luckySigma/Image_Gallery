import { useLayoutEffect, useRef, useState } from "react";
import { DitherVideoBackground } from "../components/DitherVideoBackground";
import { ImageSearchGallary } from "../features/gallery/components/ImageSearchGallary";

export default function HomePage() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-(--sprocket)/40 bg-(--paper)"
      >
        <DitherVideoBackground />
        <div className="relative mx-auto max-w-7xl px-4 py-4 sm:py-5">
          <h1 className="font-display -mt-1 text-6xl leading-[0.9] font-extrabold tracking-tight text-(--ink) sm:text-7xl">
            IMAGE GALLERY
          </h1>
          <p className="mt-3 max-w-xl text-sm text-(--ink-muted) sm:text-base">
            A running index of stunning, high-quality photography — search
            the archive, frame by frame.
          </p>
        </div>
      </header>

      <div style={{ height: headerHeight }} />

      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-8 sm:pb-10">
        <ImageSearchGallary stickyOffset={headerHeight} />
      </main>
    </>
  );
}
