/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./OneThingPage.module.css";
import Htag from "../../../elements/Htag/Htag";
import Button from "../../../elements/Button/Button";
import ROLES from "../../../../constants/roles";
import Chip from "../../../elements/Chip/Chip";
import { BACKEND_PATH } from "../../../../constants/api";
import restClient from "../../../../api/RestClient";

function OneThingPage({ thing, userThings = [] }) {
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
  const [thingToExchange, setThingToExchange] = useState("");
  const router = useRouter();

  const handleChangeThing = e => {
    const selectedThing = e.target.value;
    setThingToExchange(selectedThing);
  };

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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await restClient.del(
        `${BACKEND_PATH}/things/exchange/${id}/${thingToExchange}`,
        session.user.accessToken
      );
      router.back();
    } catch (error) {
      console.log("Ошибка обмена вещи:", error);
    }
  };

  return (
    <section className={styles["thing-container"]}>
      <Image
        src={photo ? `${BACKEND_PATH}${photo}` : "/images/placeholder.png"}
        width={500}
        height={500}
        alt={name}
        className={styles.img}
      />
      <form onSubmit={handleSubmit} className={styles["thing-info"]}>
        <p className={styles.author}>{author} предлагает к обмену</p>
        <div className={styles["title-container"]}>
          <Htag tag="h2" fontWeight="bold" className={styles["thing-title"]}>
            {name}
          </Htag>
          {authorId === user.id ? (
            <IconButton
              aria-label="редактировать вещь"
              onClick={() => router.push(`/things/edit/${id}`)}
            >
              <EditIcon />
            </IconButton>
          ) : null}
        </div>
        {authorId === user.id || user.role === ROLES.ADMIN ? null : (
          <div className={styles["input-wrapper"]}>
            <label htmlFor="exchangeCategory" className={styles.label}>
              Выберите свою вещь, которую будете обменивать:
            </label>
            <Select
              value={thingToExchange}
              onChange={handleChangeThing}
              className={styles.select}
              displayEmpty
              required
              name="thing"
              id="thing"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              {userThings.map(curThing => {
                if (
                  curThing.categoryId === thing.exchangeCategoryId &&
                  curThing.exchangeCategoryId === thing.categoryId
                ) {
                  return (
                    <MenuItem key={curThing.id} value={curThing.id}>
                      {curThing.name}
                    </MenuItem>
                  );
                }
                return null;
              })}
            </Select>
          </div>
        )}
        <div className={styles["btn-container"]}>
          {authorId === user.id || user.role === ROLES.ADMIN ? null : (
            <Button type="submit" round="rounded" appearance="contained">
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
      </form>
    </section>
  );
}

export default OneThingPage;
