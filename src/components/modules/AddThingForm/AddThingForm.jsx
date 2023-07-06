/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styles from "./AddThingForm.module.css";
import Htag from "../../elements/Htag/Htag";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import { CATEGORIES } from "../../../constants/mocks";

function RegFormStep1({ className, title, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [exchangeCategory, setExchangeCategory] = useState("");
  const router = useRouter();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
  };

  const handleExchangeCategory = event => {
    setExchangeCategory(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    router.push("/registration/step2");
  };

  return (
    <div className={cn(styles["login-wrapper"], className)} {...props}>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <Htag tag="h3" fontWeight="medium" className={styles["form-title"]}>
          Описание вещи
        </Htag>
        <p className={cn(styles.paragraph, styles["form-description"])}>
          Заполните все поля, чтобы успешно опубликовать вашу вещь
        </p>
        <div className={styles["input-wrapper"]}>
          <label for="email">Название</label>
          <Input
            value={email}
            placeholder="Введите название вещи"
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
            placeholder="Введите адрес"
            type="text"
            name="password"
            id="password"
            required
            onChange={handleChangePassword}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <Select
            value=""
            onChange={handleExchangeCategory}
            className={styles.select}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {CATEGORIES.map(curCategory => (
              <MenuItem key={curCategory.id} value={curCategory.name}>
                {curCategory.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles["input-wrapper"]}>
          <Select
            value=""
            onChange={handleExchangeCategory}
            className={styles.select}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {CATEGORIES.map(curCategory => (
              <MenuItem key={curCategory.id} value={curCategory.name}>
                {curCategory.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles["input-wrapper"]}>
          <textarea
            placeholder="Приудмайте описание"
            id="story"
            name="story"
            rows="5"
            cols="55"
            className={styles.description}
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
            Опубликовать
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegFormStep1;
