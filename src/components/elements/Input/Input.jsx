import React from "react";
import cn from "classnames";
import styles from "./Input.module.css";

function Input({ className, ...props }) {
  return <input className={cn(styles.input, className)} {...props} />;
}

export default Input;
