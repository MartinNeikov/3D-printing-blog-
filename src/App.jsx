import { Route, Routes } from "react-router";

import AppLayout from "./components/app-layout/AppLayout.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import ArticleDetails from "./components/article-details/ArticleDetails.jsx";
import Category from "./components/category/Category.jsx";
import CreateArticle from "./components/create-article/CreateArticle.jsx";
import EditArticle from "./components/edit-article/EditArticle.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Search from "./components/search/Search.jsx";
import NotFound from "./components/not-found/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route path="articles" element={<Catalog />} />
        <Route path="articles/create" element={<CreateArticle />} />
        <Route
          path="articles/:articleId"
          element={<ArticleDetails />}
        />
        <Route
          path="articles/:articleId/edit"
          element={<EditArticle />}
        />

        <Route
          path="categories/:categoryName"
          element={<Category />}
        />

        <Route path="search" element={<Search />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;