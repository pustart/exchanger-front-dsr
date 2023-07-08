/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: [],
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload;
      return state.filter(user => user.id !== userId);
    },
    setUsers: (state, action) => action.payload,
  },
  extraReducers: builder => {
    builder.addCase(
      HYDRATE,
      (state, action) =>
        // Обработка гидратации
        // Установка состояния стора на основе переданных данных
        action.payload.allUsers || state
    );
  },
});

export const { deleteUser, setUsers } = allUsersSlice.actions;
export const allUsersReducer = allUsersSlice.reducer;
