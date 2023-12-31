/* eslint-disable import/no-named-as-default-member */
import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../../src/layouts/Default/DefaultLayout";
import OneThingPage from "../../../src/components/templates/CommonPages/OneThingPage/OneThingPage";
import { wrapper } from "../../../src/store/store";
import restClient from "../../../src/api/RestClient";
import { BACKEND_PATH } from "../../../src/constants/api";
import { setUser } from "../../../src/store/users/user.slice";

function ThingId({ thing, userThings }) {
  return <OneThingPage thing={thing} userThings={userThings} />;
}

export default withDefaultLayout(ThingId);

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

  const userThingRes = await restClient.get(
    `${BACKEND_PATH}/things/findUserThings/${user.id}`,
    token.accessToken
  );

  const userThings = await userThingRes.data;
  store.dispatch(setUser({ ...user }));

  return {
    props: {
      thing,
      userThings,
    },
  };
});
