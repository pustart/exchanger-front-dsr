import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Pagination from "../../../elements/Pagination/Pagination";
import styles from "./UsersPage.module.css";
import UserCard from "../../../elements/UserCard/UserCard";
import { USERS } from "../../../../constants/mocks";
import Htag from "../../../elements/Htag/Htag";

function UsersPage({ users = USERS, pagination = true }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div className={styles["users-page-container"]}>
      {users.length === 0 ? (
        <Htag tag="h3" fontWeight="medium" className={styles.placeholder}>
          Пользователи не найдены
        </Htag>
      ) : (
        <ul ref={animationParent} className={styles["user-card-container"]}>
          {users.map(user => (
            <li key={user.id}>
              <UserCard key={user.id} userInfo={user} />
            </li>
          ))}
        </ul>
      )}
      {pagination ? <Pagination count={5} /> : null}
    </div>
  );
}

export default UsersPage;
