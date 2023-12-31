import React from "react";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)(({ appearance, round, width, height }) => ({
  width: width ? `${width}` : "100%",
  height: height ? `${height}` : "100%",
  transition: "all 0.2s ease",
  textTransform: "none",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontFamily: "var(--font-roboto)",
  borderRadius: round === "rounded" ? "var(--rounded)" : "var(--squared)",

  "&:active": {
    transform: "scale(0.92)",
  },

  ...(appearance === "outlined" && {
    color: "var(--accent-strong)",
    border: "1.5px solid var(--accent-strong)",
    borderColor: "var(--accent-strong)",
    "&:hover": {
      color: "var(--accent-weak)",
      border: "1.5px solid var(--accent-weak)",
    },
  }),

  ...(appearance === "contained" && {
    color: "var(--faint-weak-down)",
    backgroundColor: "var(--accent-strong)",
  }),

  ...(appearance === "text" && {
    color: "var(--accent-strong)",
    borderRadius: 0,
    "&:hover": {
      color: "var(--accent-strong-down)",
    },
  }),

  ...(appearance === "delete" && {
    color: "var(--critic-strong)",
    border: "1.5px solid var(--critic-strong)",
    borderColor: "var(--critic-strong)",
    "&:hover": {
      color: "var(--base-weak)",
      backgroundColor: "var(--critic-strong)",
    },
  }),
}));

function Button({
  appearance = "contained",
  round = "rounded",
  width,
  height,
  className,
  children,
  ...props
}) {
  return (
    <StyledButton
      disableRipple
      variant={appearance}
      appearance={appearance}
      round={round}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
