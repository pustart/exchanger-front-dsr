import React from "react";
import styles from "./ThingsPage.module.css";
import Filter from "../../../modules/Filter/Filter";
import Things from "../../../modules/Things/Things";

function ThingsPage() {
  return (
    <div className={styles["grid-container"]}>
      <Filter />
      <Things className={styles.main} title="Все вещи" />
    </div>
  );
}

export default ThingsPage;
