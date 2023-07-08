import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import Things from "../../src/components/modules/Things/Things";
import ROLES from "../../src/constants/roles";
import { wrapper } from "../../src/store/store";
import restClient from "../../src/api/RestClient";
import { BACKEND_PATH } from "../../src/constants/api";
import ProfilePage from "../../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import { setUser } from "../../src/store/users/user.slice";

function Profile() {
  return (
    <ProfilePage>
      <Things title="Мои вещи" userRole={ROLES.ADMIN} />
    </ProfilePage>
  );
}

export default withDefaultLayout(Profile);

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
  console.log(user);

  store.dispatch(setUser(user));
  return { props: {} };
});
