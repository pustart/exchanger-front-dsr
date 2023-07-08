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
    router.push("/registration/step2");
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Шаг первый
        </Htag>
        <p className={cn(styles.paragraph, styles["form-description"])}>
          Пожалуйста, заполните данную форму для регистрации
        </p>
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
            value={passwordConfirm}
            placeholder="Подтвердите ваш пароль"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
            onChange={handlePasswordConfirm}
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

export default RegFormStep1;
