import React from "react";
import ProfilePage from "../../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import Things from "../../src/components/modules/Things/Things";

function Profile() {
  return (
    <ProfilePage>
      <Things title="Мои вещи" />
    </ProfilePage>
  );
}

export default withDefaultLayout(Profile);
