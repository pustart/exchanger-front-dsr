import React from "react";
import cn from "classnames";
import { Avatar } from "@mui/material";
import NextLink from "next/link";
import styles from "./Header.module.css";
import Button from "../../elements/Button/Button";
import Navigation from "../Navigation/Navigation";

export function Header({ visible, className, userRole = "default", ...props }) {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className={styles["header-container"]}>
        <Navigation logo />
        <div className={styles["actions-wrapper"]}>
          <NextLink href="/profile">
            <Avatar src="/images/default-profile.webp" className={styles.avatar} />
          </NextLink>
          {userRole === "admin" ? null : (
            <Button className={styles["add-btn"]} appearance="contained">
              Разместить вещь
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
