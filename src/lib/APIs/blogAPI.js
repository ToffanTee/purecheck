import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_BACKEND_URL
        : process.env.REACT_APP_PROD_BACKEND_URL,
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

    createBlogs: builder.mutation({
      query: (payload) => ({
        url: "/api/blog/create",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllBlogsMutation, useCreateBlogsMutation } = blogApi;
