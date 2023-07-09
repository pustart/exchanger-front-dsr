import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import RegPage2 from "../../src/components/templates/CommonPages/RegistrationPages/Step2/RegPage2";

function RegStep2() {
  return <RegPage2 />;
}

export default withDefaultLayout(RegStep2);

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
