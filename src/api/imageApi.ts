import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getImages: builder.query({
      query: (page = 1) => {
        return `photos?page=${page}&per_page=12&order_by=popular`;
      },
    }),

    searchImages: builder.query({
      query: (query: string) => {
        return `search/photos?query=${query}&per_page=12`;
      },
    }),
  }),
});

export const { useGetImagesQuery, useSearchImagesQuery } = imageApi;
