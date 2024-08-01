// import Garden_Canvas from "./Garden_Canvas";
import Plants from "./Plants";
import { useState } from "react";
import { useGetUserQuery } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading_Bar from "./Loading_Bar";
import SelectList from "./SelectList";
import User from "./User";
import { useGetMyGardenQuery } from "../components_db/gardenSlice";
import MyGarden from "./MyGarden";

export default function Garden() {
  const navigate = useNavigate();
  // get the current logged in user from state
  const theUser = useSelector((state) => {
    return state.user;
  });

  const myGarden = useSelector((state) => {
    return state.garden;
  });
  if (!myGarden?.id) {
    console.log("theUserID", theUser.id);
    const { data, error } = useGetMyGardenQuery(theUser.id);
    console.log("myGarden data", data);
  }
  console.log("myGarden", myGarden);

  // get the zonelist to display users zone
  const zoneList = useSelector((state) => {
    return state.reference.zoneList;
  });

  // get the shapeList to display users Shape
  const shapeList = useSelector((state) => {
    return state.reference.shapeList;
  });

  console.log("Garden SHAPELIST: ", shapeList);
  console.log("Garden ZONELIST: ", zoneList);
  console.log("Garden USER: ", theUser);

  // find the correct name for display based on id
  const specificZoneName = zoneList?.filter((obj) => {
    if (obj.id === theUser.zone_id) return obj;
  });
  console.log("Garden USERS ZONE: ", specificZoneName[0]);
  const displayZoneName =
    specificZoneName[0].zone_name + " (" + specificZoneName[0].temp_range + ")";

  // Temporary hard coded value
  // Should be from user's garden or default
  const [currentCanvas, setCurrentCanvas] = useState(shapeList[0].id);

  const updateCanvasOnListChange = (e) => {
    console.log(
      `updateCanvasOnListChange: ${e.target.name}: ${e.target.value}`
    );
    setCurrentCanvas((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("updateCanvasOnListChange: ", currentCanvas);
  };

  function Garden_Canvas() {
    const specificShapeClass = shapeList?.filter((obj) => {
      if (obj.id === currentCanvas) return obj;
    });
    const canvasClasses =
      "  border-garden p-2 text-dark " + specificShapeClass[0].css_class;

    console.log("Garden_Canvas: ", canvasClasses);

    return <div className={canvasClasses}></div>;
  }

  // function Shape_Select() {
  //   // TODO - USE THE GARDEN's Shape list
  //   <SelectList
  //     theList={shapeList}
  //     theListName="id"
  //     theParentForm="Garden"
  //     onChangeFunction={updateCanvasOnListChange}
  //     theCurrentValue={shapeList[0].id}
  //     theFieldName="shape_name"
  //     /* the2FieldName="css_class" */
  //   />;
  // }

  function GardenCard() {
    return (
      <div className="border-primary mb-3   card">
        <div className="card-header ">My Garden</div>
        <div className="row  center   ">
          <div className="col-sm-6 mt-4 mb-3 ">
            {/* <Shape_Select /> */}
            <SelectList
              theList={shapeList}
              theListName="id"
              theParentForm="Garden"
              onChangeFunction={updateCanvasOnListChange}
              theCurrentValue={shapeList[0].id}
              theFieldName="shape_name"
              /* the2FieldName="css_class" */
            />
          </div>
        </div>{" "}
        <div className="row   center pt-2 ">
          <div className="col-sm-5 center ">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm boder border-warning"
            >
              Save Garden
            </button>
          </div>

          <div className="col-sm-5 center ">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm boder border-warning"
            >
              Buy Garden
            </button>
          </div>
        </div>
        <div className="row   center p-2 ">
          <div className="col-sm-10 center  ">
            <button
              type="button"
              className="btn btn-link btn-sm text-secondary "
            >
              Delete Garden
            </button>{" "}
          </div>
        </div>{" "}
      </div>
    );
  }

  function UserCard() {
    if (!theUser)
      return <div>No User Found - Please logout and login again.</div>;
    else
      return (
        <div className=" border-primary mt-5 card">
          <div className="card-header card-email-header"> {theUser.email}</div>

          <div className="grid center pt-2 pb-3 card-user">
            <div className="center card-user">
              {theUser.firstname} {theUser.lastname}
            </div>
            <div className="center card-user"> Zone: {displayZoneName} </div>

            <div className="center pt-3 ">
              <button
                type="button"
                className="btn btn-outline-warning btn-sm border border-warning"
                onClick={() => navigate("/user")}
              >
                Update User
              </button>
            </div>
          </div>
        </div>
      );
  }

  return (
    <>
      <div className="row">
        <div className="accordion container-fluid w95">
          <div className="accordion-item row">
            <div className="col-3 pt-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  My Garden Info
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body garden-card">
                  <GardenCard />
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    User Info
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion body user-card">
                    <UserCard />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Plants in My Garden
                  </button>
                </h3>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion body">
                    This will be the plant list
                    <MyGarden />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5   ">
              <div className=" garden-canvas ">
                <Garden_Canvas />
              </div>
            </div>
            <div className="col-2   ">
              <Plants />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
