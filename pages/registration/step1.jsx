import React from "react";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import RegPage1 from "../../src/components/templates/CommonPages/RegistrationPages/Step1/RegPage1";

function RegStep1() {
  return <RegPage1 />;
}

export default withDefaultLayout(RegStep1);
