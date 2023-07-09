import React from "react";
import { getToken } from "next-auth/jwt";
import { useSelector } from "react-redux";
import ThingsPage from "../src/components/templates/CommonPages/ThingsPage/ThingsPage";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";
import { wrapper } from "../src/store/store";
import { BACKEND_PATH } from "../src/constants/api";
import restClient from "../src/api/RestClient";
import { setUser } from "../src/store/users/user.slice";
import { setCategories } from "../src/store/categories/category.slice";
import { setThings } from "../src/store/things/personalThings.slice";
import ROLES from "../src/constants/roles";

function Home({ things, role }) {
  const stateThing = useSelector(state => state.personalThings);

  return <ThingsPage things={role === ROLES.ADMIN ? stateThing : things} />;
}

export default withDefaultLayout(Home);

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

  const res = await restClient.get(`${BACKEND_PATH}/users/${token.id}`, token.accessToken);
  const user = await res.data;

  const categoriesRes = await restClient.get(`${BACKEND_PATH}/categories`, token.accessToken);
  const categoriesData = await categoriesRes.data;
  const categories = categoriesData.map(category => ({
    id: category.id,
    name: category.name,
  }));

  const thingsRes = await restClient.get(
    `${BACKEND_PATH}/things/all/${token.id}`,
    token.accessToken
  );
  const things = await thingsRes.data;

  store.dispatch(setCategories(categories));
  store.dispatch(setUser({ ...user }));
  store.dispatch(setThings(things));

  return { props: { things, role: token.role } };
});
