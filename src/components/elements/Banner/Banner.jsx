import React from "react";
import cn from "classnames";
import styles from "./Banner.module.css";
import Htag from "../Htag/Htag";

function Banner({ className, title, children, ...props }) {
  return (
    <aside className={cn(styles.banner, className)} {...props}>
      <div className={styles["content-wrapper"]}>
        <Htag className={styles.title} tag="h2" fontWeight="bold">
          {title}
        </Htag>
        {children}
      </div>
    </aside>
  );
}

export default Banner;
