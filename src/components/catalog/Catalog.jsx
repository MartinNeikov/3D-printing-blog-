import { Link } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import { supabase } from "../../lib/supabaseClient.js";
import { useEffect, useState } from "react";

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

        setArticles(data);
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
      <div className="container py-5 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h2>Unable to load articles</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <div className="hero overlay inner-page bg-primary py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center pt-5">
            <div className="col-lg-6">
              <h1 className="heading text-white mb-3">Articles</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section search-result-wrap">
        <div className="container">
          <div className="row posts-entry">
            <div className="col-lg-8">
              {articles.map((article) => (
                <div
                  className="blog-entry d-flex blog-entry-search-item"
                  key={article.id}
                >
                  <Link
                    to={`/articles/${article.id}`}
                    className="img-link me-4"
                  >
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="img-fluid"
                    />
                  </Link>

                  <div>
                    <span className="date">
                      {new Date(article.created_at).toLocaleDateString()} &bull;{" "}
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

                    <p>
                      <Link
                        to={`/articles/${article.id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
