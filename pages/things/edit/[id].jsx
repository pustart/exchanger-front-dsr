import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../../src/layouts/Default/DefaultLayout";
import EditThingPage from "../../../src/components/templates/UserPages/EditThingPage/EditThingPage";
import ROLES from "../../../src/constants/roles";
import { wrapper } from "../../../src/store/store";
import { BACKEND_PATH } from "../../../src/constants/api";
import restClient from "../../../src/api/RestClient";
import { setCategories } from "../../../src/store/categories/category.slice";
import { setUser } from "../../../src/store/users/user.slice";

function ThingEdit({ thing }) {
  return <EditThingPage thing={thing} />;
}

export default withDefaultLayout(ThingEdit);

export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  const { id } = ctx.query;

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

  const res = await restClient.get(`${BACKEND_PATH}/users/${token.id}`, token.accessToken);
  const user = await res.data;
  const thingRes = await restClient.get(`${BACKEND_PATH}/things/${id}`, token.accessToken);
  const thing = await thingRes.data;

  if (!thing) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  const resCat = await restClient.get(`${BACKEND_PATH}/categories`, token.accessToken);
  const dataCat = await resCat.data;
  const categories = dataCat.map(category => ({
    id: category.id,
    name: category.name,
  }));

  store.dispatch(setUser({ ...user }));
  store.dispatch(setCategories(categories));

  return {
    props: {
      thing,
    },
  };
});
