import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import RegPage1 from "../../src/components/templates/CommonPages/RegistrationPages/Step1/RegPage1";

function RegStep1() {
  return <RegPage1 />;
}

export default withDefaultLayout(RegStep1);

export async function getServerSideProps(ctx) {
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
}
