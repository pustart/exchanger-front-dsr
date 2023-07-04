import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./OneThingPage.module.css";
import Htag from "../../../elements/Htag/Htag";
import Button from "../../../elements/Button/Button";
import ROLES from "../../../../constants/roles";
import Chip from "../../../elements/Chip/Chip";

function OneThingPage({ id, userRole = ROLES.USER, thing }) {
  const { name, description, address, photo, author, category, exchangeCategory } = thing;
  const router = useRouter();

  return (
    <section className={styles["thing-container"]}>
      <Image
        src={photo || "/images/placeholder.png"}
        width={500}
        height={500}
        alt={name}
        className={styles.img}
      />
      <div className={styles["thing-info"]}>
        <p className={styles.author}>{author} предлагает к обмену</p>
        <div className={styles["title-container"]}>
          <Htag tag="h2" fontWeight="bold" className={styles["thing-title"]}>
            {name}
          </Htag>
          <IconButton aria-label="редактировать вещь" onClick={() => router.push("/")}>
            <EditIcon />
          </IconButton>
        </div>
        <div className={styles["btn-container"]}>
          <Button round="rounded" appearance="contained">
            Обменять
          </Button>
          <Button onClick={() => router.back()} round="rounded" appearance="outlined">
            Назад
          </Button>
          {userRole === ROLES.ADMIN ? (
            <Button round="rounded" appearance="delete">
              Удалить
            </Button>
          ) : null}
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>Контактный телефон</div>
          <div>8-800-555-35-35</div>
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>Категория для обмена</div>
          <div>
            <Chip label={exchangeCategory} size="small" />
          </div>
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>Категория</div>
          <div>
            <Chip appearance="transparent" label={category} size="small" variant="outlined" />
          </div>
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>E-mail</div>
          <div>example@mail.com</div>
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>Адрес</div>
          <div>{address}</div>
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>Описание</div>
          <div>{description}</div>
        </div>
      </div>
    </section>
  );
}

export default OneThingPage;
