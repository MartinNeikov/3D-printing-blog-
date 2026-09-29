import { Link, useParams } from "react-router";
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
    category: "3D Printers",
    title: "FDM 3D Printers Explained",
    description:
      "Learn how FDM printers work and what features matter when choosing a machine.",
  },
  {
    id: 3,
    image: "/images/img_3_sq.jpg",
    date: "Sep. 26th, 2026",
    category: "3D Printers",
    title: "Common Beginner 3D Printing Mistakes",
    description:
      "A look at some of the most common mistakes new users make when starting with 3D printing.",
  },
];

function Category() {
  const { categoryName } = useParams();

  return (
    <div className="section search-result-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">Category: {categoryName}</div>
          </div>
        </div>

        <div className="row posts-entry">
          <div className="col-lg-8">
            {articles.map((article) => (
              <div
                className="blog-entry d-flex blog-entry-search-item"
                key={article.id}
              >
                <Link to={`/articles/${article.id}`} className="img-link me-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="img-fluid"
                  />
                </Link>

                <div>
                  <span className="date">
                    {article.date} &bull;{" "}
                    <Link
                      to={`/categories/${article.category
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {article.category}
                    </Link>
                  </span>

                  <h2>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                  </h2>

                  <p>{article.description}</p>

                  <p>
                    <Link
                      to={`/articles/${article.id}`}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Category;
