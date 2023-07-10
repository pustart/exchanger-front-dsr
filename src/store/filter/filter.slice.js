/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const filterSlice = createSlice({
  name: "filter",
  initialState: { category: "", exchangeCategory: "", sort: "" },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setExchangeCategory: (state, action) => {
      state.exchangeCategory = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => action.payload.filter || state);
  },
});

export const { setCategory, setExchangeCategory, setSort } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
