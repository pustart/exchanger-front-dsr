import React from "react";
import styles from "./ProfilePage.module.css";
import ProfileMenu from "../../../modules/ProfileMenu/ProfileMenu";
import ROLES from "../../../../constants/roles";
import ProfileSettings from "../../../modules/ProfileSettings/ProfileSettings";

function ProfilePage({ userRole = ROLES.USER, children }) {
  return (
    <div className={styles["grid-container"]}>
      <ProfileMenu userRole={userRole} />
      <div className={styles.main}>{userRole === ROLES.ADMIN ? <ProfileSettings /> : children}</div>
    </div>
  );
}

export default ProfilePage;
