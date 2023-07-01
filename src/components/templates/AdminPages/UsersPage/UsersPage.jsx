import React from "react";
import Pagination from "../../../elements/Pagination/Pagination";
import styles from "./UsersPage.module.css";
import UserCard from "../../../modules/UserCard/UserCard";

function UsersPage() {
  return (
    <div className={styles["users-page-container"]}>
      <div className={styles["user-card-container"]}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Pagination count={5} />
    </div>
  );
}

export default UsersPage;
