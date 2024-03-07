import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productVerificationApi = createApi({
  reducerPath: "productVerificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://purecheckserver.onrender.com",
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
