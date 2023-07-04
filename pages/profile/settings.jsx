import React from "react";
import ProfilePage from "../../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import ProfileSettings from "../../src/components/modules/ProfileSettings/ProfileSettings";

function Settings() {
  return (
    <ProfilePage>
      <ProfileSettings />
    </ProfilePage>
  );
}

export default withDefaultLayout(Settings);
