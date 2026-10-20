# PrintForge

PrintForge is my React project for the SoftUni ReactJS Regular Exam 2026.

The project is a blog about 3D printing. Users can browse articles about printers, filaments, print settings and projects. Registered users can also create their own articles, comment on articles and rate them as useful or not useful.

## Live Demo

https://printforge-xi-eight.vercel.app/

## GitHub Repository

https://github.com/MartinNeikov/3D-printing-blog-

## Technologies

- React
- JavaScript
- React Router
- Vite
- Supabase
- PostgreSQL
- Supabase Authentication
- Supabase Storage
- Supabase Row Level Security
- CSS
- ESLint

## Main Features

- Public article catalog
- Article details page
- Article categories
- Article search
- User registration
- Login and logout
- Persistent user session
- Create article
- Edit own article
- Delete own article
- Article image upload
- External article image URL
- User profile
- Display name and avatar
- Comments
- Delete own comments
- Useful / Not useful article feedback
- Custom 404 page
- Protected routes
- Guest-only routes
- Supabase Row Level Security

## Project Structure

The project is separated into components, services, context, hooks and CSS files.

```text
src/
├── components/
├── contexts/
├── hooks/
├── lib/
├── services/
├── styles/
├── utils/
├── App.jsx
└── Main.jsx
```

The components contain the UI and page logic.

The service files contain the Supabase requests for articles, authentication, profiles, comments, feedback and images.

Authentication state is shared through `AuthContext`.

More information about the project structure can be found in:

[ARCHITECTURE.md](./ARCHITECTURE.md)

---

# Run the Project Locally

## 1. Clone the repository

```bash
git clone https://github.com/MartinNeikov/3D-printing-blog-.git
```

## 2. Open the project folder

```bash
cd 3D-printing-blog-
```

## 3. Install the dependencies

```bash
npm install
```

## 4. Configure the environment variables

Create a `.env.local` file in the root folder.

The required variables are shown in `.env.example`.

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

## 5. Start the development server

```bash
npm run dev
```

## Other Commands

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Functional Guide

## 1. Project Overview

**Application Name:** PrintForge

**Application Category / Topic:** Blog / 3D Printing

### Main Purpose

PrintForge is a blog application focused on 3D printing.

Visitors can browse articles about different 3D printing topics such as printers, filaments, print settings and projects.

Registered users can create their own articles and manage them. They can also comment on articles and vote whether an article was useful or not useful.

---

## 2. User Access & Permissions

### Guest

A guest user can access the public parts of the application.

Available pages include:

- Home
- Articles Catalog
- Article Details
- Category pages
- Search
- Login
- Register

Guests can read articles, comments and article feedback.

Guests cannot:

- Create articles
- Edit articles
- Delete articles
- Open the Profile page
- Create comments
- Delete comments
- Vote Useful / Not useful

### Authenticated User

A logged-in user has access to all public pages and also to the private functionality.

Authenticated users can:

- Create articles
- Edit their own articles
- Delete their own articles
- Open their Profile page
- Change their display name
- Upload or replace their avatar
- Add comments
- Delete their own comments
- Vote Useful or Not useful on articles
- Change or remove their feedback

A user cannot edit or delete an article created by another user.

A user also cannot delete comments created by another user.

---

## 3. Authentication & Session Handling

### Authentication Flow

Authentication is handled by Supabase Auth.

When the application starts, `AuthProvider` checks if there is an existing Supabase session.

If a session exists, the current user is stored in the authentication context.

Registration creates a new Supabase user using email and password.

Login uses Supabase email and password authentication.

Logout signs the current user out and clears the current session from the application state.

The application also listens for authentication state changes with Supabase.

### Session Persistence

Supabase handles the persisted authentication session.

The session is restored when the page is refreshed.

`AuthContext` is used to share the current user and authentication state across the React application.

The custom `useAuth` hook is used by components that need access to the authentication data.

---

## 4. Routing Structure

The application uses React Router for client-side routing.

The main routes are:

```text
/                              Home
/articles                      Articles Catalog
/articles/create               Create Article
/articles/:articleId           Article Details
/articles/:articleId/edit      Edit Article
/categories/:categoryName      Category
/search                        Search
/login                         Login
/register                      Register
/profile                       Profile
*                              Not Found
```

### Route Guards

`PrivateRoute` is used for pages that require authentication.

Protected routes include:

```text
/articles/create
/articles/:articleId/edit
/profile
```

A guest trying to open one of these routes is redirected to Login.

`GuestRoute` is used for:

```text
/login
/register
```

If an already logged-in user tries to open Login or Register, the user is redirected away from these pages.

### Nested and Parameterized Routes

`AppLayout` is used as the main layout route and the application pages are rendered inside it.

Parameterized routes include:

```text
/articles/:articleId
/articles/:articleId/edit
/categories/:categoryName
```

The article id and category name are read from the URL with `useParams`.

---

## 5. List → Details Flow

### Catalog

The Articles Catalog loads article data from Supabase.

Each article shows basic information and contains a link to its details page.

Articles can also be viewed by category.

The Search page allows searching articles by title, category and short description.

### Details Page

When the user selects an article, React Router navigates to:

```text
/articles/:articleId
```

The article id is read from the URL and is used to request the correct article from Supabase.

The Article Details page displays:

- Article title
- Author
- Author avatar
- Published date
- Updated date when the article has been edited
- Article content
- Article image
- Useful / Not useful feedback
- Comments

Invalid article ids and missing articles are handled with the custom Not Found page.

---

## 6. Data Source & Backend

The project uses Supabase as a Backend-as-a-Service.

Supabase provides:

- PostgreSQL database
- Authentication
- File Storage
- Row Level Security

Because Supabase is a hosted service, there is no separate custom backend server that has to be deployed.

The main database tables used by the application are:

```text
articles
profiles
comments
article_feedback
```

The application also uses Supabase Storage buckets for:

```text
article-images
avatars
```

The data is stored remotely and remains available after refreshing or reopening the application.

---

## 7. Data Operations (CRUD)

The main CRUD collection in the project is `articles`.

### Create

A logged-in user can create an article from the Create Article page.

The form contains:

- Title
- Category
- Short description
- Content
- Image

The user can use an external image URL or upload an image from the computer.

Uploaded images are stored in Supabase Storage.

Each article is connected to its authenticated author through `author_id`.

### Read

Article data is loaded from Supabase and displayed in different parts of the application.

Articles are displayed on:

- Home
- Catalog
- Category pages
- Search results
- Article Details
- Recent Articles sidebar

### Update

The owner of an article can open the Edit page.

The existing article data is loaded into the form.

The user can update the text fields and can:

- Keep the current image
- Use a new external image URL
- Upload a new image

If an uploaded image is replaced, the old Storage file is deleted after the article is updated successfully.

### Delete

Only the article owner can use the Delete action.

Before deleting an article, the application asks for confirmation.

The article is removed from Supabase.

If the article has an uploaded Storage image, the image is also removed.

Article ownership is checked in the React application and is also protected by Supabase Row Level Security.

### Other User Interactions

Comments and article feedback are also stored in Supabase.

Logged-in users can create comments and delete their own comments.

Users can vote:

```text
Useful
Not useful
```

A user can have one feedback record for an article.

The vote can be changed or removed.

---

## 8. Forms & Validation

### Forms Used

The application contains the following forms:

- Register
- Login
- Create Article
- Edit Article
- Search
- Profile
- Add Comment

Create Article and Edit Article use a shared `ArticleForm` component.

### Validation Rules

Some examples of validation in the project are:

**Registration name**

- Required
- Minimum 2 characters

**Email**

- Required
- Must match a valid email format

**Password**

- Minimum 6 characters
- Confirm Password must match the password

**Article title**

- Minimum 5 characters

**Article category**

- A category must be selected

**Short description**

- Minimum 20 characters

**Article content**

- Minimum 50 characters

**Article image URL**

- Must be a valid `http://` or `https://` URL

**Uploaded article images**

- JPEG, PNG or WebP only
- Maximum file size 5 MB

**Profile avatar**

- JPEG, PNG or WebP only
- Maximum file size 5 MB

**Comment**

- Cannot be empty
- Maximum 1000 characters

The forms use controlled React inputs and React event handlers.

Validation and API errors are shown to the user instead of crashing the application.

---

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

The project uses React hooks including:

```text
useState
useEffect
useContext
useRef
useNavigate
useParams
useSearchParams
```

There is also a custom `useAuth` hook.

`useEffect` is used to load remote data and to handle authentication lifecycle behavior.

For example, when a component loads article or comment data, an `AbortController` is created.

When the component unmounts, the request can be cancelled:

```js
const controller = new AbortController();

return () => {
  controller.abort();
};
```

`AuthProvider` also unsubscribes from the Supabase authentication listener when it unmounts.

### Context API

`AuthContext` stores shared authentication information.

It provides:

- Current user
- Current session
- Authentication status
- Loading status
- Register
- Login
- Logout

Components access this data through the `useAuth` hook.

### Component Styling

The project uses external CSS files.

The styles are separated into files such as:

```text
articles.css
forms.css
header.css
footer.css
profile.css
sidebar.css
not-found.css
template.css
```

`styles.css` imports the separate style files.

---

## 10. Typical User Flow

A normal user flow can look like this:

1. The user opens PrintForge and browses the available articles.
2. The user opens an article and reads its content, comments and feedback.
3. The user registers or logs in.
4. After login, the user can create a new article.
5. The user can later edit or delete their own article.
6. The user can open the Profile page and change the display name or avatar.
7. The user can add comments to other articles.
8. The user can vote whether an article was Useful or Not useful.
9. The user logs out when finished.

---

## 11. Error & Edge Case Handling

The application handles different error and edge cases.

Examples include:

- Invalid registration data
- Login errors
- Invalid article form data
- Invalid image URLs
- Unsupported image types
- Image files larger than 5 MB
- Empty comments
- Comments longer than 1000 characters
- Failed article requests
- Failed comment requests
- Failed feedback requests
- Failed profile updates
- Empty search results
- Missing articles
- Invalid article UUIDs
- Unauthorized Edit/Delete attempts
- Loading states while remote data is being requested

The application also removes unused uploaded images if an article operation fails after the file has already been uploaded.

A custom 404 page is displayed for unknown routes and invalid or missing article pages.

---

# Deployment

The frontend is deployed with Vercel:

https://printforge-xi-eight.vercel.app/

The backend is hosted by Supabase.

No separate custom backend server deployment is required because the project uses Supabase as a hosted Backend-as-a-Service.

---

# Architecture Documentation

A short description of the project architecture is available here:

[ARCHITECTURE.md](./ARCHITECTURE.md)

---

# Template Credits

The UI started from the Blogy HTML template by Untree.co, distributed through ThemeWagon.

The template was converted to React components and adapted for this project.