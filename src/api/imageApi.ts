import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UnsplashImage } from "../features/gallery/gallery.types";

export const IMAGES_PER_PAGE = 12;

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getImages: builder.query<UnsplashImage[], number>({
      query: (page = 1) => {
        return `photos?page=${page}&per_page=${IMAGES_PER_PAGE}&order_by=popular`;
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
