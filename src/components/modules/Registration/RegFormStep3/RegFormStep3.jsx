/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signIn, useSession } from "next-auth/react";
import styles from "./RegFormStep3.module.css";
import Htag from "../../../elements/Htag/Htag";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import {
  setEmail,
  setPassword,
  setName,
  setSurname,
  setPhone,
  setBirthday,
} from "../../../../store/regForm/regForm.slice";
import restClient from "../../../../api/RestClient";
import { BACKEND_PATH } from "../../../../constants/api";

function RegFormStep3({ className, title, ...props }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");

  const email = useSelector(state => state.regForm.email);
  const password = useSelector(state => state.regForm.password);
  const name = useSelector(state => state.regForm.name);
  const surname = useSelector(state => state.regForm.surname);
  const phone = useSelector(state => state.regForm.phone);
  const photo = useSelector(state => state.regForm.photo);
  const birthday = useSelector(state => state.regForm.birthday);

  const handleChangeEmail = e => {
    dispatch(setEmail(e.target.value));
  };

  const handleChangePassword = e => {
    dispatch(setPassword(e.target.value));
  };

  const handleChangeName = e => {
    dispatch(setName(e.target.value));
  };

  const handleChangeSurname = e => {
    dispatch(setSurname(e.target.value));
  };

  const handleChangePhone = e => {
    dispatch(setPhone(e.target.value));
  };

  const handleChangeBirthday = e => {
    dispatch(setBirthday(e.target.value));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!password || !email || !name || !surname || !phone || !birthday) {
      setError("Пожалуйста вернитесь назад и заполните все данные");
      return;
    }

    const usrData = {
      name: `${name} ${surname}`,
      password,
      email,
      phone,
      birthday,
      photo: null,
    };
    const res = await restClient.post(`${BACKEND_PATH}/auth/registration`, usrData);
    const data = await res.data;
    if (data) {
      signIn("credentials", { callbackUrl: "/", email, password });
    } else {
      router.push("/registration/step1");
    }
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Ура, вы почти у цели!
        </Htag>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <p className={cn(styles.paragraph, styles["form-description"])}>
          Проверьте правильность введенных данных
        </p>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="name" className={styles.label}>
            Имя:
          </label>
          <Input
            value={name}
            placeholder="Введите ваше имя"
            type="text"
            name="name"
            id="name"
            required
            readOnly
            onChange={handleChangeName}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="surname" className={styles.label}>
            Фамилия:
          </label>
          <Input
            value={surname}
            placeholder="Введите вашу фамилию"
            type="text"
            name="surname"
            id="surname"
            required
            readOnly
            onChange={handleChangeSurname}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="email" className={styles.label}>
            E-mail:
          </label>
          <Input
            value={email}
            placeholder="Введите ваш e-mail"
            type="email"
            name="email"
            id="email"
            required
            readOnly
            onChange={handleChangeEmail}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password" className={styles.label}>
            Пароль:
          </label>
          <Input
            value={password}
            placeholder="Введите ваш пароль"
            type="text"
            name="password"
            id="password"
            required
            readOnly
            onChange={handleChangePassword}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="birthday" className={styles.label}>
            Дата рождения:
          </label>
          <Input
            value={birthday}
            type="date"
            placeholder="Выберете аватарку"
            name="birthday"
            id="birthday"
            readOnly
            onChange={handleChangeBirthday}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="birthday" className={styles.label}>
            Номер телефона:
          </label>
          <Input
            value={phone}
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            placeholder="Введите ваш номер телефона"
            type="tel"
            name="phone"
            id="phone"
            required
            readOnly
            onChange={handleChangePhone}
            className={styles.input}
          />
        </div>
        <div className={styles["btn-container"]}>
          <Button
            round="squared"
            appearance="outlined"
            height="3rem"
            type="button"
            className={styles["back-btn"]}
            onClick={() => router.back()}
          >
            Редактировать
          </Button>
          <Button
            round="squared"
            appearance="contained"
            height="3rem"
            type="submit"
            className={styles["login-btn"]}
          >
            Зарегестрироваться
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
