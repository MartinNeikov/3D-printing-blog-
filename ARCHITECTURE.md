# PrintForge Architecture

## Overview

PrintForge is a React single page application for sharing articles about 3D printing.

The frontend is built with React and Vite. Supabase is used as the backend for the database, authentication and file storage.

The project is split into components, services, hooks and context so that the UI and the backend logic are not mixed in the same files.

---

## Main Technologies

- React
- Vite
- React Router
- JavaScript
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- CSS

---

## Project Structure

The main source code is inside the `src` folder.

```text
src/
├── components/
├── context/
├── hooks/
├── lib/
├── services/
├── styles/
└── utils/