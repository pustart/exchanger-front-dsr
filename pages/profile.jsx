import React from "react";
import ProfilePage from "../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";

function Profile() {
  return <ProfilePage />;
}

export default withDefaultLayout(Profile);
