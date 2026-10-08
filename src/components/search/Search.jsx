import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

import { searchArticles } from "../../services/articleService.js";
import Sidebar from "../sidebar/Sidebar.jsx";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q")?.trim() ?? "";

  const [searchValue, setSearchValue] = useState(query);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadSearchResults() {
      if (!query) {
        setArticles([]);
        setIsLoading(false);
        setError("");

        return;
      }

      try {
        setIsLoading(true);
        setError("");

        const data = await searchArticles(
          query,
          controller.signal
        );

        setArticles(data);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(
          "Failed to search articles:",
          error
        );

        setError(
          "Unable to search articles. Please try again later."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadSearchResults();

    return () => {
      controller.abort();
    };
  }, [query]);

  function submitHandler(e) {
    e.preventDefault();

    const value = searchValue.trim();

    if (!value) {
      setSearchParams({});
      return;
    }

    setSearchParams({ q: value });
  }

  return (
    <>
      <section className="page-hero">
        <div className="content-container">
          <h1 className="page-hero-title">
            Search
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="content-container">
          <div className="search-page-header">
            <h2 className="search-page-title">
              Search Articles
            </h2>

            <form
              onSubmit={submitHandler}
              className="search-page-form"
            >
              <input
                type="search"
                className="search-page-input"
                placeholder="Search by title, category..."
                value={searchValue}
                onChange={(e) =>
                  setSearchValue(e.target.value)
                }
              />

              <button
                type="submit"
                className="form-submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className="article-page-layout">
            <div className="article-results">
              {query && (
                <div className="search-results-title">
                  <h2>
                    Results for &quot;{query}&quot;
                  </h2>
                </div>
              )}

              {isLoading && <p>Searching...</p>}

              {error && <p>{error}</p>}

              {!isLoading &&
                !error &&
                query &&
                articles.length === 0 && (
                  <p>No articles found.</p>
                )}

              {!isLoading &&
                !error &&
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
                        {" • "}
                        {article.category}
                      </span>

                      <h2>
                        <Link
                          to={`/articles/${article.id}`}
                        >
                          {article.title}
                        </Link>
                      </h2>

                      <p>
                        {article.short_description}
                      </p>

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
        </div>
      </section>
    </>
  );
}

export default Search;