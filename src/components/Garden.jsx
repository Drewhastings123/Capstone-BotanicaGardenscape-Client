// import Garden_Canvas from "./Garden_Canvas";
import Plants from "./Plants";
import { useState } from "react";
import { useGetUserQuery } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SelectList from "./SelectList";

export default function Garden() {
  let [currentShape, setShape] = useState("square");

  //TO DO - fix hard code
  let [currentShapeId, setShapeId] = useState(
    "20f66411-157c-431f-8b25-2d23aac9ad6e"
  );

  const shapeList = useSelector((state) => {
    return state.reference.shapeList;
  });

  function Garden_Canvas() {
    // let currentShapeClass = shapeList.find((shapeObj) => {
    // if (shapeObj.shape_name === currentShape) return shapeObj.css_class;
    //  });
    // console.log(currentShapeClass);
    // console.log("Garden_Canvas");
    // // <div className={`  border-garden p-2 text-dark  ${currentShapeClass} br`}>
    // //   {currentShape}
    // // </div>;
  }

  function updateShape(e) {
    setShape(e.target.value);
    currentShapeId = setShapeId(e.target.value);

    console.log("shape updated: ", currentShapeId);
  }

  function GardenCard() {
    return (
      <div className="border-primary mb-3   card">
        <div className="card-header ">My Garden</div>
        <div className="row  center   ">
          <div className="col-sm-6 mt-4 mb-3 ">
            <SelectList
              theList={shapeList}
              theListName="shape_id"
              theParentForm="Garden"
              onChangeFunction={updateShape}
              theFieldName="shape_name"
              the2FieldName=":)"
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
    // // const { data, error, isLoading } = useGetUserQuery(id);
    // if (!isLoading) {
    //   const specificName = name?.filter((obj) => {
    //     if (obj.id === data.user.zone_id) return obj.zone_name;
    //   });
    //   console.log(specificName[0].zone_name);
    // }
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }
    const zoneList = useSelector((state) => {
      return state.reference.zoneList;
    });

    const theUser = useSelector((state) => {
      return state.user;
    });

    const id = useSelector((state) => {
      return state.user.id;
    });

    console.log("zoneList: ", zoneList);
    console.log("theUser: ", theUser);
    console.log("id: ", id);

    let specificZone;

    if (theUser && zoneList) {
      specificZone = zoneList.filter((obj) => {
        if (obj.id === theUser.zone_id) return obj.zone_name;
      });
      console.log(specificZone[0].zone_name);
    }

    return (
      <div className=" border-primary   mt-5 card">
        <div className="card-header "> {theUser.email}</div>

        <div className="row   center pt-2 pb-3 ">
          <div className="col-sm-5 center ">{theUser.firstname}</div>

          <div className="col-sm-5 center ">{theUser.lastname}</div>
          <div className="col-sm-5 center ">
            <p>Zone</p>

            <p>{specificZone[0].zone_name}</p>
          </div>
          {/* <div className="col-sm-5 center ">{specificName[0].temp_range}</div> */}
          <div className="col-sm-5 center ">
            <Link to={`/user/`}>
              <button
                type="button"
                className="btn btn-outline-warning btn-sm border border-warning"
              >
                Update User
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid w85 ">
        <div className="row w100 ">
          <div className="col-2  ">
            <div className="garden-card">
              <GardenCard />
            </div>
            <div className="user-card">
              <UserCard />
            </div>
          </div>
          <div className="col-8   ">
            <div className=" garden center ">
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
