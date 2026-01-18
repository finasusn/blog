# CA Monk – Blog Application Assignment

This project is a blog application built as part of the **CA Monk Frontend Interview Assignment**. The goal of the assignment was to demonstrate the ability to build a modern React application using **TypeScript**, **TanStack Query**, **Tailwind CSS**, and **shadcn/ui**, while consuming a REST API powered by **JSON Server**.

---

## 📌 Assignment Requirements

The assignment required building a blog application with the following features:

### Core Tasks

1. Fetch and display all blogs (`GET /blogs`)
2. Fetch and display a single blog by ID (`GET /blogs/:id`)
3. Create a new blog (`POST /blogs`) and refresh the list automatically

### Required Technologies

* React + TypeScript
* TanStack Query (server state management)
* Tailwind CSS (styling)
* shadcn/ui (UI components)
* JSON Server (mock backend)

---

## ✅ What Was Implemented

### 1. Blog List View (GET /blogs)

* Implemented a `BlogList` component to fetch and display all blogs.
* Used **TanStack Query (`useQuery`)** for data fetching.
* Displayed blogs as clickable cards.
* Implemented:

  * Loading state using **Skeleton components**
  * Error state handling
* Clicking a blog selects it and loads its details.

---

### 2. Blog Detail View (GET /blogs/:id)

* Implemented a `BlogDetail` component to fetch a blog by ID.
* Used **TanStack Query** with conditional fetching (`enabled` flag).
* Displayed:

  * Cover image
  * Title
  * Categories
  * Publish date
  * Full blog content
* Handled:

  * Empty state (when no blog is selected)
  * Loading state using skeletons

---

### 3. Create Blog Feature (POST /blogs)

* Implemented a `CreateBlogForm` component.
* Used **TanStack Query mutation (`useMutation`)** to create a new blog.
* After successful creation:

  * Automatically invalidates the `blogs` query
  * Blog list refreshes without page reload
* Form fields include:

  * Title
  * Cover image URL
  * Categories (comma-separated)
  * Description
  * Content

---

## 🧠 Architecture & Code Organization

The project follows a clean and maintainable structure:

```
src/
│── api/              # API calls (blogs.ts)
│── components/
│   ├── blog/          # Blog-related components
│   │   ├── BlogList.tsx
│   │   ├── BlogDetail.tsx
│   │   └── CreateBlogForm.tsx
│   └── ui/            # shadcn/ui components
│── types/             # TypeScript interfaces
│── App.tsx
│── main.tsx
│── index.css
```

* API logic is separated from UI components.
* Shared TypeScript interfaces ensure type safety.
* TanStack Query is configured globally using `QueryClientProvider`.

---

## 🎨 UI & Styling

* **Tailwind CSS** is used for layout, spacing, and responsiveness.
* **shadcn/ui components** (`Card`, `Button`, `Input`, `Textarea`, `Skeleton`) are integrated for a consistent and modern UI.
* Responsive layout:

  * Desktop: Blog list on the left, blog details on the right
  * Mobile: Stacked layout
* Improved UX with:

  * Hover states
  * Selected blog highlighting
  * Clean typography and spacing

---

## 🔄 State Management & Data Fetching

* **TanStack Query** is used exclusively for server state.
* Features include:

  * Query caching
  * Automatic refetching
  * Query invalidation after mutations
  * Proper loading and error handling

---

## 🛠 Backend

* **JSON Server** is used as the backend API.
* Endpoints used:

  * `GET /blogs`
  * `GET /blogs/:id`
  * `POST /blogs`

---

## 🚀 How to Run the Project

### Prerequisites

* Node.js v18+
* npm

### Steps

```bash
npm install
```

Start the JSON Server:

```bash
npm run server
```

Start the development server:

```bash
npm run dev
```

* Frontend runs on: `http://localhost:5173`
* Backend runs on: `http://localhost:3001`

---

## 📋 Summary

This project fulfills all requirements of the CA Monk Blog Application assignment by:

* Correctly using **TanStack Query** for data fetching and mutations
* Implementing all required API interactions
* Using **Tailwind CSS** and **shadcn/ui** for styling
* Maintaining clean code structure and type safety
* Handling loading, error, and empty states
* Delivering a responsive and polished user interface

---

## 📎 Notes

* The application is not deployed, as deployment was not required.
* React Router was not used, as navigation was optional.
* Blog content is rendered as plain text, as specified.

---

**Thank you for reviewing this submission.**


