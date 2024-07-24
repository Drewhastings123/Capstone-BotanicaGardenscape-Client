import { createSlice } from "@reduxjs/toolkit";
import { api } from "../app/api";

const referenceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    reference: builder.query({
      query: () => ({
        url: "/reference",
        method: "GET",
      }),
      providesTags: ["Reference"],
    }),
  }),
});

const referenceSlice = createSlice({
  name: "reference",
  initialState: {},
  reducers: {
    setReference: (state, { payload }) => {
      state.plantList = payload.plantList;
      state.growthHabitList = payload.growthHabitList;
      state.lifeCycleList = payload.lifeCycleList;
      state.plantSizeList = payload.plantSizeList;
      state.plantStatusList = payload.plantStatusList;
      state.shapeList = payload.shapeList;
      state.soilRequirementList = payload.soilRequirementList;
      state.sunRequirementList = payload.sunRequirementList;
      state.userRoleList = payload.userRoleList;
      state.waterRequirementList = payload.waterRequirementList;
      state.zoneList = payload.zoneList;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.registration.matchFulfilled, setReference);
  },
});

export const { useReferenceQuery } = referenceApi;

export const { setReference } = referenceSlice.actions;

// TO DO - I'm thinking this isn't quite the right way to do this
// not strictly speaking how a reducer should work
export default {
  referenceSlice: referenceSlice.reducer,
};
