/* eslint-disable no-param-reassign */
import React from "react";
import cn from "classnames";
import Image from "next/image";
import { useSession } from "next-auth/react";
import styles from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";
import { PRIVACY_POLICY_LINK, SOCIALS } from "../../../constants/links";
import ROLES from "../../../constants/roles";

function Footer({ visible, className, userRole = ROLES.USER, ...props }) {
  const { data: session } = useSession();
  if (session) {
    userRole = session.user.role;
  }

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles["footer-container"]}>
        <div className={styles["nav-wrapper"]}>
          <Navigation logo={false} userRole={userRole} />
          <ul className={styles["socials-list"]}>
            {SOCIALS.map(social => (
              <li key={social.path} className={styles["socials-list-item"]}>
                <a href={social.path} target="_blank" rel="noreferrer">
                  <Image priority src={social.img} width={24} height={24} alt={social.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["footer-info"]}>
          <p>© {new Date().getFullYear().toString()} Exchanger. Все права защищены.</p>
          <Image
            priority
            src="/images/logo.svg"
            width={115}
            height={40}
            alt="Exchanger"
            className={styles.logo}
          />
          <div>
            <a href={PRIVACY_POLICY_LINK} target="_blank" rel="noreferrer">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
