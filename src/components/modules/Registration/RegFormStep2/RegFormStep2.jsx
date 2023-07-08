import { React, useState } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RegFormStep2.module.css";
import Htag from "../../../elements/Htag/Htag";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import {
  setName,
  setSurname,
  setPhoto,
  setPhone,
  setBirthday,
} from "../../../../store/regForm/regForm.slice";

function RegFormStep2({ className, title, ...props }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const name = useSelector(state => state.regForm.name);
  const surname = useSelector(state => state.regForm.surname);
  const avatar = useSelector(state => state.regForm.photo);
  const phone = useSelector(state => state.regForm.phone);
  const birthday = useSelector(state => state.regForm.birthday);

  const handleChangeName = e => {
    dispatch(setName(e.target.value));
  };

  const handleChangeSurname = e => {
    dispatch(setSurname(e.target.value));
  };

  const handleChangeAvatar = e => {
    dispatch(setPhoto(e.target.value));
  };

  const handleChangePhone = e => {
    dispatch(setPhone(e.target.value));
  };

  const handleChangeBirthday = e => {
    dispatch(setBirthday(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    router.push("/registration/step3");
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Шаг второй
        </Htag>
        <p className={cn(styles.paragraph, styles["form-description"])}>Остался всего один шаг!</p>
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
            value={birthday}
            type="date"
            placeholder="Выберете аватарку"
            name="birthday"
            id="birthday"
            required
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
        <div className={styles["input-wrapper"]}>
          <Input
            value={avatar}
            type="file"
            placeholder="Выберете аватарку"
            accept="image/jpeg, image/png"
            name="avatar"
            id="avatar"
            onChange={handleChangeAvatar}
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
            Назад
          </Button>
          <Button
            round="squared"
            appearance="contained"
            height="3rem"
            type="submit"
            className={styles["login-btn"]}
          >
            Далее
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

export default RegFormStep2;
