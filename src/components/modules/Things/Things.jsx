import React from "react";
import cn from "classnames";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Pagination from "../../elements/Pagination/Pagination";
import styles from "./Things.module.css";
import ThingCard from "../../elements/ThingCard/ThingCard";
import Htag from "../../elements/Htag/Htag";
import ROLES from "../../../constants/roles";

function Things({ className, pagination = true, title, things, userRole = ROLES.USER }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div className={cn(styles["things-wrapper"], className)}>
      <div className={styles["title-wrapper"]}>
        <Htag tag="h2" fontWeight="bold" className={styles.title}>
          {title}
        </Htag>
        <div className={styles["things-counter"]}>Вещей найдено: {things.length}</div>
      </div>
      {things.length > 0 ? (
        <ul ref={animationParent} className={styles["things-container"]}>
          {things.map(thing => (
            <li key={thing.id}>
              <ThingCard key={thing.id} thing={thing} userRole={userRole} />
            </li>
          ))}
        </ul>
      ) : (
        <Htag tag="h3" fontWeight="medium" className={styles.placeholder}>
          Здесь пока ничего нет
        </Htag>
      )}
      {pagination && things.length !== 0 ? <Pagination count={10} /> : null}
    </div>
  );
}

export default Things;
