import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Category from "../../../modules/Category/Category";
import CategoryAdd from "../../../modules/CategoryAdd/CategoryAdd";
import styles from "./CategoriesPage.module.css";
import Htag from "../../../elements/Htag/Htag";

function CategoriesPage({ categories }) {
  const [animationParent] = useAutoAnimate();
  return (
    <>
      <CategoryAdd />
      {categories.length === 0 ? (
        <Htag tag="h3" fontWeight="medium" className={styles.placeholder}>
          Категорий пока нет. Cоздайте, нажав на кнопку выше!
        </Htag>
      ) : (
        <ul ref={animationParent} className={styles.list}>
          {categories.map(category => (
            <li key={category.id} className={styles["list-item"]}>
              <Category key={category.id} categoryInfo={category} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CategoriesPage;
