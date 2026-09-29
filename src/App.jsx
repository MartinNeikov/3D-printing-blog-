import { Routes, Route } from "react-router";

import AppLayout from "./components/app-layout/AppLayout.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import ArticleDetails from "./components/article-details/ArticleDetails.jsx";
import Category from "./components/category/Category.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route
          path="articles"
          element={<Catalog />}
        />

        <Route
          path="articles/:articleId"
          element={<ArticleDetails />}
        />

        <Route
          path="categories/:categoryName"
          element={<Category />}
        />
      </Route>
    </Routes>
  );
}

export default App;