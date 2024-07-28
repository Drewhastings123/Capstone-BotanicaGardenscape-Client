import { useParams } from "react-router-dom";
import { useUpdateUserMutation } from "../components_db/userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import SelectList from "./SelectList";

export default function User() {
  
  const id = useParams();
  const [updateUser] = useUpdateUserMutation(id);
  const user = useSelector((state) => {
    return state.user;
  });
  const zoneList = useSelector((state) => {
    return state.reference.zoneList;
  });

  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [zone_id, setZone_id] = useState(user.zone_id);
  const [lastname, setLastname] = useState(user.lastname);
  const [firstname, setFirstname] = useState(user.firstname);

  function onEdit(event) {
    event.preventDefault();
    if (editing) {
      updateUser({ id: user.id, email, zone_id, lastname, firstname });
    }
    setEditing(!editing);
  }

  const editFields = (
    <>
      <td>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </td>
      <td>
        <SelectList
          theList={zoneList}
          theListName="zone_id"
          theParentForm="User"
          onChangeFunction={(e) => setZone_id(e.target.value)}
          theFieldName="zone_name"
          the2FieldName="temp_range"
        />
      </td>
      <td>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </td>
    </>
  );
  return (
    <>
      <tbody>
        <tr>
          {editing ? (
            editFields
          ) : (
            <>
              <td>{email}</td>

              <td>{lastname}</td>
              <td>{firstname}</td>
            </>
          )}
          <td className="buttons_users">
            <button onClick={onEdit}>{editing ? "Save" : "Edit"}</button>
          </td>
        </tr>
      </tbody>
      {/* <Nav_Bar /> */}
      {/* <div className="container top5">
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-12">
            <h1>{window.sessionStorage.getItem("email")}</h1>
            <div className="row space-top  ">
              <p className="col-2 text-danger">
                {" "}
                {window.sessionStorage.getItem("firstName")}{" "}
              </p>

              <p className="col-10 text-info">
                {window.sessionStorage.getItem("lastName")}{" "}
              </p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div> */}
    </>
  );
}
