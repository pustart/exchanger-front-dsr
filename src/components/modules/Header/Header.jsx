import React from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import Button from '../../elements/Button/Button';
import { Avatar } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import NextLink from "next/link";

export function Header({ visible, className, userRole = "default", ...props }) {
  return (
    <header
      className={cn(className, styles.header)}
      {...props}
    >
      <div className={styles['header-container']}>
        <Navigation logo={true} />
        <div className={styles["actions-wrapper"]}>
          <NextLink href="/profile">
            <Avatar src="/images/default-profile.png" className={styles.avatar}></Avatar>
          </NextLink>
          {
            userRole === "admin"
              ?
              null
              :
              <Button className={styles["add-btn"]} appearance="contained">Разместить вещь</Button>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
