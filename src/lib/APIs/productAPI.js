import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),

  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/api/product/create",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    getProductsByCompany: builder.mutation({
      query: (payload) => ({
        url: `/api/product/products-by-company/${payload}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsByCompanyMutation } =
  productApi;
