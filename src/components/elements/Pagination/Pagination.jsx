import React from "react";
import MuiPagination from "@mui/material/Pagination"; // import styles from "./Link.module.css";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(MuiPagination)(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "inherit",
      "&:hover, &.Mui-selected": {
        color: "var(--accent-strong)",
      },
    },
  },
}));

function Pagination({ className, count, ...props }) {
  return <StyledPagination count={count} className={className} {...props} />;
}

export default Pagination;
