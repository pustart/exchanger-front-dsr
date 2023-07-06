import { React, useState } from "react";
import cn from "classnames";
import styles from "./ProfileSettings.module.css";
import Htag from "../../elements/Htag/Htag";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";

function ProfileSettings({ className, ...props }) {
  const [email, setEmail] = useState("example@gmail.com");
  const [phone, setPhone] = useState("8-800-555-35-35");
  const [name, setName] = useState("Артем");
  const [surname, setSurname] = useState("Пустовалов");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
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
          Ваша фамилия
        </Htag>
        <p className={styles["setting-description"]}>
          Фамилия будет отображаться на вашем профиле и в информации о ваших вещах.
        </p>
        <Input
          value={surname}
          type="text"
          name="surname"
          id="surname"
          required
          onChange={e => setSurname(e.target.value)}
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
          value={avatar}
          type="file"
          accept="image/jpeg, image/png"
          name="avatar"
          id="avatar"
          onChange={e => setAvatar(e.target.value)}
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
