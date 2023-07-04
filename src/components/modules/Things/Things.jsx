import React from "react";
import cn from "classnames";
import Pagination from "../../elements/Pagination/Pagination";
import styles from "./Things.module.css";
import ThingCard from "../../elements/ThingCard/ThingCard";
import { THINGS } from "../../../constants/mocks";
import Htag from "../../elements/Htag/Htag";
import ROLES from "../../../constants/roles";

function Things({ className, title, thingsAmount = 0, userRole = ROLES.USER }) {
  return (
    <div className={cn(styles["things-wrapper"], className)}>
      <div className={styles["title-wrapper"]}>
        <Htag tag="h2" fontWeight="bold" className={styles.title}>
          {title}
        </Htag>
        <div className={styles["things-counter"]}>Вещей найдено: {thingsAmount}</div>
      </div>
      <div className={styles["things-container"]}>
        {THINGS.map(thing => (
          <ThingCard key={thing.id} thing={thing} userRole={userRole} />
        ))}
      </div>
      <Pagination count={10} />
    </div>
  );
}

export default Things;
