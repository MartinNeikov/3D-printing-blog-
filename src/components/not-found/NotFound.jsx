import { Link } from "react-router";

function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;