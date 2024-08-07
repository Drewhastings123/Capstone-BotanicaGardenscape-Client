import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

const mainArraysSlice = createSlice({
  name: "mainArrays",
  initialState: {
    allPlants: [],
    allContainers: [],
    plantsInGarden: [],
    referencePlants: [],
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
    setReferencePlants: (state, { payload }) => {
      state.referencePlants = payload;
    },
  },
 
});

export const {
  setAllPlants,
  setAllContainers,
  setPlantsInGarden,
  setReferencePlants,
} = mainArraysSlice.actions;

export default mainArraysSlice.reducer;
