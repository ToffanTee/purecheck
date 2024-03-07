import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://purecheckserver.onrender.com",
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

    updateProduct: builder.mutation({
      query: (payload) => ({
        url: "/api/product/update",
        method: "PUT",
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

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetProductsByCompanyMutation,
} = productApi;
