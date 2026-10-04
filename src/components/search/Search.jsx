import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

import { supabase } from "../../lib/supabaseClient.js";
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

    async function searchArticles() {
      if (!query) {
        setArticles([]);
        setIsLoading(false);
        setError("");
        return;
      }

      try {
        setIsLoading(true);
        setError("");

        const safeQuery = query.replaceAll(",", " ");

        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .or(
            `title.ilike.%${safeQuery}%,short_description.ilike.%${safeQuery}%,category.ilike.%${safeQuery}%`,
          )
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

        console.error("Failed to search articles:", error);
        setError("Unable to search articles. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    searchArticles();

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
    <div className="section search-result-wrap">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h1 className="mb-4">Search Articles</h1>

            <form onSubmit={submitHandler} className="d-flex gap-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search articles..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />

              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="row posts-entry">
          <div className="col-lg-8">
            {!query && <p>Enter a word or phrase to search the articles.</p>}

            {query && (
              <div className="mb-4">
                <h2>Search results for: "{query}"</h2>
              </div>
            )}

            {isLoading && <p>Searching articles...</p>}

            {error && (
              <div>
                <h2>Search failed</h2>
                <p>{error}</p>
              </div>
            )}

            {!isLoading && !error && query && articles.length === 0 && (
              <div>
                <h2>No articles found</h2>
                <p>No results were found for "{query}".</p>
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
                      {article.category}
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

export default Search;
