function Register() {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="p-5 bg-light">
              <h2 className="mb-4 text-center">Register</h2>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                />
              </div>

              <button className="btn btn-primary w-100">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;