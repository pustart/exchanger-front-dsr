import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Category from "../../../modules/Category/Category";
import CategoryAdd from "../../../modules/CategoryAdd/CategoryAdd";
import styles from "./CategoriesPage.module.css";

function CategoriesPage({ categories }) {
  const [animationParent] = useAutoAnimate();
  return (
    <>
      <CategoryAdd />
      <ul ref={animationParent} className={styles.list}>
        {categories.map(category => (
          <li key={category.id} className={styles["list-item"]}>
            <Category key={category.id} categoryInfo={category} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoriesPage;
