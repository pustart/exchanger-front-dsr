import NextLink from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./LinkState.module.css";

function LinkState({ href, className, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={cn(styles.link, className, {
        [styles.active]: isActive,
      })}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export default LinkState;
