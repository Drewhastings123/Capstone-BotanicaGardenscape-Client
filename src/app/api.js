import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://capstone-botanicagardenscape-server.onrender.com/api/botanica/gardenscape/",

    prepareHeaders: (headers) => {
      const token = window.sessionStorage.getItem("Token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Garden", "Reference"],
  endpoints: () => ({}),
});
