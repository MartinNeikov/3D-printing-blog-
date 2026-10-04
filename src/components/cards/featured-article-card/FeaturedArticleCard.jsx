import { Link } from "react-router";

function FeaturedArticleCard({
  id,
  image,
  date,
  title,
  className,
}) {
  return (
    <Link
      to={`/articles/${id}`}
      className={className}
    >
      <div
        className="featured-img"
        style={{ backgroundImage: `url("${image}")` }}
      />

      <div className="text">
        <span className="date">{date}</span>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default FeaturedArticleCard;