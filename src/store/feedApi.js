import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const feedApi = createApi({
  reducerPath: 'feeds',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URI
  }),
  tagTypes: ['posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page }) => {
        return `feed/posts/${page}`
      },
      providesTags: ['posts']
    }),

    createPost: builder.mutation({
      query: (body) => ({
        url: 'feed/add-post',
        method: 'POST',
        body
      }),
      invalidatesTags: ['posts']
    }),

    editPost: builder.mutation({
      query: ({ body, id }) => ({
        url: `feed/edit-post/${id}`,
        method: 'PUT',
        body
      })
    }),

    getSinglePost: builder.query({
      query: ({ id }) => {
        return `/feed/post/${id}`
      }
    }),

    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/feed/delete-post/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['posts']
    })
  })
})

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useGetSinglePostQuery,
  useDeletePostMutation
} = feedApi

export default feedApi
