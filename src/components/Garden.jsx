// import Garden_Canvas from "./Garden_Canvas";
import Plants from "./Plants";
import { useState } from "react";
import { useGetUserQuery } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading_Bar from "./Loading_Bar";
import SelectList from "./SelectList";

export default function Garden({ shape, setShape }) {
  // const temp = useSelector((state) => state);
  // console.log(temp);

  // function Loading_Bar() {
  //   return (
  //     <div className="row w100 top2">
  //       <div className="col-12 ">
  //         {" "}
  //         Loading ...
  //         <div className="progress bg-primary">
  //           <div
  //             className="progress-bar progress-bar-striped progress-bar-animated bg-success "
  //             role="progressbar"
  //             aria-valuenow="75"
  //             aria-valuemin="0"
  //             aria-valuemax="100"
  //           ></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

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
    // const id = useSelector((state) => {
    //   return state.user.id;
    // });
    // const { data, error, isLoading } = useGetUserQuery(id);
    //  console.log(data);
    // if (isLoading) {
    //   return Loading_Bar("45");
    // }
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }
    // if (!data) {
    //   return <div>No user found.</div>;
    // }

    // get the current logged in user from state
    const theUser = useSelector((state) => {
      return state.user;
    });

    // get the zonelist to display users zonelist
    const zoneList = useSelector((state) => {
      return state.reference.zoneList;
    });

    console.log("UserCard: ", zoneList);
    console.log("UserCard: ", theUser);

    const specificZoneName = zoneList?.filter((obj) => {
      if (obj.id === theUser.zone_id) return obj.zone_name;
    });
    console.log("UserCard: ", specificZoneName[0].zone_name);

    if (!theUser)
      return <div>No User Found - Please logout and login again.</div>;
    else
      return (
        <div className=" border-primary   mt-5 card">
          <div className="card-header "> {theUser.email}</div>

          <div className="row   center pt-2 pb-3 ">
            <div className="col-sm-5 center ">{theUser.firstname}</div>

            <div className="col-sm-5 center ">{theUser.lastname}</div>
            <div className="col-sm-5 center ">
              <p>Zone</p>

              <p>{specificZoneName[0].zone_name}</p>
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
      {/* <Nav_Bar /> */}
      <div className="container-fluid w85 ">
        {/* < Loading_Bar /> */}

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
