import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

const mainArraysSlice = createSlice({
  name: "mainArrays",
  initialState: {
    allPlants: [],
    allContainers: [],
    plantsInGarden: [],
  },
  reducers: {
    setAllPlants: (state, { payload }) => {
      state.allPlants = payload;
    },

    setAllContainers: (state, { payload }) => {
      state.allContainers = payload;
    },

    setPlantsInGarden: (state, { payload }) => {
      state.plantsInGarden = payload;
    },
  },
});

export const { setAllPlants, setAllContainers, setPlantsInGarden } =
  mainArraysSlice.actions;

export default mainArraysSlice.reducer;
