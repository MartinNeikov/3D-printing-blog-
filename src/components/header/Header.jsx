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
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>

        <div className="site-mobile-menu-body" />
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  <NavLink to="/" className="logo m-0 float-start">
                    PrintForge<span className="text-primary">.</span>
                  </NavLink>
                </div>

                <div className="col-8 text-center">
                  <form
                    onSubmit={searchSubmitHandler}
                    className="search-form d-inline-block d-lg-none"
                  >
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <span className="bi-search" />
                  </form>

                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
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

                    <li>
                      <NavLink
                        to="/articles"
                        end
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        Articles
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/articles/create"
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        Create Article
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/categories/3d-printers"
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        3D Printers
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/categories/filaments"
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        Filaments
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/categories/print-settings"
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        Print Settings
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/categories/projects"
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        Projects
                      </NavLink>
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
                </div>

                <div className="col-2 text-end">
                  <button
                    type="button"
                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                    aria-label="Open menu"
                  >
                    <span />
                  </button>

                  <form
                    onSubmit={searchSubmitHandler}
                    className="search-form d-none d-lg-inline-block"
                  >
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <span className="bi-search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;