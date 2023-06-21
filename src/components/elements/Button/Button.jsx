import React from 'react';
import styles from './Button.module.css';
import MuiButton from '@mui/material/Button';
import cn from "classnames";

function Button({ appearance, className, children, ...props }) {
  let variant;
  switch (appearance) {
    case "outlined":
      variant = "outlined"
      break;
    case "text":
      variant = "text";
      break;
    default:
      variant = "contained";
  }

  return (
    <MuiButton
    variant={variant}
      className={cn(styles.button, {
        [styles.outlined]: variant === "outlined",
        [styles.text]: variant === "text",
        [styles.contained]: variant === "contained",
      }, className)}
    {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
