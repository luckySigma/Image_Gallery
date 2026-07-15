import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SearchImageArgs, UnsplashImage } from "../features/gallery/gallery.types";

export const IMAGES_PER_PAGE = 15;

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gallery-api-lf4c.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getImages: builder.query<UnsplashImage[], number>({
      query: (page = 1) => {
        return `images?page=${page}&per_page=${IMAGES_PER_PAGE}&order_by=popular`;
      },
    }),

    searchImages: builder.query({
      query: ({page = 1, query}: SearchImageArgs) => {
        return `search?page=${page}&query=${query}`;
      },
    }),
  }),
});

export const { useGetImagesQuery, useSearchImagesQuery } = imageApi;
