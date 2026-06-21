# 🤝 Contribution Guide

This project follows a clean and scalable development workflow suitable for real-world applications.

---

## 🧠 Code Style

- Use TypeScript strict mode
- Use functional components only
- Avoid `any` type (use proper typing)
- Follow feature-based folder structure
- Keep components small and reusable
- Use RTK Query for all API calls
- Follow Tailwind CSS utility-first styling
- Maintain accessibility (a11y) standards
- Ensure responsive design for all components

---

## 📦 Commit Convention

We follow **Conventional Commits**:

### Types

feat: new feature  
fix: bug fix  
refactor: code improvement without behavior change  
chore: setup/config changes  
docs: documentation updates  
style: UI/formatting changes (no logic change)  
test: adding or updating tests  
perf: performance improvements  

---

## ✍️ Example Commits

feat: add image grid UI  
fix: resolve search API bug  
refactor: optimize Redux store structure  
chore: setup RTK Query base API  
docs: update README setup instructions  

---

## 🌿 Branch Strategy

- main → production-ready code  
- feature/* → new features  
- fix/* → bug fixes  
- chore/* → setup/config tasks  

### Examples

feature/image-gallery-ui  
feature/search-functionality  
feature/rtk-query-setup  
fix/image-loading-error  

---

## 🚀 Pull Request Rules

- One feature per PR
- Keep PRs small and focused
- Write clear PR descriptions
- Ensure no console errors or warnings
- Run linting before pushing code

---

## 💡 General Rules

- Write clean and readable code
- Prefer composition over duplication
- Keep components reusable
- Always consider performance
- Maintain accessibility (WCAG standards)
- Avoid tight coupling between modules
- Use environment variables for configs

---

## 📌 Goal

Maintain a production-ready, scalable, and maintainable codebase that reflects real-world engineering practices suitable for professional development and client work.