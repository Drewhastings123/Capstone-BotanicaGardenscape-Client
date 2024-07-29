import { configureStore } from "@reduxjs/toolkit";
import currentView from "./currentViewSlice";

export const store = configureStore({
  reducer: {
    currentView,
  },
});

export default store;
