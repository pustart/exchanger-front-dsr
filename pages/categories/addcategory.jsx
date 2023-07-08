import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import AddCategoryPage from "../../src/components/templates/AdminPages/AddCategoryPage/AddCategoryPage";
import { wrapper } from "../../src/store/store";
import ROLES from "../../src/constants/roles";

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

  return { props: {} };
});
