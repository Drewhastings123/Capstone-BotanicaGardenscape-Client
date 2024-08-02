import Nav_Bar from "./Nav_Bar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../components_db/userSlice";

export default function Login() {
  window.sessionStorage.setItem("active_item", "login");

  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errM, setErrM] = useState(null);
  const [loginUser] = useLoginMutation();

  const submit = async (e) => {
    e.preventDefault();
    try {
      let success = false;

      console.log("form", form);
      success = await loginUser(form).unwrap();
      console.log(success);

      if (!success) {
        return (
          <div className="row w100 top2">
            <div className="col-12 ">
              {" "}
              Loading ...
              <div className="progress bg-primary">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success "
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        );
      }

      if (success?.token) {
        window.sessionStorage.setItem("Token", success.token);
        navigate("/garden");
      } else {
        setErrM(
          "Invalid Username or Password, Please check your input and try again."
        );
      }
    } catch (err) {
      setErrM(err?.data?.message);
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
      <div className=" container top3 w50 loginForm ">
        <div className="row  ">
          <div className=" col-6 card border-success pb-4 ">
            <div className="card-header row  ">
              <h4 className="center">Login</h4>
            </div>
            <form onSubmit={submit} name="formRegister">
              <div className="row pt-4">
                <div className="col-12 center">
                  <input
                    type="email"
                    className="form-control input-sm"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={updateForm}
                    required
                  />
                </div>{" "}
              </div>

              <div className="row">
                <div className="col-12 center">
                  <input
                    type="password"
                    className="form-control  input-sm"
                    name="password"
                    placeholder="Password"
                    onChange={updateForm}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-success form-control "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {errM && (
              <div className="row">
                <div className="col-12">
                  <p className="text-warning">{errM}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
