/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BACKEND_PATH } from "../../constants/api";

export const userApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_PATH}` }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: build => ({
    getUsers: build.query({
      query: (token = null) => ({
        url: "/users",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUsersById: build.query({
      query: ({ id, token = null }) => ({
        url: `/users/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createUsers: build.mutation({
      query: ({ createUserDto, token = null }) => ({
        url: "/users",
        method: "POST",
        body: createUserDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateUsers: build.mutation({
      query: ({ id, updateUserDto, token = null }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: updateUserDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteUsers: build.mutation({
      query: ({ id, token = null }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useCreateUsersMutation,
  useUpdateUsersMutation,
  useDeleteUsersMutation,
  util: { getRunningQueriesThunk },
} = userApi;

export const { getUsers, getUsersById } = userApi.endpoints;
