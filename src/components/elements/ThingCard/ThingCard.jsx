/* eslint-disable no-unused-vars */
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import Chip from "../Chip/Chip";
import styles from "./ThingCard.module.css";
import Htag from "../Htag/Htag";
import Button from "../Button/Button";
import ROLES from "../../../constants/roles";
import { useDeleteThingMutation } from "../../../store/things/things.api";
import { deleteThing } from "../../../store/things/personalThings.slice";

function ThingCard({ thing }) {
  const { data: session } = useSession();
  const { id, name, description, address, photo, author, authorId, category, exchangeCategory } = thing;
  const user = useSelector(state => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [deleteThingMutation] = useDeleteThingMutation();

  const handleMoreClick = () => {
    router.push(`/things/thing/${id}`);
  };

  const handleDelete = async thingId => {
    try {
      await deleteThingMutation({ id: thingId, token: session.user.accessToken }).unwrap();
      dispatch(deleteThing(thingId));
    } catch (error) {
      console.log("Ошибка удаления вещи:", error);
    }
  };

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
              <Chip appearance="transparent" label={category} size="small" variant="outlined" />
            </li>
            <li className={styles["list-item"]}>
              <span>Категория для обмена: </span>
              <Chip label={exchangeCategory} size="small" />
            </li>
          </ul>
        </div>
      </div>
      <footer className={styles["btn-container"]}>
        <Button appearance="outlined" height="2rem" round="squared" onClick={handleMoreClick}>
          Подробнее
        </Button>
        {authorId === user.id || user.role === ROLES.ADMIN ? (
          <Button
            appearance="delete"
            height="2rem"
            round="squared"
            onClick={() => handleDelete(id)}
            endIcon={<DeleteIcon />}
          >
            Удалить
          </Button>
        ) : null}
      </footer>
    </article>
  );
}

export default ThingCard;
