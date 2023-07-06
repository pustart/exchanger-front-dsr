import React from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Banner from "../../../../elements/Banner/Banner";
import RegForm1 from "../../../../modules/Registration/RegFormStep1/RegFormStep1";

function RegPage1() {
  return (
    <div>
      <Banner title="Регистрация">
        <LooksOneIcon fontSize="large" />
      </Banner>
      <RegForm1 />
    </div>
  );
}

export default RegPage1;
