import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_BACKEND_URL
        : process.env.REACT_APP_PROD_BACKEND_URL,
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
