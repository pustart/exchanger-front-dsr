/* eslint-disable no-param-reassign */
import React from "react";
import cn from "classnames";
import { Avatar } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import Button from "../../elements/Button/Button";
import Navigation from "../Navigation/Navigation";
import ROLES from "../../../constants/roles";
import { BACKEND_PATH } from "../../../constants/api";

export function Header({ visible, className, userRole = ROLES.USER, ...props }) {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    userRole = session.user.role;
  }
  const user = useSelector(state => state.user);

  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className={styles["header-container"]}>
        <Navigation logo userRole={userRole} />
        <div className={styles["actions-wrapper"]}>
          <NextLink href="/profile">
            <Avatar
              alt=""
              src={user.photo ? `${BACKEND_PATH}${user.photo}` : "/images/default-profile.webp"}
              className={styles.avatar}
            />
          </NextLink>
          {userRole === ROLES.ADMIN ? null : (
            <Button
              className={styles["add-btn"]}
              appearance="contained"
              onClick={() => router.push("/things/add")}
            >
              Разместить вещь
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
