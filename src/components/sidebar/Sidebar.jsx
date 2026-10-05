import { useEffect, useState } from "react";
import { Link } from "react-router";

import { supabase } from "../../lib/supabaseClient.js";

function Sidebar() {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRecentArticles() {
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("id, title, image_url, created_at")
          .order("created_at", { ascending: false })
          .limit(3)
          .abortSignal(controller.signal);

        if (error) {
          throw error;
        }

        setRecentArticles(data ?? []);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(
          "Failed to load recent articles:",
          error,
        );
      }
    }

    loadRecentArticles();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-box">
        <h3 className="sidebar-heading">
          Recent Articles
        </h3>

        <ul className="recent-articles">
          {recentArticles.map((article) => (
            <li
              className="recent-article"
              key={article.id}
            >
              <Link
                to={`/articles/${article.id}`}
                className="recent-article-link"
              >
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="recent-article-image"
                />

                <div className="recent-article-content">
                  <h4>{article.title}</h4>

                  <span className="recent-article-date">
                    {new Date(
                      article.created_at,
                    ).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-box">
        <h3 className="sidebar-heading">
          Categories
        </h3>

        <ul className="sidebar-categories">
          <li>
            <Link to="/categories/3d-printers">
              3D Printers
            </Link>
          </li>

          <li>
            <Link to="/categories/filaments">
              Filaments
            </Link>
          </li>

          <li>
            <Link to="/categories/print-settings">
              Print Settings
            </Link>
          </li>

          <li>
            <Link to="/categories/projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-box">
        <Link
          to="/articles"
          className="sidebar-all-link"
        >
          View All Articles
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;