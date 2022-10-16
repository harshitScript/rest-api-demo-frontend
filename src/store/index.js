import { configureStore } from "@reduxjs/toolkit";
import feedApi from "./feedApi";

const store = configureStore({
  reducer: {
    [feedApi.reducerPath]: feedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedApi.middleware),
});

export default store;
