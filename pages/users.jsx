import React from "react";
import { getToken } from "next-auth/jwt";
import { useSelector } from "react-redux";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";
import UsersPage from "../src/components/templates/AdminPages/UsersPage/UsersPage";
import { wrapper } from "../src/store/store";
import { BACKEND_PATH } from "../src/constants/api";
import restClient from "../src/api/RestClient";
import { setUsers } from "../src/store/users/allUsers.slice";
import ROLES from "../src/constants/roles";

function Users() {
  const users = useSelector(state => state.allUsers);

  return <UsersPage users={users} pagination={false}/>;
}

export default withDefaultLayout(Users);

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

  const res = await restClient.get(`${BACKEND_PATH}/users`, token.accessToken);
  const data = await res.data;

  store.dispatch(setUsers(data));
  return { props: {} };
});
