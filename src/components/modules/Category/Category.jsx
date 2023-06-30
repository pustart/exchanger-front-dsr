import React from "react";
import styles from "./Category.module.css";
import Htag from "../../elements/Htag/Htag";
import Button from "../../elements/Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import cn from "classnames";

function Category({ title = "Категория", amount = 0, className }) {
  return (
    <article className={cn(styles["category-card"], className)}>
      <div className={styles["description-container"]}>
        <Htag tag="h3" fontWeight="medium" className={styles.title}>
          {title}
        </Htag>
        <div className={styles["amount-info"]}>Количество вещей в категории: {amount}</div>
      </div>
      <div>
        <Button appearance="delete" round="square" endIcon={<DeleteIcon />}>
          Удалить
        </Button>
      </div>
    </article>
  );
}

export default Category;
