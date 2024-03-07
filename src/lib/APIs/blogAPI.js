import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://purecheckserver.onrender.com",
  }),

  endpoints: (builder) => ({
    getAllBlogs: builder.mutation({
      query: (payload) => ({
        url: "/api/allblogs",
        method: "GET",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllBlogsMutation } = blogApi;
