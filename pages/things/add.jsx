import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import AddThingPage from "../../src/components/templates/UserPages/AddThingPage/AddThingPage";
import ROLES from "../../src/constants/roles";
import { wrapper } from "../../src/store/store";
import { BACKEND_PATH } from "../../src/constants/api";
import restClient from "../../src/api/RestClient";
import { setCategories } from "../../src/store/categories/category.slice";
import { setUser } from "../../src/store/users/user.slice";

function ThingAdd() {
  return <AddThingPage />;
}

export default withDefaultLayout(ThingAdd);

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

  if (token.role === ROLES.ADMIN) {
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
  }));

  const usrRes = await restClient.get(`${BACKEND_PATH}/users/${token.id}`, token.accessToken);
  const user = await usrRes.data;

  store.dispatch(setUser({ ...user }));
  store.dispatch(setCategories(categories));

  return { props: {} };
});
