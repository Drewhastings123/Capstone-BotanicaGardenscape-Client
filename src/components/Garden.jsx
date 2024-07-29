// import Garden_Canvas from "./Garden_Canvas";
import Plants from "./Plants";
import { useState } from "react";
import { useGetUserQuery } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading_Bar from "./Loading_Bar";
import SelectList from "./SelectList";

export default function Garden() {
  const navigate = useNavigate();

  // get the current logged in user from state
  const theUser = useSelector((state) => {
    return state.user;
  });

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
