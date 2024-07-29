import { useUpdateUserMutation } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectList from "./SelectList";
import Loading_Bar from "./Loading_Bar";

export default function User() {
  // setup the return button
  const navigate = useNavigate();

  // Get the current User
  const user = useSelector((state) => {
    return state.user;
  });
  console.log(`(useSelector(state) - function User() USER: ${user}`);

  // Get the reference list for Zone
  const zoneList = useSelector((state) => {
    return state.reference.zoneList;
  });
  console.log(`(useSelector(state) - function User() ZONELIST: ${zoneList}`);

  // set up the relationship to the user mutation
  const [updateUser] = useUpdateUserMutation();

  const [form, setForm] = useState({});
  const [errM, setErrM] = useState(null);

  //  What to do when the submit button is clicked
  const submit = async (e) => {
    e.preventDefault();
    console.log(`(useSelector(state) - function User() SUBMIT`);

    try {
      let updateSuccess = false;
      // add the user id to the form
      setForm((prev) => ({
        ...prev,
        ["id"]: user.id,
      }));

      // add the user role id to the form
      setForm((prev) => ({
        ...prev,
        ["user_role_id"]: user.user_role_id,
      }));

      console.log(`(function User() SUBMIT FORM: ${form}`);

      updateSuccess = updateUser(form).unwrap();

      console.log(`(function User() SUBMIT UPDATESUCCESS: ${updateSuccess}`);

      if (!updateSuccess) {
        return Loading_Bar("30");
      }
    } catch (err) {
      setErrM(err?.data?.message);
    }
  };

  const updateForm = (e) => {
    console.log(`updateForm: ${e.target.name}: ${e.target.value}`);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updateFormOnListChange = (e) => {
    console.log(`updateFormOnListChange: ${e.target.name}: ${e.target.value}`);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(updateFormOnListChange);
    console.log(form);
  };

  return (
    <>
      <div className="container top5">
        <div className="row w100">
          <div className="col"></div>

          <div className="col-8">
            <div className="card border-success ">
              <div className="card-header ">
                <h4 className="card-title">User Details</h4>
              </div>

              <div className="card-body">
                <div className="card-text ">
                  <form onSubmit={submit} name="formUserUpdate">
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
                          <div>
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
                              theParentForm="UserUpdate"
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
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => navigate("/garden")}
                        >
                          Return
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
