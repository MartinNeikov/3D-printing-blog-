import { Link } from "react-router";

function SectionHeader({ title, link = "/articles" }) {
  return (
    <div className="row mb-4">
      <div className="col-sm-6">
        <h2 className="posts-entry-title">{title}</h2>
      </div>

      <div className="col-sm-6 text-sm-end">
        <Link to={link} className="read-more">
          View All
        </Link>
      </div>
    </div>
  );
}

export default SectionHeader;