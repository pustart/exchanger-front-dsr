import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import AddCategoryPage from "../../src/components/templates/AdminPages/AddCategoryPage/AddCategoryPage";
import { wrapper } from "../../src/store/store";
import ROLES from "../../src/constants/roles";
import restClient from "../../src/api/RestClient";
import { BACKEND_PATH } from "../../src/constants/api";
import { setUser } from "../../src/store/users/user.slice";

function AddCategory() {
  return <AddCategoryPage />;
}

export default withDefaultLayout(AddCategory);

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

  const usrRes = await restClient.get(`${BACKEND_PATH}/users/${token.id}`, token.accessToken);
  const user = await usrRes.data;

  store.dispatch(setUser({ ...user }));
  return { props: {} };
});
