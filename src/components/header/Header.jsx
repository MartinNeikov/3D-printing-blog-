import { NavLink } from "react-router";

function Header() {
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
                    action="#"
                    className="search-form d-inline-block d-lg-none"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />

                    <span className="bi-search" />
                  </form>

                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    
                    <li>
                      <NavLink to="/articles">Articles</NavLink>
                    </li>

                    <li>
                      <NavLink to="/categories/3d-printers">
                        3D Printers
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/categories/filaments">Filaments</NavLink>
                    </li>

                    <li>
                      <NavLink to="/categories/print-settings">
                        Print Settings
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/categories/projects">Projects</NavLink>
                    </li>

                    <li>
                      <NavLink to="#">Login</NavLink>
                    </li>

                    <li>
                      <NavLink to="#">Register</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-2 text-end">
                  <a
                    to="#"
                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                  >
                    <span />
                  </a>

                  <form
                    action="#"
                    className="search-form d-none d-lg-inline-block"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
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
