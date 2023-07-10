/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const personalThingsSlice = createSlice({
  name: "personalThings",
  initialState: [],
  reducers: {
    deleteThing: (state, action) => {
      const thingId = action.payload;
      return state.filter(thing => thing.id !== thingId);
    },
    setThings: (state, action) => action.payload,
    addThing: (state, action) => {
      const newThing = action.payload;
      return [...state, newThing];
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => action.payload.personalThings || state);
  },
});

export const { deleteThing, setThings, addThing } = personalThingsSlice.actions;
export const personalThingsReducer = personalThingsSlice.reducer;
