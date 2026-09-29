import { useParams } from "react-router";
import Sidebar from "../sidebar/Sidebar";

const articles = [
  {
    id: 1,
    title: "How to Choose Your First 3D Printer",
    date: "September 28, 2026",
    image: "/images/img_1_sq.jpg",
    content:
      "A practical guide to choosing a reliable 3D printer based on your experience, budget and projects.",
  },
  {
    id: 2,
    title: "PLA vs PETG: Which Filament Should You Choose?",
    date: "September 27, 2026",
    image: "/images/img_2_sq.jpg",
    content:
      "Learn the main differences between PLA and PETG and when each material is the better choice.",
  },
  {
    id: 3,
    title: "How to Improve First Layer Adhesion",
    date: "September 26, 2026",
    image: "/images/img_3_sq.jpg",
    content:
      "Simple settings and preparation techniques that can help you achieve a reliable first layer.",
  },
];

function ArticleDetails() {
  const { articleId } = useParams();
  const article = articles.find((article) => article.id === Number(articleId));

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
                <h1 className="mb-4">{article.title}</h1>
                

                <div className="post-meta align-items-center text-center">
                  <figure className="author-figure mb-0 me-3 d-inline-block">
                    <img
                      src="/images/person_1.jpg"
                      alt="Author"
                      className="img-fluid"
                    />
                  </figure>

                  <span className="d-inline-block mt-1">By Martin</span>

                  <span>&nbsp;-&nbsp; {article.date}</span>
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
                <p>{article.content}</p>

                <div className="row my-4">
                  <div className="col-md-12 mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
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
