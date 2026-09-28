import Sidebar from "../sidebar/Sidebar";

const articles = [
  {
    id: 1,
    image: "/images/img_1_sq.jpg",
    date: "Sep. 28th, 2026",
    category: "3D Printers",
    title: "How to Choose Your First 3D Printer",
    description:
      "A practical guide to choosing a reliable 3D printer based on your experience, budget and projects.",
  },
  {
    id: 2,
    image: "/images/img_2_sq.jpg",
    date: "Sep. 27th, 2026",
    category: "Filaments",
    title: "PLA vs PETG: Which Filament Should You Choose?",
    description:
      "Learn the main differences between PLA and PETG and when each material is the better choice.",
  },
  {
    id: 3,
    image: "/images/img_3_sq.jpg",
    date: "Sep. 26th, 2026",
    category: "Print Settings",
    title: "How to Improve First Layer Adhesion",
    description:
      "Simple settings and preparation techniques that can help you achieve a reliable first layer.",
  },
];

function Catalog() {
  return (
    <>
      <div className="hero overlay inner-page bg-primary py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center pt-5">
            <div className="col-lg-6">
              <h1 className="heading text-white mb-3">Articles</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section search-result-wrap">
        <div className="container">
          <div className="row posts-entry">
            <div className="col-lg-8">
              {articles.map((article) => (
                <div
                  className="blog-entry d-flex blog-entry-search-item"
                  key={article.id}
                >
                  <a href="#" className="img-link me-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid"
                    />
                  </a>

                  <div>
                    <span className="date">
                      {article.date} &bull; <a href="#">{article.category}</a>
                    </span>

                    <h2>
                      <a href="#">{article.title}</a>
                    </h2>

                    <p>{article.description}</p>

                    <p>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
