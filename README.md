# PrintForge

> React project developed for the **SoftUni ReactJS Regular Exam 2026**.

PrintForge is a community-oriented blog focused on **3D printing**, including topics such as:

- 3D printers
- Filaments
- Print settings
- Projects
- Troubleshooting
- Guides
- Reviews

---

## 📌 Current Project Status

The project currently has its **main application structure, authentication, article CRUD, ownership rules, and Supabase Storage integration implemented**.

### ✅ Implemented so far

- React project created with **Vite**
- **ESLint** configured
- Blogy HTML template converted to **JSX**
- Custom CSS structure created without Bootstrap
- Reusable `Header` and `Footer` components
- Reusable article cards and section components
- Shared `ArticleForm` used by Create and Edit pages
- Client-side routing with **React Router**
- Public Catalog and Article Details pages
- Category filtering
- Search functionality
- Custom Not Found route
- User registration with **Supabase Authentication**
- User login and logout
- Persistent authentication session
- Authentication state shared through **Context API**
- Private route guard for authenticated-only pages
- Guest route guard for Login and Register
- Remote article data stored in **Supabase PostgreSQL**
- Full article CRUD functionality
- Article ownership through `author_id`
- Owner-only Edit and Delete actions
- Supabase **Row Level Security (RLS)** policies for article ownership
- Article image support through either:
  - external image URL
  - local image upload
- Article images stored in **Supabase Storage**
- Uploaded image cleanup when an article image is replaced
- Uploaded image cleanup when an article is deleted
- Image file type and file size restrictions
- Form validation and visible error states
- Loading states for remote data
- Production build tested successfully

### 🚧 Still to be implemented

- Comments
- Likes / Unlike functionality
- User profiles
- User display names and avatars from profile data
- Supabase Storage for profile avatars
- Final custom 404 design
- Final architecture documentation
- Final production deployment and deployment URL
- Final README review before submission

---

## 🧩 Current Project Structure

```text
src/
├── components/
│   ├── app-layout/
│   │   └── AppLayout.jsx
│   ├── article-details/
│   │   └── ArticleDetails.jsx
│   ├── article-form/
│   │   └── ArticleForm.jsx
│   ├── cards/
│   │   ├── article-card/
│   │   └── featured-article-card/
│   ├── catalog/
│   │   └── Catalog.jsx
│   ├── category/
│   │   └── Category.jsx
│   ├── create-article/
│   │   └── CreateArticle.jsx
│   ├── edit-article/
│   │   └── EditArticle.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── header/
│   │   └── Header.jsx
│   ├── home/
│   │   └── Home.jsx
│   ├── login/
│   │   └── Login.jsx
│   ├── not-found/
│   │   └── NotFound.jsx
│   ├── register/
│   │   └── Register.jsx
│   ├── route-guards/
│   │   ├── GuestRoute.jsx
│   │   └── PrivateRoute.jsx
│   ├── search/
│   │   └── Search.jsx
│   ├── section-header/
│   │   └── SectionHeader.jsx
│   └── sidebar/
│       └── Sidebar.jsx
│
├── contexts/
│   ├── AuthContext.js
│   └── AuthProvider.jsx
│
├── hooks/
│   └── useAuth.js
│
├── lib/
│   └── supabaseClient.js
│
├── services/
│   ├── articleService.js
│   ├── authService.js
│   └── imageService.js
│
├── styles/
│   ├── articles.css
│   ├── footer.css
│   ├── forms.css
│   ├── header.css
│   ├── sidebar.css
│   ├── styles.css
│   └── template.css
│
├── utils/
│   └── validation.js
│
├── App.jsx
└── Main.jsx
```

---

## 🏠 Main Application Sections

The application currently contains content and navigation around these 3D printing categories:

- **3D Printers**
- **Filaments**
- **Print Settings**
- **Projects**

Users can browse all articles, open article details, browse by category, and search for articles.

---

## 🛠 Technologies Used

- **React**
- **JavaScript**
- **JSX**
- **React Router**
- **Vite**
- **ESLint**
- **Supabase Authentication**
- **Supabase PostgreSQL**
- **Supabase Storage**
- **HTML**
- **CSS**

---

## ▶️ Run the Project Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Supabase environment variables

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

The `.env.local` file is ignored by Git through the existing `*.local` rule in `.gitignore`.

### 3. Start the development server

```bash
npm run dev
```

### 4. Run ESLint

```bash
npm run lint
```

### 5. Create a production build

```bash
npm run build
```

---

## 🌐 Deployment

A test deployment will be created with **Vercel**.

The production frontend URL will be added here after the deployment is completed.

**Frontend URL:** Pending

The backend services are provided by **Supabase**, so no separate custom backend server deployment is required.

---

# 📖 Functional Guide

## 1. Project Overview

**Application Name:** PrintForge

**Application Category / Topic:** Blog / 3D Printing Community

**Main Purpose:**  
PrintForge is a web application for reading and sharing articles related to 3D printing. The application provides content about printers, filaments, print settings, projects, troubleshooting, guides, and reviews.

Registered users can create their own articles and manage the articles they own, while guests can browse the public content without access to protected actions.

---

## 2. User Access & Permissions

### Guest (Not Authenticated)

Guests can access:

- Home page
- Article Catalog
- Article Details
- Category pages
- Search page
- Login page
- Register page

Guests can read public article data but cannot:

- Create articles
- Edit articles
- Delete articles

### Authenticated User

Authenticated users can:

- Access all public pages
- Create new articles
- Edit their own articles
- Delete their own articles
- Upload article images
- Use an external image URL instead of uploading an image

Authenticated users cannot edit or delete articles created by another user.

---

## 3. Authentication & Session Handling

### Authentication Flow

- When the application loads, the current Supabase session is requested.
- The session and current user are stored in `AuthProvider`.
- Login uses Supabase email/password authentication.
- Registration creates a real Supabase Auth user.
- Logout ends the current Supabase session.
- Authentication changes are monitored through the Supabase auth state listener.

### Session Persistence

Authentication state is shared through **Context API**.

Supabase manages the persisted authentication session, allowing the user to remain logged in after a page refresh.

---

## 4. Routing Structure

Current routes include:

```text
/                              Home
/articles                      Catalog
/articles/create               Create Article
/articles/:articleId           Article Details
/articles/:articleId/edit      Edit Article
/categories/:categoryName      Category
/search                        Search
/login                         Login
/register                      Register
*                              Not Found
```

### Route Guards

- `PrivateRoute` protects authenticated-only routes such as Create and Edit.
- Guests who try to access protected routes are redirected to Login.
- `GuestRoute` protects Login and Register from already authenticated users.
- Logged-in users who try to open Login or Register are redirected to the Home page.

---

## 5. List → Details Flow

Articles are loaded from Supabase instead of being hardcoded in the React application.

The Catalog displays multiple articles. Selecting an article navigates to:

```text
/articles/:articleId
```

The Details page loads the selected article using its URL parameter.

Category routes also use a URL parameter:

```text
/categories/:categoryName
```

---

## 6. Backend / Remote Data

The project uses **Supabase** as a Backend-as-a-Service.

Supabase currently provides:

- PostgreSQL database
- Authentication
- Row Level Security
- File Storage

Article data is stored in the `articles` table and accessed through the Supabase JavaScript SDK.

Article images uploaded from the user's computer are stored in the `article-images` Storage bucket.

---

## 7. CRUD Operations

### Create

Authenticated users can create a new article through the Create Article form.

An article can use either:

- an external image URL
- an uploaded JPEG, PNG, or WebP image

The article owner is assigned through the authenticated Supabase user ID.

### Read

Articles are loaded remotely from Supabase and displayed in:

- Home
- Catalog
- Category pages
- Search results
- Article Details
- Recent Articles sidebar

### Update

Only the article owner can access the Edit action.

The owner can update the article content and can:

- keep the current image
- replace it with an external URL
- upload a new image

When an uploaded image is replaced, the old Storage file is removed after a successful article update.

### Delete

Only the article owner can see and use the Delete action.

After confirmation, the article is deleted from Supabase. If the article uses an uploaded Storage image, that file is also removed from the Storage bucket.

Ownership is enforced both in the UI and through Supabase RLS policies.

---

## 8. Forms & Validation

### Forms Used

- Register form
- Login form
- Create Article form
- Edit Article form
- Search form

### Current Validation Rules

Examples of implemented validation include:

- Name is required and must contain at least 2 characters.
- Email is required and must match a valid email format.
- Password must contain at least 6 characters.
- Password confirmation must match the password.
- Article title must contain at least 5 characters.
- Article category must be selected.
- Short description must contain at least 20 characters.
- Article content must contain at least 50 characters.
- Image URL must use a valid `http://` or `https://` URL when URL mode is selected.
- Uploaded files are limited to JPEG, PNG, and WebP.
- Uploaded files are limited to 5 MB.

Forms use controlled inputs and React synthetic events.

---

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

The project currently uses:

- `useState`
- `useEffect`
- `useContext`
- `useRef`
- `useNavigate`
- `useParams`
- custom `useAuth` hook

`useEffect` is used for remote data loading and authentication lifecycle behavior. Abort controllers are used when loading article data so requests can be cancelled when a component unmounts.

### Context API

`AuthContext` shares authentication information across the application, including:

- current user
- authentication state
- loading state
- login
- register
- logout

### Component Styling

The project uses external CSS files separated by application area, including article, form, header, footer, sidebar, and template styles.

---

## 10. Typical User Flow

A typical authenticated user can:

1. Open the application and browse existing articles.
2. Register or log in.
3. Create an article and choose an external image URL or upload an image.
4. Open the created article from the Catalog.
5. Edit the article because they are its owner.
6. Replace or keep the current image.
7. Delete the article when it is no longer needed.
8. Log out.

---

## 11. Error & Edge Case Handling

The application currently handles:

- Invalid registration input
- Invalid article form input
- Invalid image URLs
- Unsupported image file types
- Images larger than the configured limit
- Authentication errors
- Article loading errors
- Article update errors
- Article delete errors
- Missing articles
- Unauthorized Edit/Delete attempts
- Loading states during remote requests
- Cleanup of unused uploaded images after failed Create or Update operations
- Cleanup of replaced and deleted article Storage images

---

## 🎨 Template Credits

The project UI is based on the **Blogy** template by **Untree.co**, distributed by **ThemeWagon**.

The original template attribution is preserved in the project.

---

## 📝 Development Notes

This `README.md` is updated after major project milestones so that it reflects **only functionality that has actually been implemented**.

Comments, likes, profiles, final documentation, and the final production deployment are still planned and will be added in later development stages.
