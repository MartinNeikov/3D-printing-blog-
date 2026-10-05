import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  function searchSubmitHandler(e) {
    e.preventDefault();

    const value = searchValue.trim();

    if (!value) {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(value)}`);
    setSearchValue("");
  }

  return (
    <nav className="site-nav">
      <div className="header-container">
        <NavLink to="/" className="logo">
          PrintForge<span>.</span>
        </NavLink>

        <ul className="site-menu">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li className="has-children">
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Articles
            </NavLink>

            <ul className="dropdown">
              <li>
                <NavLink to="/categories/3d-printers">
                  3D Printers
                </NavLink>
              </li>

              <li>
                <NavLink to="/categories/filaments">
                  Filaments
                </NavLink>
              </li>

              <li>
                <NavLink to="/categories/print-settings">
                  Print Settings
                </NavLink>
              </li>

              <li>
                <NavLink to="/categories/projects">
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/articles/create">
                  Create Article
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </ul>

        <form
          onSubmit={searchSubmitHandler}
          className="header-search"
        >
          <input
            type="search"
            className="header-search-input"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            type="submit"
            className="search-submit"
            aria-label="Search"
          >
            <span
              className="search-icon"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;