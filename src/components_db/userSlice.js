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
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

const storeUser = (state, { payload }) => {
  console.log("payload", payload);
  state.id = payload.user.id;
  state.firstname = payload.user.firstname;
  state.lastname = payload.user.lastname;
  state.email = payload.user.email;
  state.phone_number = payload.user.phone_number;
  state.zone_id = payload.user.zone_id;
  state.user_role_id = payload.user.user_role_id;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    // id: "",
    // firstname: "",
    // lastname: "",
    // email: "",
    // phone_number: null,
    // zone_id: "",
    // user_role_id: "",
    user: {},
  },
  reducers: {
    setLoginToken: (state, { payload }) => {
      window.sessionStorage.setItem("Token", payload.token);
      state.currentUserId = payload.user.id;
      state.user = payload.user;
    },

    clearLoginToken: ({ state }) => {
      window.sessionStorage.removeItem("Token");
      state.currentUserId = null;
      state.user = null;
    },

    // storeUser: (state, { payload }) => {
    //   state.currentUserId = payload.user.id;
    //   state.user = payload.user;
    // },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, setLoginToken);
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeUser);
  },
});

export const {
  useLoginMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export const { setLoginToken, clearLoginToken /*,  storeUser*/ } =
  userSlice.actions;

export default userSlice.reducer;
