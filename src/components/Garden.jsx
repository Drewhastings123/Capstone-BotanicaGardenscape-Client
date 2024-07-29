// import Garden_Canvas from "./Garden_Canvas";
import Plants from "./Plants";
import { useState } from "react";
import { useGetUserQuery } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading_Bar from "./Loading_Bar";
import SelectList from "./SelectList";

export default function Garden({ shape, setShape }) {
  const navigate = useNavigate();

  function Garden_Canvas() {
    switch (shape) {
      case "sq":
        return (
          <div className="  border-garden p-2 text-dark  square br ">
            {shape}
          </div>
        );
      case "rec":
        return (
          <div className="  border-garden p-2 text-dark  rectangle ">
            {shape}
          </div>
        );
      case "cir":
        return (
          <div className="  border-garden p-2 text-dark  circle ">{shape}</div>
        );

      default:
        return (
          <div className="  border-garden p-2 text-dark bg-light square">
            {shape}
          </div>
        );
    }
  }

  function Shape_Select() {
    function updateShape(e) {
      console.log("Shape Selected!!", e.target.value);
      setShape(e.target.value);
      console.log("shape luego de setearla", shape);
    }

    switch (shape) {
      case "sq":
        return (
          <select
            className="custom-select form-control input-sm p-1"
            onChange={updateShape}
            defaultValue="sq"
          >
            <option>Shape</option>
            <option value="sq">Square</option>
            <option value="rec">Rectangle</option>
            <option value="cir">Circle</option>
          </select>
        );
      case "rec":
        return (
          <select
            className="custom-select form-control input-sm p-1"
            onChange={updateShape}
            defaultValue="sq"
          >
            <option>Shape</option>
            <option value="sq">Square</option>
            <option value="rec">Rectangle</option>
            <option value="cir">Circle</option>
          </select>
        );
      case "cir":
        return (
          <select
            className="custom-select form-control input-sm p-1"
            onChange={updateShape}
            defaultValue="sq"
          >
            <option>Shape</option>
            <option value="sq">Square</option>
            <option value="rec">Rectangle</option>
            <option value="cir">Circle</option>
          </select>
        );

      default:
        return (
          <select
            className="custom-select form-control input-sm p-1"
            onChange={updateShape}
            defaultValue="sq"
          >
            <option>Shape</option>
            <option value="sq">Square</option>
            <option value="rec">Rectangle</option>
            <option value="cir">Circle</option>
          </select>
        );
    }
  }

  function GardenCard() {
    return (
      <div className="border-primary mb-3   card">
        <div className="card-header ">My Garden</div>
        <div className="row  center   ">
          <div className="col-sm-6 mt-4 mb-3 ">
            <Shape_Select />
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
    // get the current logged in user from state
    const theUser = useSelector((state) => {
      return state.user;
    });

    // get the zonelist to display users zonelist
    const zoneList = useSelector((state) => {
      return state.reference.zoneList;
    });

    console.log("UserCard ZONELIST: ", zoneList);
    console.log("UserCard USER: ", theUser);

    const specificZoneName = zoneList?.filter((obj) => {
      if (obj.id === theUser.zone_id)
        return obj;
    });
    console.log("UserCard USERS ZONE: ", specificZoneName[0]);
    const displayZoneName = specificZoneName[0].zone_name + " (" + specificZoneName[0].temp_range + ")";

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
