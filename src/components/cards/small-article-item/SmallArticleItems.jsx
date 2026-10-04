import { Link } from "react-router";

function SmallArticleItem({
  id,
  date,
  title,
  description,
}) {
  return (
    <li>
      <span className="date">{date}</span>

      <h3>
        <Link to={`/articles/${id}`}>
          {title}
        </Link>
      </h3>

      <p>{description}</p>

      <p>
        <Link
          to={`/articles/${id}`}
          className="read-more"
        >
          Continue Reading
        </Link>
      </p>
    </li>
  );
}

export default SmallArticleItem;