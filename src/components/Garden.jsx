import Plants from "./Plants";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Loading_Bar from "./Loading_Bar";

import LoadReference from "./reference.js";
import LazyUserRefresh from "./lazyRefresh.js";

import SelectList from "./SelectList";
import User from "./User";
import { useGetMyGardenQuery } from "../components_db/gardenSlice";
import MyGarden from "./MyGarden";

import { useGetRefreshQuery } from "../components_db/userSlice";

export default function Garden() {
  // load the reference data
  console.log("run reference from garden");
  LoadReference() ? LoadReference() : console.log("Still loading Reference");
  //  test this call

  const navigate = useNavigate();
  // get the current logged in user from state
  let theUser = useSelector((state) => {
    return state.user.user;
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

  // just a note for now
  if (!theUser.id && window.sessionStorage.getItem("Token")) {
    console.log("Need LazyUserRefresh Call");
  }
  //reload the user with a refresh if it is needed
  const newRefresh = LazyUserRefresh();
  console.log("newRefresh: ", newRefresh);

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

  // // find the correct name for display based on id
  const specificZoneName = zoneList
    ? zoneList.filter((obj) => {
        if (obj.id === theUser.zone_id) return obj;
      })
    : [{ zone_name: "no zone yet", temp_range: "the void" }];

  const displayZoneName =
    specificZoneName[0]?.zone_name +
    " (" +
    specificZoneName[0]?.temp_range +
    ")";

  // Temporary hard coded value
  // Should be from user's garden or default
  const [currentCanvas, setCurrentCanvas] = useState({
    shape_id: "20f66411-157c-431f-8b25-2d23aac9ad6e",
  });

  const updateCanvasOnListChange = (e) => {
    console.log(
      `updateCanvasOnListChange: ooga booga ${e.target.name}: ${e.target.value}`
    );
    setCurrentCanvas((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    console.log("updateCanvasOnListChange: ", currentCanvas);
  };

  function Garden_Canvas() {
    const specificShapeClass = shapeList?.filter((obj) => {
      if (obj.id === currentCanvas.shape_id) return obj;
    });
    let canvasClasses = " garden border-garden p-2 text-dark ";
    let canvasShape = "square";
    if (typeof specificShapeClass != "undefined") {
      canvasClasses += specificShapeClass[0]
        ? specificShapeClass[0].css_class
        : "square";
      canvasShape = specificShapeClass[0].shape_name;
    }

    console.log("Garden_Canvas: ", canvasClasses);
    console.log("Garden_Canvas: ", canvasShape);

    return <div className={canvasClasses}>{canvasShape}</div>;
  }

  function GardenCard() {
    return (
      <div className="border-primary mb-3   card">
        <div className="card-header ">My Garden</div>
        <div className="row  center   ">
          <div className="col-sm-6 mt-4 mb-3 ">
            {/* <Shape_Select /> */}
            <SelectList
              theList={shapeList}
              theListName="shape_id"
              theParentForm="Garden"
              onChangeFunction={updateCanvasOnListChange}
              theCurrentValue={currentCanvas}
              theFieldName="shape_name"
              /* the2FieldName="css_class" */
            />
          </div>
        </div>{" "}
        <div className="row   center pt-2 ">
          <div className="col-sm-5 center ">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm border border-warning"
            >
              Save Garden
            </button>
          </div>

          <div className="col-sm-5 center ">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm border border-warning"
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
        <div className=" border-primary mt-1 card">
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
            <div className="col-4 pt-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  User Info
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body garden-card">
                  <UserCard />
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
                    Garden Info
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion body user-card">
                    <GardenCard />
                    <MyGarden />
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
                    {/* TO DO - PLANT LIST HERE <MyGarden /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5   ">
              <div className=" garden-canvas ">
                <Garden_Canvas />
              </div>
            </div>
            <div className="col-3   ">
              <Plants />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
