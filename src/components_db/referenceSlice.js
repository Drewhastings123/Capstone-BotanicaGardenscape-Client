import { createSlice } from "@reduxjs/toolkit";
import { api } from "../app/api";

const referenceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReference: builder.query({
      query: () => ({
        url: "/reference",
        method: "GET",
      }),
      providesTags: ["Reference"],
    }),
  }),
});

const setReference = (state, { payload }) => {
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
};


const referenceSlice = createSlice({
  name: "reference",
  initialState: {},
  reducers: {
    getReferenceList: (state) => {
      // I think this violates the principles of the reducer
      return (
        state.plantList,
        state.growthHabitList,
        state.plantList,
        state.growthHabitList,
        state.lifeCycleList,
        state.plantSizeList,
        state.plantStatusList,
        state.shapeList,
        state.soilRequirementList,
        state.sunRequirementList,
        state.userRoleList,
        state.waterRequirementList,
        state.zoneList
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getReference.matchFulfilled, setReference);
  },
});

export const { useGetReferenceQuery } = referenceApi;

// TO DO - I'm thinking this isn't quite the right way to do this
// not strictly speaking how a reducer should work
export default referenceSlice.reducer;
