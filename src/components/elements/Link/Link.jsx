import React from 'react';
import styles from './Link.module.css';
import cn from "classnames";
import NextLink from 'next/link';

function Link({ className, children, ...props }) {
  return (
    <NextLink
      tabIndex="0"
      className={cn(styles.link, className)}
      {...props}>
        {children}
    </NextLink>
  );
}

export default Link;
