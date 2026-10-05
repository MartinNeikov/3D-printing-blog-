import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    navigate("/");
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

            <button
              type="submit"
              className="form-submit"
            >
              Login
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