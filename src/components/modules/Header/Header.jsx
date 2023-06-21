import React from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import Image from 'next/image';
import Link from '../../elements/Link/Link';
import Button from '../../elements/Button/Button';
import { Avatar } from '@mui/material';
export function Header({ visible, className, ...props }) {
  return (
    <header
      className={cn(className, styles.header)}
      {...props}
    >
      <div className={styles['header-container']}>
        <nav className={styles.navigation}>
          <Image
            priority
            src="/images/logo.svg"
            width={115}
            height={40}
            alt="Exchanger"
            className={styles.logo}
          />
          <ul className={styles.list}>
            <li className={styles["list-item"]}><Link href="#">Главная</Link></li>
            <li className={styles["list-item"]}><Link href="#">Обмен</Link></li>
            <li className={styles["list-item"]}><Link href="#">Контакты</Link></li>
          </ul>
        </nav>
        <div className={styles["actions-wrapper"]}>
          <a href="#">
            <Avatar className={styles.avatar}>H</Avatar>
          </a>
          <Button className={styles["add-btn"]} appearance="contained">Разместить вещь</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
