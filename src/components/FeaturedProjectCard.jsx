function FeaturedProjectCard({
    image,
    date,
    title,
    className,
    textClassName = "",
}) {
    return (
        <a href="single.html" className={className}>
            <div
                className="featured-img"
                style={{ backgroundImage: `url("${image}")` }}
            />

            <div className={`text ${textClassName}`}>
                <span>{date}</span>
                <h2>{title}</h2>
            </div>
        </a>
    );
}

export default FeaturedProjectCard;