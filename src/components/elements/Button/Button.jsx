import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ appearance }) => ({
  transition: "all 0.2s ease",
  textTransform: 'none',
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontFamily: "var(--font-roboto)",
  borderRadius: "57px",
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
}));

function Button({ appearance = "contained", className, children, ...props }) {
  return (
    <StyledButton
      disableRipple
      variant={appearance}
      appearance={appearance}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
