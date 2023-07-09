import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Pagination from "../../../elements/Pagination/Pagination";
import styles from "./UsersPage.module.css";
import UserCard from "../../../elements/UserCard/UserCard";
import { USERS } from "../../../../constants/mocks";

function UsersPage({ users = USERS, pagination = true }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div className={styles["users-page-container"]}>
      <ul ref={animationParent} className={styles["user-card-container"]}>
        {users.map(user => (
          <li key={user.id}>
            <UserCard key={user.id} userInfo={user} />
          </li>
        ))}
      </ul>
      {pagination ? <Pagination count={5} /> : null}
    </div>
  );
}

export default UsersPage;
