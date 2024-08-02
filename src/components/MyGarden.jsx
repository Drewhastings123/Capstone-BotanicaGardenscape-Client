import { useUpdateGardenMutation } from "../components_db/gardenSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectList from "./SelectList";
import Loading_Bar from "./Loading_Bar";

export default function MyGarden() {
  // setup the return button
  const navigate = useNavigate();

  // Get the current User id
  const id = useSelector((state) => {
    return state.user.id;
  });
  console.log(`(useSelector(state) - function User() USER: ${id}`);
  const garden = useSelector((state) => {
    return state.garden;
  });
  console.log("myGarden page's garden", garden);
  const garden_id = garden?.garden?.[0]?.id;
  //   const gardenId = useSelector((state) => {
  //     return state?.garden?.garden[0]?.id;
  //   });
  // Get the reference list for Zone
  const zoneList = useSelector((state) => {
    return state.reference.zoneList;
  });
  const shapeList = useSelector((state) => {
    return state.reference.shapeList;
  });
  const waterRequirementList = useSelector((state) => {
    return state.reference.waterRequirementList;
  });
  const sunRequirementList = useSelector((state) => {
    return state.reference.sunRequirementList;
  });
  const soilRequirementList = useSelector((state) => {
    return state.reference.soilRequirementList;
  });
  console.log(`(useSelector(state) - function User() ZONELIST: ${zoneList}`);

  // set up the relationship to the garden mutation

  const [updateGarden] = useUpdateGardenMutation();

  const [form, setForm] = useState(garden?.garden?.[0]);
  const [errM, setErrM] = useState(null);
  const [successM, setSuccessM] = useState(null);

  console.log("function User() SETFORM currentUser: ", form);

  //  What to do when the submit button is clicked
  const submit = async (e) => {
    e.preventDefault();
    console.log(`(useSelector(state) - function User() SUBMIT`);

    try {
      let updateGardenSuccess = false;
      console.log("gardenID", garden_id);
      console.log("form preparing to submit", form);
      updateGardenSuccess = await updateGarden({ garden_id, form }).unwrap();

      console.log(
        "(function User() SUBMIT UPDATEGARDENSUCCESS:",
        updateGardenSuccess
      );

      if (!updateGardenSuccess) {
        return Loading_Bar("30");
      } else if (updateGardenSuccess) {
        return setSuccessM("Garden information updated successfully!");
      }
    } catch (err) {
      //   setErrM(err?.data?.message);
      console.log("update garden error", err);
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
      <div className="container top1 center">
        {/* <div className="row w100"> */}
        {/* <div className="col"></div> */}

        <div className="col-8">
          {/* <div className="card border-success "> */}
          {/* <div className="card-body"> */}
          {/* <div className="card-text "> */}
          <form onSubmit={submit} name="formGardenUpdate">
            <div className="col-12 center">
              <div className="row gap-2">
                <input
                  type="text"
                  className="form-control text_input"
                  name="description"
                  //   aria-describedby="emailHelp"
                  //   placeholder="default"
                  onChange={updateForm}
                  value={form?.description}
                  //   disabled
                  required
                />

                <SelectList
                  theList={zoneList}
                  theListName="zone_id"
                  theParentForm="GardenUpdate"
                  onChangeFunction={updateFormOnListChange}
                  theCurrentValue={form?.zone_id}
                  theFieldName="zone_name"
                  the2FieldName="temp_range"
                />
                <SelectList
                  theList={shapeList}
                  theListName="shape_id"
                  theParentForm="GardenUpdate"
                  onChangeFunction={updateFormOnListChange}
                  theCurrentValue={form?.shape_id}
                  theFieldName="shape_name"
                  the2FieldName="description"
                />
                <SelectList
                  theList={waterRequirementList}
                  theListName="water_requirement_id"
                  theParentForm="GardenUpdate"
                  onChangeFunction={updateFormOnListChange}
                  theCurrentValue={form?.water_requirement_id}
                  theFieldName="water_name"
                  the2FieldName="description"
                />
                <SelectList
                  theList={sunRequirementList}
                  theListName="sun_requirement_id"
                  theParentForm="GardenUpdate"
                  onChangeFunction={updateFormOnListChange}
                  theCurrentValue={form?.sun_requirement_id}
                  theFieldName="sun_name"
                  the2FieldName="description"
                />
                <SelectList
                  theList={soilRequirementList}
                  theListName="soil_requirement_id"
                  theParentForm="GardenUpdate"
                  onChangeFunction={updateFormOnListChange}
                  theCurrentValue={form?.soil_requirement_id}
                  theFieldName="soil_name"
                  the2FieldName="description"
                />
              </div>{" "}
              {/*  //close row */}
            </div>{" "}
            {/*  //close col-12 */}
            <div className="row">
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-success form-control mt-2"
                >
                  Submit
                </button>
              </div>
              {successM && (
                <div className="row">
                  <div className="col-12">
                    <p className="text-warning">{successM}</p>
                  </div>
                </div>
              )}
              {errM && (
                <div className="row">
                  <div className="col-12">
                    <p className="text-warning">{errM}</p>
                  </div>
                </div>
              )}
            </div>
          </form>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* <div className="col"></div> */}
        {/* </div>{" "} */}
      </div>
    </>
  );
}
