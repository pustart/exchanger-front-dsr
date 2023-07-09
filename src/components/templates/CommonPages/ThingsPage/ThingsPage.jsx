import React from "react";
import styles from "./ThingsPage.module.css";
import Filter from "../../../modules/Filter/Filter";
import Things from "../../../modules/Things/Things";

function ThingsPage({ things }) {
  return (
    <div className={styles["grid-container"]}>
      <Filter />
      <Things things={things} className={styles.main} pagination={false} title="Все вещи" />
    </div>
  );
}

export default ThingsPage;
