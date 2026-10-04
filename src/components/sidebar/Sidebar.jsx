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

        console.error("Failed to load recent articles:", error);
      }
    }

    loadRecentArticles();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="col-md-12 col-lg-4 sidebar">
      <div className="sidebar-box">
        <h3 className="heading">Recent Articles</h3>

        <div className="post-entry-sidebar">
          <ul>
            {recentArticles.map((article) => (
              <li key={article.id}>
                <Link to={`/articles/${article.id}`}>
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="me-4 rounded"
                  />

                  <div className="text">
                    <h4>{article.title}</h4>

                    <div className="post-meta">
                      <span className="mr-2">
                        {new Date(
                          article.created_at
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-box">
        <h3 className="heading">Categories</h3>

        <ul className="categories">
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
          className="btn btn-outline-primary w-100"
        >
          View All Articles
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;