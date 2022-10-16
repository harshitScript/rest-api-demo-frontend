import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const feedApi = createApi({
  reducerPath: "feeds",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URI,
  }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page }) => {
        return `feed/posts/${page}`;
      },
      providesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery } = feedApi;

export default feedApi;
