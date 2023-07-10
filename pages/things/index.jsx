import React from "react";
import { getToken } from "next-auth/jwt";
import { useSelector } from "react-redux";
import ThingsPage from "../../src/components/templates/CommonPages/ThingsPage/ThingsPage";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import { wrapper } from "../../src/store/store";
import restClient from "../../src/api/RestClient";
import { BACKEND_PATH } from "../../src/constants/api";
import { setUser } from "../../src/store/users/user.slice";
import { setThings } from "../../src/store/things/personalThings.slice";
import ROLES from "../../src/constants/roles";

function Things() {
  const things = useSelector(state => state.personalThings);

  return <ThingsPage things={things} />;
}

export default withDefaultLayout(Things);

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
  store.dispatch(setUser({ ...user }));

  if (token.role === ROLES.ADMIN) {
    const thingsRes = await restClient.get(
      `${BACKEND_PATH}/things/all/${token.id}`,
      token.accessToken
    );
    const things = await thingsRes.data;
    store.dispatch(setThings(things));
  } else if (token.role === ROLES.USER) {
    const thingsRes = await restClient.get(
      `${BACKEND_PATH}/things/exchangeable/${token.id}`,
      token.accessToken
    );
    const things = await thingsRes.data;
    store.dispatch(setThings(things));
  }

  return {
    redirect: {
      destination: `/`,
      permanent: false,
    },
  };
});
