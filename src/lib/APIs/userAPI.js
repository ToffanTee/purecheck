import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://purecheckserver.onrender.com",
  }),

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (payload) => ({
        url: "/api/users",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    getCurrentUser: builder.mutation({
      query: () => ({
        url: "/api/users/me",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useCreateUserMutation, useGetCurrentUserMutation } = userApi;
