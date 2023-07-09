/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BACKEND_PATH } from "../../constants/api";

export const thingsApi = createApi({
  reducerPath: "api/things",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_PATH}` }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: build => ({
    getThings: build.query({
      query: (userId, token = null) => ({
        url: `/things/all/${userId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getThingById: build.query({
      query: ({ id, token = null }) => ({
        url: `/things/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUserThings: build.query({
      query: ({ userId, token = null }) => ({
        url: `/things/findUserThings/${userId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createThing: build.mutation({
      query: ({ createThingDto, token = null }) => ({
        url: "/things",
        method: "POST",
        body: createThingDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateThing: build.mutation({
      query: ({ id, updateThingDto, token = null }) => ({
        url: `/things/${id}`,
        method: "PATCH",
        body: updateThingDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteThing: build.mutation({
      query: ({ id, token = null }) => ({
        url: `/things/${id}`,
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
  useCreateThingMutation,
  useDeleteThingMutation,
  useGetThingByIdQuery,
  useGetThingsQuery,
  useUpdateThingMutation,
  useGetUserThingsQuery,
  util: { getRunningQueriesThunk },
} = thingsApi;

export const { getThingById, getThings, getUserThings } = thingsApi.endpoints;
