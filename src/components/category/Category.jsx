import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { supabase } from "../../lib/supabaseClient.js";
import Sidebar from "../sidebar/Sidebar.jsx";

const categoryNames = {
  "3d-printers": "3D Printers",
  filaments: "Filaments",
  "print-settings": "Print Settings",
  projects: "Projects",
};

function Category() {
  const { categoryName } = useParams();

  const category = categoryNames[categoryName];

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticles() {
      if (!category) {
        setArticles([]);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError("");

        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("category", category)
          .order("created_at", { ascending: false })
          .abortSignal(controller.signal);

        if (error) {
          throw error;
        }

        setArticles(data ?? []);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load category articles:", error);

        setError(
          "Unable to load articles. Please try again later."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadArticles();

    return () => {
      controller.abort();
    };
  }, [category]);

  if (!category) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h1>Category not found</h1>
          <p>The requested category does not exist.</p>

          <Link to="/articles" className="read-more">
            Back to Articles
          </Link>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="page-status">
        <div className="content-container">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-status">
        <div className="content-container">
          <h2>Unable to load articles</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="content-container">
          <h1 className="page-hero-title">{category}</h1>
        </div>
      </section>

      <section className="section">
        <div className="content-container article-page-layout">
          <div className="article-results">
            {articles.length > 0 ? (
              articles.map((article) => (
                <article
                  className="article-list-item"
                  key={article.id}
                >
                  <Link
                    to={`/articles/${article.id}`}
                    className="article-list-image-link"
                  >
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="article-list-image"
                    />
                  </Link>

                  <div className="article-list-content">
                    <span className="date">
                      {new Date(
                        article.created_at
                      ).toLocaleDateString()}
                    </span>

                    <h2>
                      <Link to={`/articles/${article.id}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p>{article.short_description}</p>

                    <Link
                      to={`/articles/${article.id}`}
                      className="read-more"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p>No articles in this category yet.</p>
            )}
          </div>

          <Sidebar />
        </div>
      </section>
    </>
  );
}

export default Category;