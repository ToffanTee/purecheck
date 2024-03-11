import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productVerificationApi = createApi({
  reducerPath: "productVerificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_BACKEND_URL
        : process.env.REACT_APP_PROD_BACKEND_URL,
  }),

  endpoints: (builder) => ({
    verifyProduct: builder.mutation({
      query: (payload) => ({
        url: "/api/product/validate",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});

export const { useVerifyProductMutation } = productVerificationApi;
