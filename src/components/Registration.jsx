import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../components_db/registrationSlice";
import { useLoginMutation } from "../components_db/userSlice";

import Loading_Bar from "./Loading_Bar";
import SelectList from "./SelectList";

export default function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errM, setErrM] = useState(null);

  const [registerUser] = useRegistrationMutation();

  const [loginUser] = useLoginMutation();

  const submit = async (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      let success = false;
      let loginSuccess = false;

      // TO DO - correctly handle and zone_id
      form.user_role_id = "e7a3bd11-2c6e-451d-beeb-e4ef9eeac9bf";
      console.log("form", form);
      success = await registerUser(form).unwrap();

      // TODO Handle failed registration better
      //if we got the token back from registration
      if (success?.token) {
        loginSuccess = await loginUser(form).unwrap();
      }

      console.log("Registration success: ", success);
      console.log("Registration loginSuccess: ", loginSuccess);

      if (loginSuccess?.token) {
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

                            <SelectList
                              theList={zoneList}
                              theListName="zone_id"
                              theParentForm="Registration"
                              onChangeFunction={updateFormOnListChange}
                              theFieldName="zone_name"
                              the2FieldName="temp_range"
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
