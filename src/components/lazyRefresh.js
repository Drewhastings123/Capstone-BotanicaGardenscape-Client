import {
  useLazyGetRefreshQuery,
  useGetRefreshQuery,
} from "../components_db/userSlice";
import { useState, useEffect } from "react";

//
const LazyUserRefresh = () => {
  console.log("LazyUserRefresh");

  // FROM -- Created infinite loop
  // const [theUserData, setTheUserData] = useState();
  // //const [getLazyUser, results] = useLazyGetRefreshQuery();

  // // useEffect(() => {
  // //   if (results && results.data) {
  // //     setTheUserData([results.data]);
  // //     console.log("useLazyGetRefreshQuery results: ", results);
  // //     console.log("useLazyGetRefreshQuery results.data: ", results.data);
  // //   }
  // //   console.log("useLazyGetRefreshQuery before its back results: ", results);
  // // }, [results]);

  // // getLazyUser();

  // // return results.data;
  //TO

  // FROM THIS
  const { status, data, isSuccess, isLoading, isError, error } =
    useGetRefreshQuery();

  console.log("useLazyGetRefreshQuery status", status);
  console.log("useLazyGetRefreshQuery data", data);
  console.log("useLazyGetRefreshQuery isLoading", isLoading);
  console.log("useLazyGetRefreshQuery isSuccess", isSuccess);
  console.log("useLazyGetRefreshQuery isError", isError);
  console.log("useLazyGetRefreshQuery error", error);

  if (isSuccess) {
    console.log("Lazy Refresh ", data);
  }
  if (isError) {
    console.log("lazyRefresh isError", isError);
  }
  //TO THIS
};

export default LazyUserRefresh;
