import { Link } from "react-router";

import { useAuth } from "../../hooks/useAuth.js";

function Footer() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="widget">
              <h3>About PrintForge</h3>

              <p>
                A community-driven 3D printing blog for sharing
                practical guides, printer knowledge, filament tips,
                print settings, and creative projects.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <div className="widget">
              <h3>Explore</h3>

              <ul className="links">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/articles">Articles</Link>
                </li>

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
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="widget">
              <h3>Topics</h3>

              <ul className="links">
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

                {!isLoading && isAuthenticated && (
                  <li>
                    <Link to="/articles/create">
                      Create Article
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 PrintForge. All Rights Reserved.
            {" — "}
            Designed with love by{" "}
            <a
              href="https://untree.co"
              target="_blank"
              rel="noreferrer"
            >
              Untree.co
            </a>
            {" — "}
            Distributed by{" "}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noreferrer"
            >
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;