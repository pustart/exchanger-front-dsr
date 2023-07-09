/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RegFormStep1.module.css";
import Htag from "../../../elements/Htag/Htag";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import { setEmail, setPassword } from "../../../../store/regForm/regForm.slice";

function RegFormStep1({ className, title, ...props }) {
  const dispatch = useDispatch();
  const email = useSelector(state => state.regForm.email);
  const password = useSelector(state => state.regForm.password);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChangeEmail = e => {
    dispatch(setEmail(e.target.value));
  };

  const handleChangePassword = e => {
    dispatch(setPassword(e.target.value));
  };

  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Пароль и подтверждение пароля не совпадают");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }
    router.push("/registration/step2");
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Шаг первый
        </Htag>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <p className={cn(styles.paragraph, styles["form-description"])}>
          Пожалуйста, заполните данную форму для регистрации
        </p>
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
            type="password"
            name="password"
            id="password"
            required
            minLength={6}
            maxLength={16}
            onChange={handleChangePassword}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="passwordConfirm" className={styles.label}>
            Подтверждение пароля:
          </label>
          <Input
            value={passwordConfirm}
            placeholder="Подтвердите ваш пароль"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
            minLength={6}
            maxLength={16}
            onChange={handlePasswordConfirm}
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

export default RegFormStep1;
