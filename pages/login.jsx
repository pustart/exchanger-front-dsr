import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";
import LoginPage from "../src/components/templates/CommonPages/LoginPage/LoginPage";
import { wrapper } from "../src/store/store";

function Login() {
  return <LoginPage />;
}

export default withDefaultLayout(Login);

export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  const token = await getToken({ req: ctx.req });
  if (token) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  return { props: {} };
});
