import { GalleryContainer } from "../features/gallery/components/GalleryContainer";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4l font-bold">Image Gallery Pro</h1>
      </header>

      <GalleryContainer />
    </main>
  );
}
