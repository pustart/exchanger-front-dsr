/* eslint-disable indent */
import cn from "classnames";
import styles from "./Htag.module.css";

function Htag({ tag, fontWeight, children, className }) {
  let weight;
  switch (fontWeight) {
    case "bold":
      weight = styles.bold;
      break;
    case "medium":
      weight = styles.medium;
      break;
    default:
      weight = styles.regular;
  }

  switch (tag) {
    case "h1":
      return <h1 className={cn(styles.h1, weight, className)}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h2, weight, className)}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3, weight, className)}>{children}</h3>;
    case "h4":
      return <h4 className={cn(styles.h4, weight, className)}>{children}</h4>;
    default:
      return <></>;
  }
}

export default Htag;
