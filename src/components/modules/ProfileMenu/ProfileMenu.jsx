import React from "react";
import cn from "classnames";
import Image from "next/image";
import LinkState from "../../elements/LinkState/LinkState";
import styles from "./ProfileMenu.module.css";
import Htag from "../../elements/Htag/Htag";
import ROLES from "../../../constants/roles";

function ProfileMenu({ userRole = ROLES.ADMIN, className, ...props }) {
  return (
    <aside className={cn(styles["profile-container"], className)} {...props}>
      <Image
        priority
        src="/images/default-profile.webp"
        width={240}
        height={240}
        alt="profile image"
        className={styles.avatar}
      />
      <Htag className={styles["profile-title"]} tag="h2" fontWeight="bold">
        Артем Пустовалов
      </Htag>
      <div className={styles["user-info"]}>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>E-mail: </li>
          <li className={styles["list-item"]}>Телефон: </li>
          <li className={styles["list-item"]}>Пол: </li>
          <li className={styles["list-item"]}>Дата рождения: </li>
        </ul>
      </div>
      <nav className={styles["menu-container"]}>
        <ul className={styles.list}>
          {userRole === ROLES.USER ? (
            <li className={styles["list-item"]}>
              <LinkState className={styles.link} href="/profile" tabIndex="0">
                Мои вещи
              </LinkState>
            </li>
          ) : null}
          <li className={styles["list-item"]}>
            <LinkState className={styles.link} href="/profile/settings" tabIndex="0">
              Настройка
            </LinkState>
          </li>
          <li className={styles["list-item"]}>
            <LinkState className={styles.link} href="/" tabIndex="0">
              Выйти
            </LinkState>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default ProfileMenu;
