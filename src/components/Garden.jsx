import Plants from "./Plants";
import { useState } from "react";
import { useGetUserQuery } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading_Bar from "./Loading_Bar";
import LoadRefresh from "./loadCalls";
import SelectList from "./SelectList";

import { useGetRefreshQuery } from "../components_db/userSlice";

export default function Garden() {
  const navigate = useNavigate();

  // get the current logged in user from state
  let theUser = useSelector((state) => {
    return state.user.user;
  });

  // console.log("Garden USER: TEST for REFRESH ", theUser);
  // console.log("Garden USER: TEST for REFRESH ", window.sessionStorage.getItem("Token"));
  // if (!theUser.id && window.sessionStorage.getItem("Token")) {
  //   console.log("LoadRefresh Call");
  //   LoadRefresh();
  // }

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
  const specificZoneName = zoneList.filter((obj) => {
    if (obj.id === theUser.zone_id) return obj;
  });

  console.log(
    "Garden USERS ZONE: ",
    specificZoneName[0] ? specificZoneName[0] : "no user zone yet"
  );
  const displayZoneName =
    specificZoneName[0]?.zone_name +
    " (" +
    specificZoneName[0]?.temp_range +
    ")";

  // Temporary hard coded value
  // Should be from user's garden or default
  const [currentCanvas, setCurrentCanvas] = useState({ shape_id: shapeList[0].id });

  const updateCanvasOnListChange = (e) => {
    console.log(
      `updateCanvasOnListChange: ooga booga ${e.target.name}: ${e.target.value}`
    );
    setCurrentCanvas((prev) => ({...prev,  [e.target.name]: e.target.value }));
     

    console.log("updateCanvasOnListChange: ", currentCanvas);
  };

  function Garden_Canvas() {
    const specificShapeClass = shapeList?.filter((obj) => {
      if (obj.id === currentCanvas.shape_id) return obj;
    });
    const canvasClasses =
      " garden border-garden p-2 text-dark " + specificShapeClass[0].css_class;
    const canvasShape = specificShapeClass[0].shape_name;

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
      <div className="container-fluid w95">
        <div className="row ">
          <div className="col-3">
            <div className="garden-card">
              <GardenCard />
            </div>
            <div className="user-card">
              <UserCard />
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
    </>
  );
}
