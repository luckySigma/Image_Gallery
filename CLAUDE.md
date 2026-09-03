# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm run dev       # start Vite dev server
npm run build     # tsc -b (project references) then vite build
npm run lint      # eslint .
npm run preview   # preview production build
```

There is no test runner configured in this project (no test script, no test files).

## Deployment

Live URL (Vercel): https://image-gallery-alpha-pied.vercel.app/ — deploys from `main`. Useful for checking current production behavior/styling before making UI changes, though it's a client-rendered SPA so tools that don't execute JS (e.g. WebFetch) won't see real content — visit it in a browser or check the deployed build instead.

## Architecture

React 19 + TypeScript + Vite image gallery, using Redux Toolkit / RTK Query for data fetching and Tailwind CSS v4 for styling.

- **API layer** ([src/api/imageApi.ts](src/api/imageApi.ts)): a single RTK Query `imageApi` slice talks to a backend at `https://gallery-api-lf4c.onrender.com/api/` (a proxy in front of Unsplash — response shapes live in [src/features/gallery/gallery.types.ts](src/features/gallery/gallery.types.ts)). Two endpoints: `getImages` (paginated default feed) and `searchImages` (query + orientation). Add new endpoints here rather than creating additional `createApi` instances.
- **Store** ([src/app/store.ts](src/app/store.ts)): only reducer is `imageApi.reducer`; there is no other global app state. `AppProvider` ([src/app/providers.tsx](src/app/providers.tsx)) wraps `App` with the Redux `Provider`.
- **Feature-based structure**: domain logic lives under `src/features/<feature>/`, currently just `gallery`:
  - `components/` — presentational + container components
  - `components/SearchControls/` — `SearchBar`, `CategoryFilter`, `OrientationFilter`
  - `hooks/useSearch.ts` — owns `query`/`orientation` state and produces a debounced `SearchFilters` object (debounce via `hooks/useDebounce.ts`)
  - `gallery.types.ts` — Unsplash image/response types and shared prop types for this feature
- **Search/filter flow**: `ImageSearchGallary` composes the search controls and `useSearch()`, then passes the resulting `filters` down to `GalleryContainer`. `GalleryContainer` chooses between `useGetImagesQuery` (default feed, when there's no query) and `useSearchImagesQuery` (skipped unless a query is present), and renders one of `ImageGridSkeleton` / `ImageGridError` / `ImageGridEmpty` / `Gallery` based on loading/error/empty state. Follow this same branch-on-state pattern for new query-backed views rather than adding new loading UI conventions.
- **Filter option values** (categories, orientations) are centralized as `as const` arrays in [src/constants/ImageFilters.ts](src/constants/ImageFilters.ts) — extend these rather than hardcoding option lists in components.
- Path structure: `src/app` (store/providers), `src/api` (RTK Query services), `src/features` (domain modules), `src/pages` (route-level components), `src/constants`.
