import React from "react";
import ThingsPage from "../../src/components/templates/CommonPages/ThingsPage/ThingsPage";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";

function Things() {
  return <ThingsPage />;
}

export default withDefaultLayout(Things);
