import React from "react";
import { useSelector } from "react-redux";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import CategoriesPage from "../../src/components/templates/AdminPages/CategoriesPage/CategoriesPage";
import restClient from "../../src/api/RestClient";
import { BACKEND_PATH } from "../../src/constants/api";
import { wrapper } from "../../src/store/store";
import { setCategories } from "../../src/store/categories/category.slice";
import ROLES from "../../src/constants/roles";

function Categories() {
  const categories = useSelector(state => state.categories);
  return <CategoriesPage categories={categories} />;
}

export default withDefaultLayout(Categories);

export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  const token = await getToken({ req: ctx.req });
  if (!token) {
    return {
      redirect: {
        destination: `/login`,
        permanent: false,
      },
    };
  }

  if (token.role !== ROLES.ADMIN) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
  const res = await restClient.get(`${BACKEND_PATH}/categories`, token.accessToken);
  const data = await res.data;
  const categories = data.map(category => ({
    id: category.id,
    name: category.name,
    thingsCount: category.thingsCount,
  }));

  store.dispatch(setCategories(categories));
  return { props: {} };
});
