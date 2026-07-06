import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UnsplashImage } from "../features/gallery/gallery.types";

export const IMAGES_PER_PAGE = 12;

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gallery-api-lf4c.onrender.com/api/images",
  }),
  endpoints: (builder) => ({
    getImages: builder.query<UnsplashImage[], number>({
      query: (page = 1) => {
        return `?page=${page}&per_page=${IMAGES_PER_PAGE}&order_by=popular`;
      },
    }),

    searchImages: builder.query({
      query: (query: string) => {
        return `search/photos?query=${query}&per_page=${IMAGES_PER_PAGE}`;
      },
    }),
  }),
});

export const { useGetImagesQuery, useSearchImagesQuery } = imageApi;
