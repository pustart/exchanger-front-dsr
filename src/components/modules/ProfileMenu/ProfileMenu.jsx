import React from "react";
import cn from "classnames";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import LinkState from "../../elements/LinkState/LinkState";
import styles from "./ProfileMenu.module.css";
import Htag from "../../elements/Htag/Htag";
import ROLES from "../../../constants/roles";
import dateParse from "../../../utils/dateParser";

function ProfileMenu({ userRole = ROLES.ADMIN, className, ...props }) {
  const { data: session } = useSession();
  const user = useSelector(state => state.user);
  const birthdayString = user.birthday;
  const formattedBirthday = dateParse(birthdayString);

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
        {user.name}
      </Htag>
      <div className={styles["user-info"]}>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>E-mail: {user.email}</li>
          <li className={styles["list-item"]}>Телефон: {user.phone}</li>
          <li className={styles["list-item"]}>Дата рождения: {formattedBirthday}</li>
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
            <LinkState
              className={styles.link}
              href="/"
              tabIndex="0"
              onClick={() =>
                signOut({ callbackUrl: "https://exchanger-backend.onrender.com/login" })
              }
            >
              Выйти
            </LinkState>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default ProfileMenu;
