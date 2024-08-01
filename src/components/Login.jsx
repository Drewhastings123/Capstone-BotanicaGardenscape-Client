import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../components_db/userSlice";
import Loading_Bar from "./Loading_Bar";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errM, setErrM] = useState(null);
  const [loginUser] = useLoginMutation();

  console.log("Login() ");

  const submit = async (e) => {
    e.preventDefault();
    try {
      let success = false;
      success = await loginUser(form).unwrap();

      console.log("Login() SUCCESS: ", success);

      if (!success?.token) {
        return Loading_Bar("50");
      }

      if (success?.token) {
        window.sessionStorage.setItem("Token", success.token);

        navigate("/garden");
        //navigate("/user");
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
      <div className="container top5">
        <div className="row w100 ">
          <div className="col"></div>

          <div className="col-6 ">
            <div className="card border-success  ">
              <div className="card-header ">
                <h4 className="card-title">Login</h4>

                <div className="card-text-login">
                  <form onSubmit={submit} name="formRegister">
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="email"
                          className="form-control form-control-login"
                          name="email"
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
                          name="password"
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
                          className="btn btn-success form-control mv1"
                        >
                          Submit
                        </button>
                      </div>
                      {errM && (
                        <div className="row">
                          <div className="col-12">
                            <p className="text-warning">{errM}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col"></div>
        </div>{" "}
      </div>
    </>
  );
}
