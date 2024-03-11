import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const threadApi = createApi({
  reducerPath: "threadApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_BACKEND_URL
        : process.env.REACT_APP_PROD_BACKEND_URL,
  }),

  endpoints: (builder) => ({
    createThread: builder.mutation({
      query: (payload) => ({
        url: "/api/create/thread",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateThreadMutation } = threadApi;
