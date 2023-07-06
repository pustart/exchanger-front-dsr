import React from "react";
import LooksThreeIcon from "@mui/icons-material/Looks3";
import Banner from "../../../../elements/Banner/Banner";
import RegForm3 from "../../../../modules/Registration/RegFormStep3/RegFormStep3";

function RegPage3() {
  return (
    <div>
      <Banner title="Регистрация">
        <LooksThreeIcon fontSize="large" />
      </Banner>
      <RegForm3 />
    </div>
  );
}

export default RegPage3;
