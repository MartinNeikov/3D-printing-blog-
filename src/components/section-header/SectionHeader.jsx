import { Link } from "react-router";

function SectionHeader({ title, link = "/articles" }) {
  return (
    <div className="section-header">
      <h2 className="posts-entry-title">{title}</h2>

      <Link to={link} className="read-more">
        View All
      </Link>
    </div>
  );
}

export default SectionHeader;