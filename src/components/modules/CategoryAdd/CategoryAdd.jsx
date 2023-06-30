import React from 'react';
import styles from './CategoryAdd.module.css';
import cn from "classnames";
import Icon from '@mui/material/Icon';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NextLink from 'next/link';

function CategoryAdd({ className, children }) {
  return (
    <NextLink href="#" className={cn(styles["add-card"], className)}>
      <p>Добавить категорию</p>
      <AddCircleOutlineIcon></AddCircleOutlineIcon>
    </NextLink>
  );
}

export default CategoryAdd;
