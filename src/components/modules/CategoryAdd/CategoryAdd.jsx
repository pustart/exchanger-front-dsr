import React from "react";
import cn from "classnames";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NextLink from "next/link";
import styles from "./CategoryAdd.module.css";

function CategoryAdd({ className }) {
  return (
    <NextLink href="/addcategory" className={cn(styles["add-card"], className)}>
      <p>Добавить категорию</p>
      <AddCircleOutlineIcon />
    </NextLink>
  );
}

export default CategoryAdd;
