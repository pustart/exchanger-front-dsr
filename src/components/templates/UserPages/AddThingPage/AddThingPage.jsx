import React from "react";
import Banner from "../../../elements/Banner/Banner";
import AddThingForm from "../../../modules/AddThingForm/AddThingForm";

function AddThingPage() {
  return (
    <div>
      <Banner title="Разместить вещь для обмена" />
      <AddThingForm />
    </div>
  );
}

export default AddThingPage;
