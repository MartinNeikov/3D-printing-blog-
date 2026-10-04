import { Link } from "react-router";

function AuthorArticleCard({
  id,
  image,
  title,
  authorImage,
  author,
  date,
  description,
}) {
  return (
    <div className="post-entry-alt">
      <Link
        to={`/articles/${id}`}
        className="img-link"
      >
        <img
          src={image}
          alt={title}
          className="img-fluid"
        />
      </Link>

      <div className="excerpt">
        <h2>
          <Link to={`/articles/${id}`}>
            {title}
          </Link>
        </h2>

        <div className="post-meta align-items-center text-left clearfix">
          <figure className="author-figure mb-0 me-3 float-start">
            <img
              src={authorImage}
              alt={author}
              className="img-fluid"
            />
          </figure>

          <span className="d-inline-block mt-1">
            By {author}
          </span>

          <span>&nbsp;-&nbsp; {date}</span>
        </div>

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
    </div>
  );
}

export default AuthorArticleCard;