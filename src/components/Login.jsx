import Nav_Bar from "./Nav_Bar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  window.sessionStorage.setItem("active_item", "login");
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  window.sessionStorage.setItem("error_message", "Error Message");
  const error_message = window.sessionStorage.getItem("error_message");

  const submit = async (e) => {
    e.preventDefault();

    try {
      window.sessionStorage.setItem("token", "1234567");
      window.sessionStorage.setItem("error_message", "");
      console.log(form);
      navigate("/garden");
    } catch (err) {
      window.sessionStorage.setItem(
        "error_message",
        "Your credentials don't work, please try again."
      );
    }
  };

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Nav_Bar />

      <div className="container">
        <div className="row">
          <div className="col"></div>

          <div className="col-6">
            <div className="card border-success ">
              <div className="card-header ">
                <h4 className="card-title">Login</h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>

                <div className="card-text-login">
                  <form onSubmit={submit} name="formRegister">
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="email"
                          className="form-control form-control-login"
                          name="email_input"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          onChange={updateForm}
                          required
                        />

                     
                      </div>{" "}
                      <div className="col-12">
                     

                        <input
                          type="password"
                          className="form-control form-control-login"
                          name="password_input"
                          placeholder="Password"
                          onChange={updateForm}
                          required
                        />
                      </div>{" "}
                    </div>{" "}
                    {/*  //close row */}
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-success form-control"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {error_message && (
                  <div className="row">
                    <div className="col-12">
                      <p className="text-warning">{error_message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col"></div>
        </div>{" "}
      </div>
    </>
  );
}
