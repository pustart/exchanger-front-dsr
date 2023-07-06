import { React, useState } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import styles from "./RegFormStep3.module.css";
import Htag from "../../../elements/Htag/Htag";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";

function RegFormStep3({ className, title, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const router = useRouter();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeSurname = e => {
    setSurname(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    router.push("/registration/step3");
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Ура, вы почти у цели!
        </Htag>
        <p className={cn(styles.paragraph, styles["form-description"])}>
          Проверьте правильность введенных данных
        </p>
        <div className={styles["input-wrapper"]}>
          <Input
            value={name}
            placeholder="Введите ваше имя"
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChangeName}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <Input
            value={surname}
            placeholder="Введите вашу фамилию"
            type="text"
            name="surname"
            id="surname"
            required
            onChange={handleChangeSurname}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <Input
            value={email}
            placeholder="Введите ваш e-mail"
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChangeEmail}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <Input
            value={password}
            placeholder="Введите ваш пароль"
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChangePassword}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <Input
            value={birthday}
            type="date"
            placeholder="Выберете аватарку"
            name="birthday"
            id="birthday"
            onChange={e => setBirthday(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <Input
            value={phone}
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            placeholder="Введите ваш номер телефона"
            type="tel"
            name="phone"
            id="phone"
            required
            onChange={e => setPhone(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles["btn-container"]}>
          <Button
            round="squared"
            appearance="contained"
            height="3rem"
            type="submit"
            className={styles["login-btn"]}
          >
            Подтвердить и зарегестрироваться
          </Button>
        </div>
        <p className={cn(styles.paragraph, styles["link-wrapper"])}>
          <NextLink href="/login" className={styles.link}>
            Уже есть аккаунт? Войдите
          </NextLink>
        </p>
      </form>
    </div>
  );
}

export default RegFormStep3;
