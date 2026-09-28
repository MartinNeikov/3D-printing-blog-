function AuthorArticleCard({
    image,
    title,
    authorImage,
    author,
    date,
    description,
}) {
    return (
        <div className="post-entry-alt">
            <a href="single.html" className="img-link">
                <img
                    src={image}
                    alt={title}
                    className="img-fluid"
                />
            </a>

            <div className="excerpt">
                <h2>
                    <a href="single.html">{title}</a>
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
                        By <a href="#">{author}</a>
                    </span>

                    <span>&nbsp;-&nbsp; {date}</span>
                </div>

                <p>{description}</p>

                <p>
                    <a href="single.html" className="read-more">
                        Continue Reading
                    </a>
                </p>
            </div>
        </div>
    );
}

export default AuthorArticleCard;