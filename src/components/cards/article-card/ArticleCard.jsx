import { Link } from "react-router";

function ArticleCard({ id, image, date, title, description }) {
  return (
    <div className="blog-entry">
      <Link to={`/articles/${id}`} className="img-link">
        <img
          src={image}
          alt={title}
          className="img-fluid"
        />
      </Link>

      <span className="date">{date}</span>

      <h2>
        <Link to={`/articles/${id}`}>
          {title}
        </Link>
      </h2>

      <p>{description}</p>

      <p>
        <Link
          to={`/articles/${id}`}
          className="read-more"
        >
          Continue Reading
        </Link>
      </p>
    </div>
  );
}

export default ArticleCard;