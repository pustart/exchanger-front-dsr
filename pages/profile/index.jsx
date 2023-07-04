import React from "react";
import ProfilePage from "../../src/components/templates/CommonPages/ProfilePage/ProfilePage";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import Things from "../../src/components/modules/Things/Things";
import ROLES from "../../src/constants/roles";

function Profile() {
  return (
    <ProfilePage>
      <Things title="Мои вещи" userRole={ROLES.ADMIN} />
    </ProfilePage>
  );
}

export default withDefaultLayout(Profile);
