import React from "react";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div className={styles["grid-container"]}>
      <div className={styles.sidebar}>Hello</div>
      <div className={styles.main}>Main</div>
    </div>
  );
}

export default ProfilePage;
