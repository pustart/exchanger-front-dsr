import React from "react";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";
import UsersPage from "../src/components/templates/AdminPages/UsersPage/UsersPage";

function Users() {
  return <UsersPage />;
}

export default withDefaultLayout(Users);
