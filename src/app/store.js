import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../components_db/registrationSlice";
import userReducer from "../components_db/userSlice";
import referenceReducer from "../components_db/referenceSlice";

import { api } from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    registration: registrationReducer,
    user: userReducer,
    reference: referenceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
