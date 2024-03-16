import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactUsApi = createApi({
  reducerPath: "contactUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_BACKEND_URL
        : process.env.REACT_APP_PROD_BACKEND_URL,
  }),

  endpoints: (builder) => ({
    sendContactUs: builder.mutation({
      query: (payload) => ({
        url: "/api/contact-us",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSendContactUsMutation } = contactUsApi;
