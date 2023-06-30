import React from "react";
import cn from "classnames";
import NextLink from "next/link";
import styles from "./Link.module.css";

function Link({ className, children, ...props }) {
  return (
    <NextLink tabIndex="0" className={cn(styles.link, className)} {...props}>
      {children}
    </NextLink>
  );
}

export default Link;
