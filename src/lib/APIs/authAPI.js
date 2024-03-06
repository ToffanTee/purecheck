import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userAPI";
import { logout } from "./userSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),

  endpoints: (builder) => ({
    verifyUserAccount: builder.mutation({
      query: (payload) => ({
        url: "api/users/verify-account",
        method: "POST",
        body: payload,
      }),
    }),

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

    logoutUser: builder.mutation({
      query: () => ({
        url: "/api/logout",
        method: "POST",
        credentials: "include",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        await dispatch(logout());
      },
    }),
  }),
});

export const {
  useVerifyUserAccountMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
