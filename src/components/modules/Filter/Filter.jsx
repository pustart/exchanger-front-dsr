import React from "react";
import cn from "classnames";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styles from "./Filter.module.css";
import Htag from "../../elements/Htag/Htag";
import { CATEGORIES } from "../../../constants/mocks";

function Filter({ className, ...props }) {
  const [category, setCategory] = React.useState("");
  const [exchangeCategory, setExchangeCategory] = React.useState("");
  const [sort, setSort] = React.useState("");

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  const handleExchangeCategory = event => {
    setExchangeCategory(event.target.value);
  };

  const handleChangeSort = event => {
    setSort(event.target.value);
  };

  return (
    <aside className={cn(styles["filter-container"], className)} {...props}>
      <Htag className={styles["main-title"]} tag="h2" fontWeight="bold">
        Фильтры
      </Htag>
      <div className={styles["filter-block-wrapper"]}>
        <Htag className={styles["filter-titles"]} tag="h3" fontWeight="bold">
          Категория для обмена
        </Htag>
        <Select
          value={exchangeCategory}
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
      <div className={styles["filter-block-wrapper"]}>
        <Htag className={styles["filter-titles"]} tag="h3" fontWeight="bold">
          Категория вещи
        </Htag>
        <Select
          value={category}
          onChange={handleChangeCategory}
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
      <div className={styles["filter-block-wrapper"]}>
        <Htag className={styles["filter-titles"]} tag="h3" fontWeight="bold">
          Сортировать
        </Htag>
        <Select
          value={sort}
          onChange={handleChangeSort}
          className={styles.select}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Не выбрано</em>
          </MenuItem>
          <MenuItem value="new">Сначала новые</MenuItem>
          <MenuItem value="old">Сначала старые</MenuItem>
        </Select>
      </div>
    </aside>
  );
}

export default Filter;
