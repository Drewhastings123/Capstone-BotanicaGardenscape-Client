import LoadReference from "./reference.js";

import { useSelector } from "react-redux";
import { useGetReferenceQuery } from "../components_db/referenceSlice";
import { useGetRefreshQuery } from "../components_db/userSlice";

import { useState } from "react";

// Load the data after a refresh
const LoadRefresh = () => {
  // Get Reference Data, then User Data

  console.log("loadRefresh");

  const [errM, setErrM] = useState(null);

  const { referenceData, referenceIsSuccess, referenceError } =
    useGetReferenceQuery();

  console.log("LoadRefresh REFERENCEISSUCCESS: ", referenceIsSuccess);
  console.log("LoadRefresh REFERENCEDATA: ", referenceData);
  console.log("LoadRefresh REFERENCEERROR: ", referenceError);

  LoadReference();

  if (referenceIsSuccess) {
    console.log("loadRefresh - REFERENCELISTs: ", referenceData);
  } else setErrM(referenceError);

  const { userData, userIsSuccess, userError } = useGetRefreshQuery();
  if (userIsSuccess) {
    console.log("loadRefresh - USER: ", userData);
  } else setErrM(errM + " ***** in addition: " + userError);

  //TODO - add garden and garden_plants

  return errM;
};

const RegisterTasks = () => {
  console.log("RegisterTasks");
};

export default LoadRefresh;
