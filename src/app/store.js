import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import currentView from "./currentViewSlice";
=======
import registrationReducer from "../components_db/registrationSlice";
import userReducer from "../components_db/userSlice";
import referenceReducer from "../components_db/referenceSlice";
import plantsReducer from "../components_db/plantSlice";

import { api } from "./api";
>>>>>>> 5d988b05f311fed54a877140fc0ddbb5a9fc88af

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    currentView,
=======
    [api.reducerPath]: api.reducer,
    registration: registrationReducer,
    user: userReducer,
    reference: referenceReducer,
    plants: plantsReducer,
>>>>>>> 5d988b05f311fed54a877140fc0ddbb5a9fc88af
  },
});

export default store;
