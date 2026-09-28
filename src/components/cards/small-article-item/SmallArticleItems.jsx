function SmallArticleItem({ date, title, description }) {
    return (
        <li>
            <span className="date">{date}</span>

            <h3>
                <a href="single.html">{title}</a>
            </h3>

            <p>{description}</p>

            <p>
                <a href="single.html" className="read-more">
                    Continue Reading
                </a>
            </p>
        </li>
    );
}

export default SmallArticleItem;