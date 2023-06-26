import React from "react";
import cn from "classnames";
import styles from "./Footer.module.css";
import Image from 'next/image';
import Navigation from '../../elements/Navigation/Navigation';
import { PRIVACY_POLICY_LINK, SOCIALS } from '../../../../src/constants/links';

function Footer({ visible, className, ...props }) {
  return (
    <footer
      className={cn(styles.footer, className)}
      {...props}
    >
      <div className={styles['footer-container']}>
        <div className={styles["nav-wrapper"]}>
          <Navigation logo={false} />
          <ul className={styles["socials-list"]}>
            {
              SOCIALS.map((social, index) => (
                <li key={index} className={styles["socials-list-item"]}>
                  <a href={social.path} target="_blank">
                    <Image
                      priority
                      src={social.img}
                      width={24}
                      height={24}
                      alt={social.alt}
                    />
                  </a>
                </li>
              ))
            }
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
            <a href={PRIVACY_POLICY_LINK} target="_blank">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
