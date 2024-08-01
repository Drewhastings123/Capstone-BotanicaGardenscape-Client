import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

const currentViewSlice = createSlice({
  name: "currentView",
  initialState: {
    water: "0",
    sun: "0",
    soil: "0",
    zone: "0",
  },
  reducers: {
    setWater: (state, { payload }) => {
      state.water = payload;
    },

    setZone: (state, { payload }) => {
      state.zone = payload;
    },

    setSun: (state, { payload }) => {
      state.sun = payload;
    },
    setSoil: (state, { payload }) => {
      state.soil = payload;
    },
  },
});

export const { setWater, setZone, setSun, setSoil } = currentViewSlice.actions;

export default currentViewSlice.reducer;
