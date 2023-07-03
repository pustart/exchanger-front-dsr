import React from "react";
import Category from "../../../modules/Category/Category";
import CategoryAdd from "../../../modules/CategoryAdd/CategoryAdd";
import { CATEGORIES } from "../../../../constants/mocks";

function CategoriesPage() {
  return (
    <>
      <CategoryAdd />
      {CATEGORIES.map(category => (
        <Category key={category.id} categoryInfo={category} />
      ))}
    </>
  );
}

export default CategoriesPage;
