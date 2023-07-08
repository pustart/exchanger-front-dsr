/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const regFormSlice = createSlice({
  name: "regForm",
  initialState: {
    email: null,
    password: null,
    name: null,
    surname: null,
    birthday: null,
    phone: null,
    photo: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      HYDRATE,
      (state, action) =>
        // Обработка гидратации
        // Установка состояния стора на основе переданных данных
        action.payload.regForm || state
    );
  },
});

export const { setEmail, setPassword, setName, setSurname, setBirthday, setPhone, setPhoto } =
  regFormSlice.actions;
export const regFormReducer = regFormSlice.reducer;
