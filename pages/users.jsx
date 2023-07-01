import React from "react";
import UsersPage from "../src/components/templates/AdminPages/UsersPage/UsersPage";
import withDefaultLayout from "../src/layouts/Layout";

function Users() {
  return <UsersPage />;
}

export default withDefaultLayout(Users);
