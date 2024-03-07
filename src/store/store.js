import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../lib/APIs/authAPI";
import { userApi } from "../lib/APIs/userAPI";
import { productApi } from "../lib/APIs/productAPI";
import { blogApi } from "../lib/APIs/blogAPI";
import { productVerificationApi } from "../lib/APIs/productVerificationApi";
import { companyApi } from "../lib/APIs/companyApi";
import userSlice from "../lib/APIs/userSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [productVerificationApi.reducerPath]: productVerificationApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    userState: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      authApi.middleware,
      productApi.middleware,
      blogApi.middleware,
      productVerificationApi.middleware,
      companyApi.middleware
    ),
});

setupListeners(store.dispatch);
