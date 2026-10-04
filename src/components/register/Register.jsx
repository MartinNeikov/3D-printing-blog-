import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { validateRegister } from "../../utils/validation.js";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function changeHandler(e) {
    setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    setErrors((state) => ({
      ...state,
      [e.target.name]: "",
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    const validationErrors = validateRegister(data);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    navigate("/");
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="p-5 bg-light rounded">
              <h2 className="mb-4 text-center">
                Register
              </h2>

              <form onSubmit={submitHandler} noValidate>
                <div className="mb-3">
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
                    className="form-control"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={changeHandler}
                  />

                  {errors.name && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-3">
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
                    className="form-control"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={changeHandler}
                  />

                  {errors.email && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-3">
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
                    className="form-control"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={changeHandler}
                  />

                  {errors.password && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mb-3">
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
                    className="form-control"
                    placeholder="Confirm your password"
                    value={data.confirmPassword}
                    onChange={changeHandler}
                  />

                  {errors.confirmPassword && (
                    <p className="text-danger mt-1 mb-0">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Register
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                Already have an account?{" "}
                <Link to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;