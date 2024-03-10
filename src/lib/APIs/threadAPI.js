import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const threadApi = createApi({
  reducerPath: "threadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://purecheckserver.onrender.com",
    // baseUrl: "http://localhost:4000",
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
