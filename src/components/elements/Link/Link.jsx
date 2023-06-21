import React from 'react';
import styles from './Link.module.css';
import cn from "classnames";

function Link({ className, children, ...props }) {
  return (
    <a
      tabindex="0"
      className={cn(styles.link, className)}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
