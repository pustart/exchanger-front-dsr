import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const StyledSearch = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: "var(--rounded)",
  height: "100%",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    borderRadius: "var(--rounded)",
    border: "1.5px solid var(--faint-strong)",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&:focus": {
      border: "1.5px solid var(--faint-strong-up)",
    },
  },
}));

function Search({ className, ...props }) {
  return (
    <StyledSearch style={{ height: "2rem" }} {...props}>
      <SearchIconWrapper />
      <StyledInputBase
        style={{ width: "20rem" }}
        placeholder="Найти…"
        inputProps={{ "aria-label": "search" }}
      />
    </StyledSearch>
  );
}

export default Search;
