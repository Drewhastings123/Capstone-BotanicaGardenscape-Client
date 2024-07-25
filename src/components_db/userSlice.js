import { createSlice } from "@reduxjs/toolkit";
import { api } from "../app/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      invalidateTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: () => "/users",
      method: "GET",
      providesTags: ["User"],
    }),

    getUser: builder.query({
      query: (id) => `/users/${id}`,
      method: "GET",
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
        invalidatesTags: ["User"],
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
        invalidatesTags: ["User"],
      }),
    }),
  }),
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setLoginToken: ({ payload }) => {
      window.sessionStorage.setItem("Token", payload.token);
    },

    clearLoginToken: () => {
      window.sessionStorage.removeItem("Token");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, setLoginToken);
  },
});

export const {
  useLoginMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export const { setLoginToken, clearLoginToken } = userSlice.actions;

export default userSlice.reducer;
