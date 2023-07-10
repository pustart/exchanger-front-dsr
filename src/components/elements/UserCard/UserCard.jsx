import React from "react";
import cn from "classnames";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import styles from "./UserCard.module.css";
import Htag from "../Htag/Htag";
import Button from "../Button/Button";
import { deleteUser } from "../../../store/users/allUsers.slice";
import { useDeleteUsersMutation } from "../../../store/users/user.api";
import dateParse from "../../../utils/dateParser";
import { BACKEND_PATH } from "../../../constants/api";

function UserCard({ userInfo, className, ...props }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const [deleteUsersMutation] = useDeleteUsersMutation();
  const { id, name, surname, email, phone, birthday, photo, thingsCount } = userInfo;

  const handleDelete = async userId => {
    try {
      await deleteUsersMutation({ id: userId, token: session.user.accessToken }).unwrap();
      dispatch(deleteUser(userId));
    } catch (error) {
      console.log("Ошибка удаления категории:", error);
    }
  };

  return (
    <article className={cn(styles["user-card-wrapper"], className)} {...props}>
      <div className={styles["info-container"]}>
        <Avatar
          alt={[name, " ", surname]}
          src={photo ? `${BACKEND_PATH}${photo}` : "/images/default-profile.webp"}
          sx={{ width: 124, height: 124 }}
        />
        <div>
          <Htag className={styles.name} tag="h3" fontWeight="medium">
            {[name, " ", surname]}
          </Htag>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>Дата рождения: {dateParse(birthday)}</li>
            <li className={styles["list-item"]}>Телефон: {phone}</li>
            <li className={styles["list-item"]}>e-mail: {email}</li>
            <li className={styles["list-item"]}>Вещей размещено: {thingsCount}</li>
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
          onClick={() => handleDelete(id)}
        >
          Удалить
        </Button>
        {/* <Button
          height="2.25rem"
          round="squared"
          appearance="outlined"
          className={styles["delete-btn"]}
        >
          К вещам
        </Button> */}
      </div>
    </article>
  );
}

export default UserCard;
