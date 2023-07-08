import { React, useState } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import styles from "./LoginForm.module.css";
import Htag from "../../elements/Htag/Htag";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";

function LoginForm({ className, title, ...props }) {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    signIn("credentials", { callbackUrl: "/", email, password });
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form autoComplete="on" onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Авторизируйтесь
        </Htag>
        <p className={cn(styles.paragraph, styles["form-description"])}>
          Пожалуйста, войдите, используя реквизиты учетной записи
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
        <Button
          round="squared"
          appearance="contained"
          height="3rem"
          type="submit"
          className={styles["login-btn"]}
        >
          Авторизироваться
        </Button>
        <p className={cn(styles.paragraph, styles["link-wrapper"])}>
          <NextLink href="/registration/step1" className={styles.link}>
            Еще нет аккаунта? Зарегестрируйтесь
          </NextLink>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
