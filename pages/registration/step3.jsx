import React from "react";
import { getToken } from "next-auth/jwt";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import RegPage3 from "../../src/components/templates/CommonPages/RegistrationPages/Step3/RegPage3";

function RegStep3() {
  return <RegPage3 />;
}

export default withDefaultLayout(RegStep3);

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
