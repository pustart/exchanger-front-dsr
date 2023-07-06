import React from "react";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";
import LoginPage from "../src/components/templates/CommonPages/LoginPage/LoginPage";

function Login() {
  return <LoginPage />;
}

export default withDefaultLayout(Login);
