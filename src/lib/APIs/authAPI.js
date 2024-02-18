import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userAPI";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/api/login",
        method: "POST",
        body: payload,
        credentials: "include",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.getCurrentUser.initiate());
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
