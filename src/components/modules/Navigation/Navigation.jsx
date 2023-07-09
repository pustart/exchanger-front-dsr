import React from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./Navigation.module.css";
import Link from "../../elements/Link/Link";
import ROLES from "../../../constants/roles";

function Navigation({ className, userRole = ROLES.USER, logo = false, ...props }) {
  let sections = [{ title: "Главная", path: "/" }];

  if (userRole === ROLES.ADMIN) {
    sections = [
      { title: "Главная", path: "/" },
      { title: "Категории", path: "/categories" },
      { title: "Пользователи", path: "/users" },
    ];
  }

  return (
    <nav className={cn(styles.navigation, className)} {...props}>
      {logo ? (
        <Image priority src="/images/logo.svg" width={115} height={40} alt="Exchanger" />
      ) : null}
      <ul className={styles.list}>
        {sections.map(section => (
          <li key={section.title} className={styles["list-item"]}>
            <Link href={section.path}>{section.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
