/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import styles from "./AddThingForm.module.css";
import Htag from "../../elements/Htag/Htag";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import restClient from "../../../api/RestClient";
import { BACKEND_PATH } from "../../../constants/api";

function AddThingForm({ className, title, ...props }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const categories = useSelector(state => state.categories);
  const [exchangeCategory, setExchangeCategory] = useState("");
  const [thingCategory, setThingCategory] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = e => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeAddress = e => {
    setAddress(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleExchangeCategory = e => {
    const selectedExchangeCategory = e.target.value;
    setExchangeCategory(selectedExchangeCategory);
  };

  const handleChangeCategory = e => {
    const selectedCategory = e.target.value;
    setThingCategory(selectedCategory);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = new FormData();
      payload.append("name", name);
      payload.append("address", address);
      payload.append("description", description);
      payload.append("authorId", session.user.id);
      payload.append("categoryId", thingCategory);
      payload.append("exchangeCategoryId", exchangeCategory);
      if (photo) {
        payload.append("photo", photo);
      }

      const response = await axios.post(`${BACKEND_PATH}/things`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      const { data } = response;
      router.push("/profile");
    } catch (error) {
      console.log("Ошибка при добавлении вещи:", error);
    }
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
          <label htmlFor="name" className={styles.label}>
            Название:
          </label>
          <Input
            value={name}
            placeholder="Введите название вещи"
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChangeName}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="address" className={styles.label}>
            Адрес:
          </label>
          <Input
            value={address}
            placeholder="Введите адрес"
            type="text"
            name="address"
            id="address"
            required
            onChange={handleChangeAddress}
            className={styles.input}
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="category" className={styles.label}>
            Категория вашей вещи:
          </label>
          <Select
            value={thingCategory}
            onChange={handleChangeCategory}
            className={styles.select}
            displayEmpty
            required
            name="category"
            id="category"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {categories.map(curCategory => (
              <MenuItem key={curCategory.id} value={curCategory.id}>
                {curCategory.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="exchangeCategory" className={styles.label}>
            Категория вещи, которую вы бы хотели получить:
          </label>
          <Select
            value={exchangeCategory}
            onChange={handleExchangeCategory}
            className={styles.select}
            displayEmpty
            required
            name="exchangeCategory"
            id="exchangeCategory"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {categories.map(curCategory => (
              <MenuItem key={curCategory.id} value={curCategory.id}>
                {curCategory.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="avatar" className={styles.label}>
            Фото вещи (опционально):
          </label>
          <Input
            type="file"
            placeholder="Выберете фото вещи"
            accept="image/jpeg, image/jpg, image/png"
            name="photo"
            id="photo"
            onChange={handlePhotoChange}
            className={styles.input}
          />
        </div>

        <div className={styles["input-wrapper"]}>
          <label htmlFor="description" className={styles.label}>
            Описание:
          </label>
          <textarea
            placeholder="Приудмайте описание"
            onChange={handleChangeDescription}
            value={description}
            id="description"
            name="description"
            rows="5"
            cols="65"
            required
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

export default AddThingForm;
