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

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const category = categoryNames[categoryName];

  useEffect(() => {
    const controller = new AbortController();

    async function loadArticles() {
      if (!category) {
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
        setError("Unable to load articles. Please try again later.");
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
      <div className="section">
        <div className="container">
          <h1>Category not found</h1>
          <p>The requested category does not exist.</p>

          <Link to="/articles" className="btn btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section search-result-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">Category: {category}</div>
          </div>
        </div>

        <div className="row posts-entry">
          <div className="col-lg-8">
            {isLoading && <p>Loading articles...</p>}

            {error && (
              <div>
                <h2>Unable to load articles</h2>
                <p>Please try again later.</p>
              </div>
            )}

            {!isLoading && !error && articles.length === 0 && (
              <div>
                <h2>No articles yet</h2>
                <p>
                  There are currently no articles in the {category} category.
                </p>
              </div>
            )}

            {!isLoading &&
              !error &&
              articles.map((article) => (
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
                      {new Date(article.created_at).toLocaleDateString()}
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
  );
}

export default Category;