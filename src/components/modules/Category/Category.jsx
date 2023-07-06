/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import cn from "classnames";
import { useDispatch } from "react-redux";
import styles from "./Category.module.css";
import Htag from "../../elements/Htag/Htag";
import Button from "../../elements/Button/Button";
import { useDeleteCategoryMutation } from "../../../store/categories/category.api";
import { deleteCategory } from "../../../store/categories/category.slice";

function Category({ categoryInfo, className }) {
  const { id, name, amount } = categoryInfo;

  const dispatch = useDispatch();
  const [deleteCategoryMutation] = useDeleteCategoryMutation();

  const handleDelete = async categoryId => {
    try {
      await deleteCategoryMutation(categoryId).unwrap();
      dispatch(deleteCategory(categoryId));
    } catch (error) {
      console.log("Ошибка удаления категории:", error);
    }
  };

  return (
    <article className={cn(styles["category-card"], className)}>
      <div className={styles["description-container"]}>
        <Htag tag="h3" fontWeight="medium" className={styles.title}>
          {name}
        </Htag>
        <div className={styles["amount-info"]}>Количество вещей в категории: {amount}</div>
      </div>
      <div>
        <Button
          height="2.25rem"
          tabIndex="0"
          appearance="delete"
          round="square"
          onClick={() => handleDelete(id)}
          endIcon={<DeleteIcon />}
        >
          Удалить
        </Button>
      </div>
    </article>
  );
}

export default Category;
