import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",    
  }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      providesTags: ["Videos", "Video"]
    }),
    getSingleVideo: builder.query({
      query: (id) => `/videos/${id}`,
      keepUnusedDataFor: "600",
      providesTags: ["Video"]
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        console.log(title);
        const tags = title.split(" ");
        console.log(tags);
        const queryString = tags.length
          ? tags.map((tag) => `title_like=${tag}`).join("&") +
            `?&id_ne=${id}&_limit=5`
          : `id_ne=${id}&_limit=5`;
        console.log(queryString);
        return "/videos?" + queryString;
      },
    }),
    editVideo: builder.mutation({
      query: ({ data, id }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Videos", "Video"]
    }),
    addNewVideo : builder.mutation({
        query: (data) => ({
            url: '/videos',
            method: 'POST',
            body: data
        }),
        invalidatesTags: ["Videos"]
    })
  }),
});

export const {
  useGetVideosQuery,
  useGetSingleVideoQuery,
  useEditVideoMutation,
  useGetRelatedVideosQuery,
  useAddNewVideoMutation
} = apiSlice;
