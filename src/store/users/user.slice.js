/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => action.payload,
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => action.payload.user || state);
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
