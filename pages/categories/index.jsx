import React from "react";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import CategoriesPage from "../../src/components/templates/AdminPages/CategoriesPage/CategoriesPage";

function Categories() {
  return <CategoriesPage />;
}

export default withDefaultLayout(Categories);
