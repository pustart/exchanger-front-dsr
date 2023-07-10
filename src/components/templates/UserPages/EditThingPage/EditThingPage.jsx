import React from "react";
import Banner from "../../../elements/Banner/Banner";
import EditThingForm from "../../../modules/EditThingForm/EditThingForm";

function EditThingPage({ thing }) {
  return (
    <div>
      <Banner title="Редактировать" />
      <EditThingForm thing={thing} />
    </div>
  );
}

export default EditThingPage;
