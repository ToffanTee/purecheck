import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://purecheckserver.onrender.com",
    // baseUrl: "http://localhost:4000",
  }),

  endpoints: (builder) => ({
    createCompany: builder.mutation({
      query: (payload) => ({
        url: "/api/company/create",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    getAllCompaniesByUser: builder.mutation({
      query: () => ({
        url: "/api/company",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateCompanyMutation, useGetAllCompaniesByUserMutation } =
  companyApi;
