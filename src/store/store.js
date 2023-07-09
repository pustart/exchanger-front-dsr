/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { categoryApi } from "./categories/category.api";
import { registrationApi } from "./regForm/reg.api";
import { userApi } from "./users/user.api";
import { categoriesReducer } from "./categories/category.slice";
import { allUsersReducer } from "./users/allUsers.slice";
import { userReducer } from "./users/user.slice";
import { filterReducer } from "./filter/filter.slice";
import { regFormReducer } from "./regForm/regForm.slice";
import { personalThingsReducer } from "./things/personalThings.slice";
import { thingsApi } from "./things/things.api";

const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer,
  [registrationApi.reducerPath]: registrationApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [thingsApi.reducerPath]: thingsApi.reducer,
  categories: categoriesReducer,
  personalThings: personalThingsReducer,
  allUsers: allUsersReducer,
  user: userReducer,
  filter: filterReducer,
  regForm: regFormReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        categoryApi.middleware,
        registrationApi.middleware,
        userApi.middleware,
        thingsApi.middleware
      ),
  });

export const store = makeStore();
export const wrapper = createWrapper(makeStore);
