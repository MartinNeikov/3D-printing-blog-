import { useEffect, useState } from "react";
import { Link } from "react-router";

import { supabase } from "../../lib/supabaseClient.js";
import Sidebar from "../sidebar/Sidebar.jsx";

function Catalog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticles() {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("articles")
          .select("*")
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

        console.error("Failed to load articles:", error);
        setError(error.message);
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
  }, []);

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
          <p>Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="content-container">
          <h1 className="page-hero-title">Articles</h1>
        </div>
      </section>

      <section className="section">
        <div className="content-container article-page-layout">
          <div className="article-results">
            {articles.map((article) => (
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
                    {" • "}
                    <Link
                      to={`/categories/${article.category
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {article.category}
                    </Link>
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
            ))}
          </div>

          <Sidebar />
        </div>
      </section>
    </>
  );
}

export default Catalog;