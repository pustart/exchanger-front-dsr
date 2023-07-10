/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    deleteCategory: (state, action) => {
      const categoryId = action.payload;
      return state.filter(category => category.id !== categoryId);
    },
    setCategories: (state, action) => action.payload,
    addCategory: (state, action) => {
      const newCategory = action.payload;
      return [...state, newCategory];
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => action.payload.categories || state);
  },
});

export const { deleteCategory, setCategories, addCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
