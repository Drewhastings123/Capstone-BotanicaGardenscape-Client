import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../components_db/registrationSlice";
import SelectList from "./SelectList";

export default function Registration() {
  window.sessionStorage.setItem("active_item", "registration");
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errM, setErrM] = useState(null);

  const [registerUser] = useRegistrationMutation();

  const submit = async (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      let success = false;

      // TO DO - correctly handle and zone_id
      form.user_role_id = "e7a3bd11-2c6e-451d-beeb-e4ef9eeac9bf";
      console.log("form", form);
      success = await registerUser(form).unwrap();
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
                  aria-valuenow="25"
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
        setErrM("There is a problem with your registration, please try again.");
      }
    } catch (err) {
      setErrM(err?.data?.message);
    }
  };

  const updateForm = (e) => {
    console.log("updateForm");
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updateFormOnListChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(updateFormOnListChange);
    console.log(form);
  };

  const zoneList = useSelector((state) => {
    return state.reference.zoneList;
  });
  console.log("Registration zoneList: ", zoneList);

  return (
    <>
      {/* <Nav_Bar /> */}

      <div className="container top5">
        <div className="row w100">
          <div className="col"></div>

          <div className="col-8">
            <div className="card border-success ">
              <div className="card-header ">
                <h4 className="card-title">Registration</h4>
              </div>

              <div className="card-body">
                <div className="card-text ">
                  <form onSubmit={submit} name="formRegister">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              onChange={updateForm}
                              required
                            />
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              placeholder="First Name"
                              onChange={updateForm}
                              required
                            />

                            <input
                              type="phone"
                              className="form-control"
                              name="phone_number"
                              placeholder="(XXX) 867-5209"
                              onChange={updateForm}
                              required
                            />
                          </div>

                          <div className="col-6">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              onChange={updateForm}
                              required
                            />

                            <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              placeholder="Last Name"
                              onChange={updateForm}
                              required
                            />

                            {/*<input
                              type="text"
                              className="form-control"
                              name="zone_id"
                              placeholder="Zone 3"
                              onChange={updateFormOnListChange}
                              required
                            />*/}

                            <SelectList
                              theList={zoneList}
                              theListName="zone_id"
                              theParentForm="Registration"
                              onChangeFunction={updateFormOnListChange}
                            />
                          </div>
                          {/*  //close col-6 */}
                        </div>{" "}
                        {/*  //close row */}
                      </div>{" "}
                      {/*  //close col-12 */}
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
