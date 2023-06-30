import React from "react";
import withDefaultLayout from "../src/layouts/Layout";
import Category from "../src/components/modules/Category/Category";
import CategoryAdd from "../src/components/modules/CategoryAdd/CategoryAdd";
import { CATEGORIES } from "../src/constants/mocks";

function Categories() {
  return (
    <>
      <CategoryAdd />
      {CATEGORIES.map(category => (
        <Category key={category.title} title={category.title} amount={category.amount} />
      ))}
    </>
  );
}

export default withDefaultLayout(Categories);
