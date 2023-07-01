import React from "react";
import Pagination from "../../../elements/Pagination/Pagination";
import styles from "./UsersPage.module.css";

function UsersPage() {
  return (
    <div className={styles["users-page-container"]}>
      <Pagination count={5} />
    </div>
  );
}

export default UsersPage;
