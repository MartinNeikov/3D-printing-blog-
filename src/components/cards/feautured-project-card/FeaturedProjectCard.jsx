import { Link } from "react-router";

function FeaturedProjectCard({
  id,
  image,
  date,
  title,
  className,
  textClassName = "",
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

      <div className={`text ${textClassName}`}>
        <span>{date}</span>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;