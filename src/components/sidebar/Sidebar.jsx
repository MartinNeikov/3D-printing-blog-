function Sidebar() {
  return (
    <div className="col-md-12 col-lg-4 sidebar">
      <div className="sidebar-box search-form-wrap mb-4">
        <form className="sidebar-search-form">
          <span className="bi-search"></span>

          <input
            type="text"
            className="form-control"
            placeholder="Search articles..."
          />
        </form>
      </div>

      <div className="sidebar-box">
        <h3 className="heading">Popular Posts</h3>

        <div className="post-entry-sidebar">
          <ul>
            <li>
              <a href="#">
                <img
                  src="/images/img_1_sq.jpg"
                  alt="Popular article"
                  className="me-4 rounded"
                />

                <div className="text">
                  <h4>How to Choose Your First 3D Printer</h4>

                  <div className="post-meta">
                    <span className="mr-2">
                      September 28, 2026
                    </span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <img
                  src="/images/img_2_sq.jpg"
                  alt="Popular article"
                  className="me-4 rounded"
                />

                <div className="text">
                  <h4>PLA vs PETG: Which Should You Choose?</h4>

                  <div className="post-meta">
                    <span className="mr-2">
                      September 27, 2026
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-box">
        <h3 className="heading">Categories</h3>

        <ul className="categories">
          <li><a href="#">3D Printers</a></li>
          <li><a href="#">Filaments</a></li>
          <li><a href="#">Print Settings</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>

      <div className="sidebar-box">
        <h3 className="heading">Tags</h3>

        <ul className="tags">
          <li><a href="#">FDM</a></li>
          <li><a href="#">PLA</a></li>
          <li><a href="#">PETG</a></li>
          <li><a href="#">Bambu Lab</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;