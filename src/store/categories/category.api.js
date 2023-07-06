/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from 'next-redux-wrapper'
import { BACKEND_PATH } from "../../constants/api";

export const categoryApi = createApi({
  reducerPath: "api/categories",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_PATH}` }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: build => ({
    getCategories: build.query({
      query: () => "/categories",
    }),
    getCategoryById: build.query({
      query: id => `/categories/${id}`,
    }),
    createCategory: build.mutation({
      query: createCategoryDto => ({
        url: "/categories",
        method: "POST",
        body: createCategoryDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    updateCategory: build.mutation({
      query: ({ id, updateCategoryDto }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: updateCategoryDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    deleteCategory: build.mutation({
      query: id => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  util: { getRunningQueriesThunk },
} = categoryApi;

export const { getCategories, getCategoryById } = categoryApi.endpoints;
