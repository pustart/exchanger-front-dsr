/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import { categoryApi } from './categories/category.api';
import { categoriesReducer } from './categories/category.slice';


const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer,
  categories: categoriesReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(categoryApi.middleware),
});

export const store = makeStore();
export const wrapper = createWrapper(makeStore);
