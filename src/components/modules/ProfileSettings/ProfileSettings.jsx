import { React, useState } from "react";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./ProfileSettings.module.css";
import Htag from "../../elements/Htag/Htag";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import { setUser } from "../../../store/users/user.slice";
import { BACKEND_PATH } from "../../../constants/api";

function ProfileSettings({ className, ...props }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const usr = useSelector(state => state.user);
  const [email, setEmail] = useState(usr.email);
  const [phone, setPhone] = useState(usr.phone);
  const [name, setName] = useState(usr.name);
  const [avatar, setAvatar] = useState(usr.photo);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);

  const handleAvatarChange = e => {
    const selectedPhoto = e.target.files[0];
    setIsAvatarChanged(true);
    setAvatar(selectedPhoto);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = new FormData();
      payload.append("name", name);
      payload.append("email", email);
      payload.append("phone", phone);
      payload.append("photoUrl", usr.photo);

      if (isAvatarChanged) {
        payload.append("photo", avatar);
      }

      const response = await axios.patch(`${BACKEND_PATH}/users/${session.user.id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      dispatch(setUser(response.data));
      router.reload();
    } catch (error) {
      console.log("Ошибка при обновлении пользователя:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn(styles["setting-container"], className)} {...props}>
      <div className={styles["title-wrapper"]}>
        <Htag tag="h2" fontWeight="bold" className={styles["main-title"]}>
          Настройки профиля
        </Htag>
      </div>
      <div className={styles["setting-block"]}>
        <Htag tag="h3" fontWeight="bold" className={styles["setting-title"]}>
          Электронная почта
        </Htag>
        <p className={styles["setting-description"]}>
          Электронная почта для получения уведомлений, связи с другими пользователями и
          аутентификации.
        </p>
        <Input
          value={email}
          type="email"
          name="email"
          id="email"
          required
          onChange={e => setEmail(e.target.value)}
          className={styles["setting-input"]}
        />
      </div>
      <div className={styles["setting-block"]}>
        <Htag tag="h3" fontWeight="bold" className={styles["setting-title"]}>
          Телефон
        </Htag>
        <p className={styles["setting-description"]}>
          Другим пользователям будет виден ваш контактный номер телефона для связи с вами.
        </p>
        <Input
          value={phone}
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          type="tel"
          name="phone"
          id="phone"
          required
          onChange={e => setPhone(e.target.value)}
          className={styles["setting-input"]}
        />
      </div>
      <div className={styles["setting-block"]}>
        <Htag tag="h3" fontWeight="bold" className={styles["setting-title"]}>
          Ваше имя
        </Htag>
        <p className={styles["setting-description"]}>
          Имя будет отображаться на вашем профиле и в информации о ваших вещах.
        </p>
        <Input
          value={name}
          type="text"
          name="name"
          id="name"
          required
          onChange={e => setName(e.target.value)}
          className={styles["setting-input"]}
        />
      </div>
      <div className={styles["setting-block"]}>
        <Htag tag="h3" fontWeight="bold" className={styles["setting-title"]}>
          Фото профиля
        </Htag>
        <p className={styles["setting-description"]}>
          Фото будет отображаться на вашем профиле и будет видно только вам.
        </p>
        <Input
          type="file"
          accept="image/jpeg, image/jpeg, image/png"
          name="avatar"
          id="avatar"
          onChange={handleAvatarChange}
          className={styles["setting-input"]}
        />
      </div>
      <div className={styles["btn-container"]}>
        <Button type="submit" round="rounded" appearance="contained">
          Сохранить изменения
        </Button>
      </div>
    </form>
  );
}

export default ProfileSettings;
