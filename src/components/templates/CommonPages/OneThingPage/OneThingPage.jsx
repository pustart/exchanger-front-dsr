import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import styles from "./OneThingPage.module.css";
import Htag from "../../../elements/Htag/Htag";
import Button from "../../../elements/Button/Button";
import ROLES from "../../../../constants/roles";
import Chip from "../../../elements/Chip/Chip";
import { BACKEND_PATH } from "../../../../constants/api";
import restClient from "../../../../api/RestClient";

function OneThingPage({ thing }) {
  const { data: session } = useSession();
  const user = useSelector(state => state.user);
  const {
    id,
    name,
    description,
    address,
    photo,
    author,
    authorId,
    phone,
    category,
    exchangeCategory,
  } = thing;
  const router = useRouter();

  const handleDelete = async thingId => {
    try {
      const res = await restClient.del(
        `${BACKEND_PATH}/things/${thingId}`,
        session.user.accessToken
      );
      router.back();
    } catch (error) {
      console.log("Ошибка удаления вещи:", error);
    }
  };

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
          {authorId === user.id ? (
            <IconButton aria-label="редактировать вещь" onClick={() => router.push("/")}>
              <EditIcon />
            </IconButton>
          ) : null}
        </div>
        <div className={styles["btn-container"]}>
          {authorId === user.id ? null : (
            <Button round="rounded" appearance="contained">
              Обменять
            </Button>
          )}
          {authorId === user.id || user.role === ROLES.ADMIN ? (
            <Button round="rounded" appearance="delete" onClick={() => handleDelete(id)}>
              Удалить
            </Button>
          ) : null}
          <Button onClick={() => router.back()} round="rounded" appearance="outlined">
            Назад
          </Button>
        </div>
        <div className={styles["info-block"]}>
          <div className={styles["info-title"]}>Контактный телефон</div>
          <div>{phone}</div>
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
