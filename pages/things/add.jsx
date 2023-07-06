import React from "react";
import withDefaultLayout from "../../src/layouts/Default/DefaultLayout";
import AddThingPage from "../../src/components/templates/UserPages/AddThingPage/AddThingPage";

function ThingAdd() {
  return <AddThingPage />;
}

export default withDefaultLayout(ThingAdd);
