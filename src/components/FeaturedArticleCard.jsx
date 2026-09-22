function FeaturedArticleCard({ image, date, title, className }) {
  return (
    <a href="single.html" className={className}>
      <div
        className="featured-img"
        style={{ backgroundImage: `url("${image}")` }}
      />

      <div className="text">
        <span className="date">{date}</span>
        <h2>{title}</h2>
      </div>
    </a>
  );
}

export default FeaturedArticleCard;