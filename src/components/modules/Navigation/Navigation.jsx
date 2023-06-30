import React from 'react';
import styles from './Navigation.module.css';
import cn from "classnames";
import Image from 'next/image';
import Link from '../../elements/Link/Link';

function Navigation({ className, userRole = "default", logo = false, ...props }) {
  let sections = [
    { title: "Главная", path: "/" },
    { title: "Обмен", path: "/exchange" },
    { title: "Контакты", path: "/contacts" },
  ];

  if (userRole === "admin") {
    sections = [
      { title: "Главная", path: "/" },
      { title: "Категории", path: "/categories" },
      { title: "Пользователи", path: "/users" },
    ];
  }

  return (
    <nav className={cn(styles.navigation, className)} {...props}>
      {
        logo
          ?
          <Image
            priority
            src="/images/logo.svg"
            width={115}
            height={40}
            alt="Exchanger"
          />
          :
          null
      }
      <ul className={styles.list}>
        {
          sections.map((section, index) => (
            <li
              key={index}
              className={styles["list-item"]}
            >
              <Link href={section.path}>{section.title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navigation;