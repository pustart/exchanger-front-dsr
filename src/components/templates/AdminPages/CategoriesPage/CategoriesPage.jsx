import React from "react";
import Category from "../../../modules/Category/Category";
import CategoryAdd from "../../../modules/CategoryAdd/CategoryAdd";
import { CATEGORIES } from "../../../../constants/mocks";

function CategoriesPage() {
  return (
    <>
      <CategoryAdd />
      {CATEGORIES.map(category => (
        <Category key={category.title} title={category.title} amount={category.amount} />
      ))}
    </>
  );
}

export default CategoriesPage;
