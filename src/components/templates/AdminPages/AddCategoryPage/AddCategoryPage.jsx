import { React, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../../elements/Button/Button";
import Htag from "../../../elements/Htag/Htag";
import Input from "../../../elements/Input/Input";
import styles from "./AddCategoryPage.module.css";

function AddCategoryPage() {
  const textLength = 25;
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    router.push("/categories");
  };

  const handleInputChange = e => {
    setText(e.target.value);
  };

  return (
    <div className={styles["form-container"]}>
      <Htag tag="h2" fontWeight="medium" className={styles.title}>
        Название
      </Htag>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <Input
            className={styles["form-text-input"]}
            type="text"
            id="inputText"
            onChange={handleInputChange}
            maxLength={textLength}
            placeholder="Новая категория"
            required
            value={text}
          />
          <div className={styles["char-count"]}>
            Осталось символов: <span id="charCount">{textLength - text.length}</span>
          </div>
        </div>
        <div className={styles["form-actions"]}>
          <Button
            height="2.25rem"
            round="square"
            appearance="outlined"
            type="button"
            onClick={() => router.back()}
          >
            Назад
          </Button>
          <Button height="2.25rem" round="square" type="submit">
            Добавить категорию
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddCategoryPage;
