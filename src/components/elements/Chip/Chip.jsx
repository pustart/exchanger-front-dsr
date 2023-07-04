/* eslint-disable no-unused-vars */
import React from "react";
import MuiChip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const StyledChip = styled(MuiChip)(({ appearance }) => ({
  height: "1.5rem",
  color: "var(--accent-strong-up)",
  backgroundColor: appearance === "transparent" ? "none" : "var(--complement-strong)",
  fontSize: "0.75rem",
  textTransform: "none",
}));

function Chip({ appearance, label, size = "small", ...props }) {
  return <StyledChip appearance={appearance} label={label} {...props} />;
}

export default Chip;
