import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos'
        }),
        getSingleVideo: builder.query({
            query: (id) => `/videos/${id}`
        })
    })
})


export const { useGetVideosQuery, useGetSingleVideoQuery} = apiSlice;