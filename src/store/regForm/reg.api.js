/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BACKEND_PATH } from "../../constants/api";

export const registrationApi = createApi({
  reducerPath: "api/registration",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_PATH}` }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: build => ({
    createUser: build.mutation({
      query: createUserDto => ({
        url: "/auth/registration",
        method: "POST",
        body: createUserDto,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  util: { getRunningQueriesThunk },
} = registrationApi;
