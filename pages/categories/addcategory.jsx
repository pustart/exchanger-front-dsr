import React from "react";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import AddCategoryPage from "../../src/components/templates/AdminPages/AddCategoryPage/AddCategoryPage";

function AddCategory() {
  return <AddCategoryPage />;
}

export default withDefaultLayout(AddCategory);
