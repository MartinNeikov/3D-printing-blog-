import { Link } from "react-router";

function NotFound() {
  return (
    <section className="page-status not-found-page">
      <div className="content-container not-found-content">
        <h1 className="not-found-code">404</h1>

        <h2 className="not-found-title">Layer Not Found</h2>

        <p className="not-found-message">
          ⚠️ Layer shift detected somewhere around this URL.
        </p>

        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;