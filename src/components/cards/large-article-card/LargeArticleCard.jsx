function LargeArticleCard({ image, date, title, description }) {
    return (
        <div className="blog-entry">
            <a href="single.html" className="img-link">
                <img
                    src={image}
                    alt={title}
                    className="img-fluid"
                />
            </a>

            <span className="date">{date}</span>

            <h2>
                <a href="single.html">{title}</a>
            </h2>

            <p>{description}</p>

            <p>
                <a
                    href="single.html"
                    className="btn btn-sm btn-outline-primary"
                >
                    Read More
                </a>
            </p>
        </div>
    );
}

export default LargeArticleCard;