import React from "react";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Banner from "../../../../elements/Banner/Banner";
import RegForm2 from "../../../../modules/Registration/RegFormStep2/RegFormStep2";

function RegPage2() {
  return (
    <div>
      <Banner title="Регистрация">
        <LooksTwoIcon fontSize="large" />
      </Banner>
      <RegForm2 />
    </div>
  );
}

export default RegPage2;
