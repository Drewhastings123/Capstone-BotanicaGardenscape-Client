import { createSlice } from "@reduxjs/toolkit";
import { api } from "../app/api";

const registrationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

const registrationSlice = createSlice({
  name: "registration",
  initialState: {},
  reducers: {
    setToken: ({ payload }) => {
      window.sessionStorage.setItem("Token", payload.token);
    },

    clearToken: () => {
      window.sessionStorage.removeItem("Token");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.registration.matchFulfilled, setToken);
  },
});

export const { useRegistrationMutation } = registrationApi;

export const { setToken, clearToken } = registrationSlice.actions;

export default registrationSlice.reducer;
