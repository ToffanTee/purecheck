import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (payload) => ({
        url: "/api/users",
        method: "POST",
        body: payload,
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
          dispatch(setUser(data?.user));
        } catch (error) {}
      },
    }),
  }),
});

export const { useCreateUserMutation, useGetCurrentUserMutation } = userApi;
