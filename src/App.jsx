function App() {
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
              <a href="index.html" className="logo m-0 float-start">
                Blogy<span className="text-primary">.</span>
              </a>
            </div>
            <div className="col-8 text-center">
              <form action="#" className="search-form d-inline-block d-lg-none">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bi-search" />
              </form>
              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li className="has-children">
                  <a href="category.html">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="search-result.html">Search Result</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="single.html">Blog Single</a>
                    </li>
                    <li>
                      <a href="category.html">Category</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Menu One</a>
                    </li>
                    <li>
                      <a href="#">Menu Two</a>
                    </li>
                    <li className="has-children">
                      <a href="#">Dropdown</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Sub Menu One</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu Two</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="category.html">Culture</a>
                </li>
                <li>
                  <a href="category.html">Business</a>
                </li>
                <li>
                  <a href="category.html">Politics</a>
                </li>
              </ul>
            </div>
            <div className="col-2 text-end">
              <a
                href="#"
                className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              >
                <span />
              </a>
              <form action="#" className="search-form d-none d-lg-inline-block">
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
  {/* Start retroy layout blog posts */}
  <section className="section bg-light">
    <div className="container">
      <div className="row align-items-stretch retro-layout">
        <div className="col-md-4">
          <a href="single.html" className="h-entry mb-30 v-height gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_2_horizontal.jpg")' }}
            />
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>AI can now kill those annoying cookie pop-ups</h2>
            </div>
          </a>
          <a href="single.html" className="h-entry v-height gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_5_horizontal.jpg")' }}
            />
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Don’t assume your user data in the cloud is safe</h2>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="single.html" className="h-entry img-5 h-100 gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_1_vertical.jpg")' }}
            />
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Why is my internet so slow?</h2>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="single.html" className="h-entry mb-30 v-height gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_3_horizontal.jpg")' }}
            />
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Startup vs corporate: What job suits you best?</h2>
            </div>
          </a>
          <a href="single.html" className="h-entry v-height gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_4_horizontal.jpg")' }}
            />
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Thought you loved Python? Wait until you meet Rust</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* End retroy layout blog posts */}
  {/* Start posts-entry */}
  <section className="section posts-entry">
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm-6">
          <h2 className="posts-entry-title">Business</h2>
        </div>
        <div className="col-sm-6 text-sm-end">
          <a href="category.html" className="read-more">
            View All
          </a>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-9">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="single.html" className="img-link">
                  <img
                    src="/images/img_1_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <span className="date">Apr. 14th, 2022</span>
                <h2>
                  <a href="single.html">
                    Thought you loved Python? Wait until you meet Rust
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <a
                    href="single.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="single.html" className="img-link">
                  <img
                    src="/images/img_2_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <span className="date">Apr. 14th, 2022</span>
                <h2>
                  <a href="single.html">
                    Startup vs corporate: What job suits you best?
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <a
                    href="single.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled blog-entry-sm">
            <li>
              <span className="date">Apr. 14th, 2022</span>
              <h3>
                <a href="single.html">
                  Don’t assume your user data in the cloud is safe
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nobis ea quis inventore vel voluptas.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </li>
            <li>
              <span className="date">Apr. 14th, 2022</span>
              <h3>
                <a href="single.html">Meta unveils fees on metaverse sales</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nobis ea quis inventore vel voluptas.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </li>
            <li>
              <span className="date">Apr. 14th, 2022</span>
              <h3>
                <a href="single.html">UK sees highest inflation in 30 years</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nobis ea quis inventore vel voluptas.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* End posts-entry */}
  {/* Start posts-entry */}
  <section className="section posts-entry posts-entry-sm bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="blog-entry">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_1_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <span className="date">Apr. 14th, 2022</span>
            <h2>
              <a href="single.html">
                Thought you loved Python? Wait until you meet Rust
              </a>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              <a href="#" className="read-more">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blog-entry">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_2_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <span className="date">Apr. 14th, 2022</span>
            <h2>
              <a href="single.html">
                Startup vs corporate: What job suits you best?
              </a>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              <a href="#" className="read-more">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blog-entry">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_3_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <span className="date">Apr. 14th, 2022</span>
            <h2>
              <a href="single.html">UK sees highest inflation in 30 years</a>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              <a href="#" className="read-more">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blog-entry">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_4_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <span className="date">Apr. 14th, 2022</span>
            <h2>
              <a href="single.html">
                Don’t assume your user data in the cloud is safe
              </a>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              <a href="#" className="read-more">
                Continue Reading
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End posts-entry */}
  {/* Start posts-entry */}
  <section className="section posts-entry">
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm-6">
          <h2 className="posts-entry-title">Culture</h2>
        </div>
        <div className="col-sm-6 text-sm-end">
          <a href="category.html" className="read-more">
            View All
          </a>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-9 order-md-2">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="single.html" className="img-link">
                  <img
                    src="/images/img_1_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <span className="date">Apr. 14th, 2022</span>
                <h2>
                  <a href="single.html">
                    Thought you loved Python? Wait until you meet Rust
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <a
                    href="single.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="single.html" className="img-link">
                  <img
                    src="/images/img_2_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <span className="date">Apr. 14th, 2022</span>
                <h2>
                  <a href="single.html">
                    Startup vs corporate: What job suits you best?
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <a
                    href="single.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled blog-entry-sm">
            <li>
              <span className="date">Apr. 14th, 2022</span>
              <h3>
                <a href="single.html">
                  Don’t assume your user data in the cloud is safe
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nobis ea quis inventore vel voluptas.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </li>
            <li>
              <span className="date">Apr. 14th, 2022</span>
              <h3>
                <a href="single.html">Meta unveils fees on metaverse sales</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nobis ea quis inventore vel voluptas.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </li>
            <li>
              <span className="date">Apr. 14th, 2022</span>
              <h3>
                <a href="single.html">UK sees highest inflation in 30 years</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nobis ea quis inventore vel voluptas.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="section">
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm-6">
          <h2 className="posts-entry-title">Politics</h2>
        </div>
        <div className="col-sm-6 text-sm-end">
          <a href="category.html" className="read-more">
            View All
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_7_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_6_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_5_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_4_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_3_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_5.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_2_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_1_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_4_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="post-entry-alt">
            <a href="single.html" className="img-link">
              <img
                src="/images/img_3_horizontal.jpg"
                alt="Image"
                className="img-fluid"
              />
            </a>
            <div className="excerpt">
              <h2>
                <a href="single.html">
                  Startup vs corporate: What job suits you best?
                </a>
              </h2>
              <div className="post-meta align-items-center text-left clearfix">
                <figure className="author-figure mb-0 me-3 float-start">
                  <img
                    src="/images/person_5.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By <a href="#">David Anderson</a>
                </span>
                <span>&nbsp;-&nbsp; July 19, 2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                quia porro id est.
              </p>
              <p>
                <a href="#" className="read-more">
                  Continue Reading
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="section bg-light">
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm-6">
          <h2 className="posts-entry-title">Travel</h2>
        </div>
        <div className="col-sm-6 text-sm-end">
          <a href="category.html" className="read-more">
            View All
          </a>
        </div>
      </div>
      <div className="row align-items-stretch retro-layout-alt">
        <div className="col-md-5 order-md-2">
          <a href="single.html" className="hentry img-1 h-100 gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_2_vertical.jpg")' }}
            />
            <div className="text">
              <span>February 12, 2019</span>
              <h2>Meta unveils fees on metaverse sales</h2>
            </div>
          </a>
        </div>
        <div className="col-md-7">
          <a href="single.html" className="hentry img-2 v-height mb30 gradient">
            <div
              className="featured-img"
              style={{ backgroundImage: 'url("/images/img_1_horizontal.jpg")' }}
            />
            <div className="text text-sm">
              <span>February 12, 2019</span>
              <h2>AI can now kill those annoying cookie pop-ups</h2>
            </div>
          </a>
          <div className="two-col d-block d-md-flex justify-content-between">
            <a href="single.html" className="hentry v-height img-2 gradient">
              <div
                className="featured-img"
                style={{ backgroundImage: 'url("/images/img_2_sq.jpg")' }}
              />
              <div className="text text-sm">
                <span>February 12, 2019</span>
                <h2>Don’t assume your user data in the cloud is safe</h2>
              </div>
            </a>
            <a
              href="single.html"
              className="hentry v-height img-2 ms-auto float-end gradient"
            >
              <div
                className="featured-img"
                style={{ backgroundImage: 'url("/images/img_3_sq.jpg")' }}
              />
              <div className="text text-sm">
                <span>February 12, 2019</span>
                <h2>Startup vs corporate: What job suits you best?</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="widget">
            <h3 className="mb-4">About</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>{" "}
          {/* /.widget */}
          <div className="widget">
            <h3>Social</h3>
            <ul className="list-unstyled social">
              <li>
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-dribbble" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-4 */}
        <div className="col-lg-4 ps-lg-5">
          <div className="widget">
            <h3 className="mb-4">Company</h3>
            <ul className="list-unstyled float-start links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Vision</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
            <ul className="list-unstyled float-start links">
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Creative</a>
              </li>
            </ul>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <div className="widget">
            <h3 className="mb-4">Recent Post Entry</h3>
            <div className="post-entry-footer">
              <ul>
                <li>
                  <a href="">
                    <img
                      src="/images/img_1_sq.jpg"
                      alt="Image placeholder"
                      className="me-4 rounded"
                    />
                    <div className="text">
                      <h4>
                        There’s a Cool New Way for Men to Wear Socks and Sandals
                      </h4>
                      <div className="post-meta">
                        <span className="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="/images/img_2_sq.jpg"
                      alt="Image placeholder"
                      className="me-4 rounded"
                    />
                    <div className="text">
                      <h4>
                        There’s a Cool New Way for Men to Wear Socks and Sandals
                      </h4>
                      <div className="post-meta">
                        <span className="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="/images/img_3_sq.jpg"
                      alt="Image placeholder"
                      className="me-4 rounded"
                    />
                    <div className="text">
                      <h4>
                        There’s a Cool New Way for Men to Wear Socks and Sandals
                      </h4>
                      <div className="post-meta">
                        <span className="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-4 */}
      </div>{" "}
      {/* /.row */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          {/* 
        **==========
        NOTE: 
        Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
        **==========
      */}
          <p>
            Copyright ©. All Rights Reserved. — Designed with love by{" "}
            <a href="https://untree.co">Untree.co</a> Distributed by{" "}
            <a href="https://themewagon.com">ThemeWagon</a>{" "}
            {/* License information: https://untree.co/license/ */}
          </p>
        </div>
      </div>
    </div>{" "}
    {/* /.container */}
  </footer>{" "}
  {/* /.site-footer */}
        </>
    );
}

export default App;
