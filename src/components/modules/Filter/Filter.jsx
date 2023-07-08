import { React, useState, useEffect } from "react";
import cn from "classnames";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import styles from "./Filter.module.css";
import Htag from "../../elements/Htag/Htag";
import { useGetCategoriesQuery } from "../../../store/categories/category.api";
import { setCategory, setExchangeCategory, setSort } from "../../../store/filter/filter.slice";

function Filter({ className, ...props }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const category = useSelector(state => state.filter.category);
  const exchangeCategory = useSelector(state => state.filter.exchangeCategory);
  const sort = useSelector(state => state.filter.sort);
  const categories = useSelector(state => state.categories);
  const categoriesData = useGetCategoriesQuery(session?.user?.accessToken);

  const handleChangeCategory = e => {
    e.preventDefault();
    dispatch(setCategory(e.target.value));
  };

  const handleExchangeCategory = e => {
    e.preventDefault();
    dispatch(setExchangeCategory(e.target.value));
  };

  const handleChangeSort = e => {
    e.preventDefault();
    dispatch(setSort(e.target.value));
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
          {categories.map(curCategory => (
            <MenuItem key={curCategory.id} value={curCategory.id}>
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
          {categories.map(curCategory => (
            <MenuItem key={curCategory.id} value={curCategory.id}>
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
