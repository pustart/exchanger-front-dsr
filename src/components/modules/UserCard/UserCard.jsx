import React from "react";
import cn from "classnames";
// import NextLink from "next/link";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./UserCard.module.css";
import Htag from "../../elements/Htag/Htag";
import Button from "../../elements/Button/Button";

function UserCard({ className, id, birthday, sex, phone, email, countThings, ...props }) {
  return (
    <article className={cn(styles["user-card-wrapper"], className)} {...props}>
      <div className={styles["info-container"]}>
        <Avatar
          alt="Remy Sharp"
          src="/images/default-profile.webp"
          sx={{ width: 124, height: 124 }}
        />
        <div>
          <Htag className={styles.name} tag="h3" fontWeight="medium">
            Артем Пустовалов
          </Htag>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>Дата рождения: {birthday}</li>
            <li className={styles["list-item"]}>Пол: {sex}</li>
            <li className={styles["list-item"]}>Телефон: {phone}</li>
            <li className={styles["list-item"]}>e-mail: {email}</li>
            <li className={styles["list-item"]}>Вещей размещено: {countThings}</li>
          </ul>
        </div>
      </div>
      <div className={styles["btn-wrapper"]}>
        <Button
          height="2.25rem"
          round="squared"
          appearance="delete"
          className={styles["delete-btn"]}
          endIcon={<DeleteIcon />}
        >
          Удалить
        </Button>
        <Button
          height="2.25rem"
          round="squared"
          appearance="outlined"
          className={styles["delete-btn"]}
        >
          К вещам
        </Button>
      </div>
    </article>
  );
}

export default UserCard;