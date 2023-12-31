/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
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
      query: (token = null) => ({
        url: "/categories",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getCategoryById: build.query({
      query: ({ id, token = null }) => ({
        url: `/categories/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createCategory: build.mutation({
      query: ({ createCategoryDto, token = null }) => ({
        url: "/categories",
        method: "POST",
        body: createCategoryDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateCategory: build.mutation({
      query: ({ id, updateCategoryDto, token = null }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: updateCategoryDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteCategory: build.mutation({
      query: ({ id, token = null }) => ({
        url: `/categories/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
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
