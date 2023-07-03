import React from "react";
import Pagination from "../../../elements/Pagination/Pagination";
import styles from "./UsersPage.module.css";
import UserCard from "../../../elements/UserCard/UserCard";
import { USERS } from "../../../../constants/mocks";

function UsersPage() {
  return (
    <div className={styles["users-page-container"]}>
      <div className={styles["user-card-container"]}>
        {USERS.map(user => (
          <UserCard key={user.id} userInfo={user} />
        ))}
      </div>
      <Pagination count={5} />
    </div>
  );
}

export default UsersPage;
