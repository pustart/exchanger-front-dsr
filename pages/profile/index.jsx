import React from "react";
import { getToken } from "next-auth/jwt";
import { useSelector } from "react-redux";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import Things from "../../src/components/modules/Things/Things";
import ROLES from "../../src/constants/roles";
import { wrapper } from "../../src/store/store";
import restClient from "../../src/api/RestClient";
import { BACKEND_PATH } from "../../src/constants/api";
import ProfilePage from "../../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import { setUser } from "../../src/store/users/user.slice";
import { setThings } from "../../src/store/things/personalThings.slice";

function Profile() {
  const user = useSelector(state => state.user);
  const things = useSelector(state => state.personalThings);

  return (
    <ProfilePage>
      <Things
        pagination={false}
        things={things}
        title="Мои вещи"
        userRole={ROLES.ADMIN}
        thingsAmount={user?.thingsCount}
      />
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

  if (token.role === ROLES.ADMIN) {
    return {
      redirect: {
        destination: `/profile/settings`,
        permanent: false,
      },
    };
  }
  const res = await restClient.get(`${BACKEND_PATH}/users/${token.id}`, token.accessToken);
  const thingsRes = await restClient.get(
    `${BACKEND_PATH}/things/findUserThings/${token.id}`,
    token.accessToken
  );
  const user = await res.data;
  const things = await thingsRes.data;

  store.dispatch(setUser(user));
  store.dispatch(setThings(things));
  return { props: {} };
});
