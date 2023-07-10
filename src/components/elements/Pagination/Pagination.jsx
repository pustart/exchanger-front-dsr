import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledPagination = styled(MuiPagination)(() => ({
  ul: {
    marginTop: "2rem",
    marginBottom: "3.25rem",
    "& .MuiPaginationItem-root": {
      color: "inherit",
      "&.Mui-selected": {
        color: "var(--faint-weak-down)",
        backgroundColor: "var(--accent-strong)",
      },
    },
  },
}));

function Pagination({ className, count, ...props }) {
  return (
    <StyledPagination
      count={count}
      className={className}
      shape="rounded"
      renderItem={item => (
        <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
      )}
      {...props}
    />
  );
}

export default Pagination;
