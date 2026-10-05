import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { validateRegister } from "../../utils/validation.js";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((state) => ({
        ...state,
        [name]: "",
      }));
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    const validationErrors = validateRegister(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    navigate("/");
  }

  return (
    <section className="form-page">
      <div className="form-container-small">
        <div className="form-card">
          <h1 className="form-title">Register</h1>

          <form onSubmit={submitHandler} noValidate>
            <div className="form-group">
              <label
                htmlFor="name"
                className="form-label"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={changeHandler}
              />

              {errors.name && (
                <p className="form-error">
                  {errors.name}
                </p>
              )}
            </div>

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

              {errors.email && (
                <p className="form-error">
                  {errors.email}
                </p>
              )}
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

              {errors.password && (
                <p className="form-error">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="confirmPassword"
                className="form-label"
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={changeHandler}
              />

              {errors.confirmPassword && (
                <p className="form-error">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="form-submit"
            >
              Register
            </button>
          </form>

          <p className="form-footer">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;