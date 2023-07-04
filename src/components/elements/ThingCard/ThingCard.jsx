/* eslint-disable no-unused-vars */
import React from "react";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./ThingCard.module.css";
import Htag from "../Htag/Htag";
import Button from "../Button/Button";
import ROLES from "../../../constants/roles";

const StyledChip = styled(Chip)(({ appearance }) => ({
  color: "var(--accent-strong-up)",
  backgroundColor: appearance === "transparent" ? "none" : "var(--complement-strong)",
  fontSize: "0.75rem",
  textTransform: "none",
}));

function ThingCard({ thing, userRole = ROLES.USER }) {
  const { id, name, description, address, photo, author, category, exchangeCategory } = thing;

  return (
    <article className={styles["card-container"]}>
      <div>
        <Image
          priority
          src={photo || "/images/placeholder.png"}
          width={264}
          height={264}
          alt={name}
          className={styles.img}
        />
        <div className={styles["description-container"]}>
          <Htag tag="h3" fontWeight="bold" className={styles["thing-title"]}>
            {name}
          </Htag>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>Автор: {author}</li>
            <li className={styles["list-item"]}>
              <span>Категория: </span>
              <StyledChip
                appearance="transparent"
                label={category}
                size="small"
                variant="outlined"
              />
            </li>
            <li className={styles["list-item"]}>
              <span>Категория для обмена: </span>
              <StyledChip label={exchangeCategory} size="small" />
            </li>
          </ul>
        </div>
      </div>
      <footer className={styles["btn-container"]}>
        <Button appearance="outlined" height="2rem" round="squared">
          Подробнее
        </Button>
        {userRole === ROLES.ADMIN ? (
          <Button appearance="delete" height="2rem" round="squared" endIcon={<DeleteIcon />}>
            Удалить
          </Button>
        ) : null}
      </footer>
    </article>
  );
}

export default ThingCard;
