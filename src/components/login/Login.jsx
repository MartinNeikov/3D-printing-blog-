import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "../../hooks/useAuth.js";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function changeHandler(e) {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    if (authError) {
      setAuthError("");
    }
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setAuthError("");
      setIsSubmitting(true);

      await login(
        formData.email.trim(),
        formData.password
      );

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);

      setAuthError(
        error.message || "Login failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="form-page">
      <div className="form-container-small">
        <div className="form-card">
          <h1 className="form-title">Login</h1>

          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={changeHandler}
              />
            </div>

            {authError && (
              <p className="form-error">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="form-footer">
            Don&apos;t have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;