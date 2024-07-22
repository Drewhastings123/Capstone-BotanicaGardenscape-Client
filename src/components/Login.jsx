import Nav_Bar from "./Nav_Bar";

export default function Login() {
  window.sessionStorage.setItem("active_item", "login");

  return (
    <>
      <Nav_Bar />

      <div className="container">
        <div className="row">
          <div className="col"></div>

          <div className="col-6">
            <div className="card border-success mb-3">
              <div className="card-header ">
                <h4 className="card-title">Login</h4>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email_input"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password_input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    {" "}
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
