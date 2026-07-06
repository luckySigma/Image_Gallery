# 🖼️ Image Gallery

A modern, production-ready image gallery built with React, TypeScript, RTK Query, and Tailwind CSS v4.

---

## 🚀 Features (Planned + Implemented)

### Core Features
- Responsive image grid (mobile → desktop)
- Image search with debounce
- Category filtering
- Image detail modal
- Lazy loading images
- Loading skeletons
- Error handling states

### Advanced Features
- RTK Query caching & API optimization
- Feature flags support (env-based)
- Dark mode (optional toggle)
- Accessibility (WCAG AA compliant)
- Keyboard navigation support

---

## 🧱 Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4.3.1
- Redux Toolkit
- RTK Query
- React Router

---

## 📁 Architecture

Feature-based scalable architecture:

```text
src/
├── app/ → store & providers
├── api/ → RTK Query services
├── features/ → domain modules
├── components/ → shared UI
├── pages/ → routes
├── utils/ → helpers
├── types/ → global types
```

## ♿ Accessibility (A11y)

This project follows WCAG guidelines:

- Semantic HTML
- Keyboard navigation support
- ARIA labels where needed
- Focus management in modal
- Proper color contrast

---

## 📱 Responsive Design

Breakpoints:

- Mobile: 320px+
- Tablet: 768px+
- Laptop: 1024px+
- Desktop: 1280px+

Grid adapts dynamically using Tailwind CSS.

---

## ⚡ Performance

- RTK Query caching
- Lazy loading images
- Debounced search input
- Component-level memoization where needed

---

## 🌐 Deployment

### Planned deployment:
- GitHub
- Vercel

Live URL:

https://image-gallery-alpha-pied.vercel.app


---

## 🔐 Feature Flags

Controlled via environment variables:

```env
VITE_FEATURE_DARK_MODE=true
VITE_FEATURE_FAVORITES=false

```

🛠️ Setup

```
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and update the values.

## Project Status

🚧 In Development (Phase 2)

### Completed so far:
- Vite + React + TypeScript setup
- Tailwind CSS v4 configuration
- Git repository with feature-based workflow
- Redux Toolkit store setup
- RTK Query API integration (Unsplash)
- Typed Redux hooks setup
- Provider architecture configured
- Build Image Grid UI (responsive gallery layout)
- Implement loading & error states

### Next:
- Add Search functionality using RTK Query
- Add Filters (category / orientation)
- Add Image Modal (preview view)