import React from "react";
import Banner from "../../../elements/Banner/Banner";
import LoginForm from "../../../modules/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div>
      <Banner title="Мой аккаунт" />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
