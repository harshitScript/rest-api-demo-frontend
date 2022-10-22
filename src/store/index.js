import { configureStore } from '@reduxjs/toolkit'
import feedApi from './feedApi'
import userApi from './userApi'

const store = configureStore({
  reducer: {
    [feedApi.reducerPath]: feedApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(feedApi.middleware)
      .concat(userApi.middleware)
})

export default store
