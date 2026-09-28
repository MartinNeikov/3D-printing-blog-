import Sidebar from "../sidebar/Sidebar";


function ArticleDetails() {

  return (
    <>
      <div
        className="site-cover site-cover-sm same-height overlay single-page"
        style={{
          backgroundImage: "url('/images/hero_5.jpg')",
        }}
      >
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-6">
              <div className="post-entry text-center">
                <h1 className="mb-4">
                  How to Choose Your First 3D Printer
                </h1>

                <div className="post-meta align-items-center text-center">
                  <figure className="author-figure mb-0 me-3 d-inline-block">
                    <img
                      src="/images/person_1.jpg"
                      alt="Author"
                      className="img-fluid"
                    />
                  </figure>

                  <span className="d-inline-block mt-1">
                    By Martin
                  </span>

                  <span>
                    &nbsp;-&nbsp; September 28, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row blog-entries">

            <div className="col-md-12 col-lg-8 main-content">
              <div className="post-content-body">
                <p>
                  Choosing your first 3D printer can be confusing because
                  there are many different models, features and price ranges.
                </p>

                <p>
                  For most beginners, an FDM printer is a good starting point.
                  It is affordable, easy to use and supports many different
                  filament materials.
                </p>

                <div className="row my-4">
                  <div className="col-md-12 mb-4">
                    <img
                      src="/images/hero_1.jpg"
                      alt="3D printer"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>

                <p>
                  When choosing a printer, consider build volume, reliability,
                  available materials, replacement parts and community support.
                </p>
              </div>
            </div>

            <Sidebar />

          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleDetails;