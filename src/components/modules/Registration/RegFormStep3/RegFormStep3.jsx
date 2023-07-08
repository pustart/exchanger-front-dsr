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
            type="text"
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
            onChange={handleChangeBirthday}
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
            onChange={handleChangePhone}
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
