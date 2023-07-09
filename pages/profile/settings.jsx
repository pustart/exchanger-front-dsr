import React from "react";
import { getToken } from "next-auth/jwt";
import ProfilePage from "../../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import ProfileSettings from "../../src/components/modules/ProfileSettings/ProfileSettings";
import { wrapper } from "../../src/store/store";
import restClient from "../../src/api/RestClient";
import { setUser } from "../../src/store/users/user.slice";
import { BACKEND_PATH } from "../../src/constants/api";

function Settings() {
  return (
    <ProfilePage>
      <ProfileSettings />
    </ProfilePage>
  );
}

export default withDefaultLayout(Settings);

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

  store.dispatch(setUser(user));
  return { props: {} };
});
