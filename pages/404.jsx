import React from "react";
import withDefaultLayout from "../src/layouts/Layout";
import Error404Template from "../src/components/templates/ErrorsPages/Error404/Error404";

export function Error404() {
  return <Error404Template />;
}

export default withDefaultLayout(Error404);
