import React from "react";
import { useSelector } from "react-redux";
import { waitFor } from "@reduxjs/toolkit/query";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import CategoriesPage from "../../src/components/templates/AdminPages/CategoriesPage/CategoriesPage";
import restClient from "../../src/api/RestClient";
import { BACKEND_PATH } from "../../src/constants/api";
import { wrapper } from "../../src/store/store";
import { getCategories, getRunningQueriesThunk, getCategoryById } from "../../src/store/categories/category.api";
import { setCategories } from "../../src/store/categories/category.slice";


function Categories() {
  const categories = useSelector(state => state.categories);
  return <CategoriesPage categories={categories}/>
}

export default withDefaultLayout(Categories);

export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
    // const getCategoriesResult = store.dispatch(getCategories.initiate());
  // await Promise.all(store.dispatch(getRunningQueriesThunk()));
  const res = await restClient.get(`${BACKEND_PATH}/categories`);
  const data = await res.data;
  const categories = data.map(category => ({
    id: category.id,
    name: category.name,
  }));

  store.dispatch(setCategories(categories));

  console.log(categories);
  console.log(store.getState().categories);


  return { props: {} };
});
