import React from "react";
import withDefaultLayout from "../src/layouts/Default/DefaultLayout";
import Error500Template from "../src/components/templates/ErrorsPages/Error500/Error500";

export function Error500() {
  return <Error500Template />;
}

export default withDefaultLayout(Error500);
