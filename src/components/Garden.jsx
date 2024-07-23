// import Garden_Canvas from "./Garden_Canvas";
import Nav_Bar from "./Nav_Bar";
import Plants from "./Plants";
import { useState } from "react";

export default function Garden({ shape, setShape }) {
  window.sessionStorage.setItem("active_item", "garden");

  function Loading_Bar() {
    return (
      <div className="row w100 top2">
        <div className="col-12 ">
          {" "}
          Loading ...
          <div className="progress bg-primary">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success "
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  function Garden_Canvas() {
    switch (shape) {
      case "sq":
        return (
          <div className="  border-garden p-2 text-dark  square ">{shape}</div>
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

      case "dia":
        return (
          <div className="  border-garden p-2 text-dark  diamond ">{shape}</div>
        );
      case "pie":
        return (
          <div className="  border-garden p-2 text-dark  pie ">{shape}</div>
        );
      default:
        return (
          <div className="  border-garden p-2 text-dark bg-light square">
            {shape}
          </div>
        );
    }
  }

  function GardenCard() {
    function updateShape(e) {
      console.log("Shape Selected!!", e.target.value);
      setShape(e.target.value);
      console.log("shape luego de setearla", shape);
    }
    return (
      <div className="col-12 card border-warning ">
        <div className="card-header">My Garden</div>

        <div className="d-grid gap-3  card-body form-group  w100 center p-4">
          <div className="center p-1">
            {" "}
            Shape:{" "}
            <select className="custom-select" onChange={updateShape}>
              <option value="">Select Shape</option>
              <option value="sq">Square</option>
              <option value="rec">Rectangle</option>
              <option value="cir">Circle</option>
            </select>
          </div>
          <div className="pt1   garden-buttons ">
            <button type="button" className="btn btn-warning btn-sm">
              Save Garden
            </button>
            <button type="button" className="btn btn-warning btn-sm">
              Buy Garden
            </button>
          </div>
          <div className="del_garden_button ">
            <button
              type="button"
              className="btn btn-link btn-sm text-secondary "
            >
              Delete Garden
            </button>{" "}
          </div>
        </div>
      </div>
    );
  }

  function UserCard() {
    return (
      <div className="col-12 card border-danger mt2h ">
        <div className="card-header">
          {window.sessionStorage.getItem("email")}
        </div>

        <div className="card-body center">
          <div className="pt0  full-name ">
            <span className="p-1">
              {" "}
              {window.sessionStorage.getItem("firstName")}
            </span>
            <span> {window.sessionStorage.getItem("lastName")}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Nav_Bar />
      <div className="container-fluid w85 ">
        {/* < Loading_Bar /> */}

        <div className="row w100 top2">
          <div className="col-3 container ">
            <div className="garden-card">
              <GardenCard />
            </div>
            <div className="user-card">
              <UserCard />
            </div>
          </div>
          <div className="col-6 ">
            <div className="container garden center ">
              <Garden_Canvas />
            </div>
          </div>
          <div className="col-3   ">
            <div className="plants container col-12">
              <Plants />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
