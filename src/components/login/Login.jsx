import { useState } from "react";
import { Link, useNavigate} from "react-router";



function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {

    e.preventDefault();

    navigate("/");
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="p-5 bg-light rounded">
              <h2 className="mb-4 text-center">Login</h2>

              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
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
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
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
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                Don&apos;t have an account?{" "}
                <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;