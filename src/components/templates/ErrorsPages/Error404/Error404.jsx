import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../../../elements/Button/Button";
import styles from "./Error404.module.css";

export function Error404() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Image
        priority
        src="/images/404-placeholder.webp"
        width={1060}
        height={940}
        alt="Error 404."
        className={styles.img}
      />
      <Button
        appearance="outlined"
        onClick={() => {
          goToHome();
        }}
      >
        Вернуться на главную
      </Button>
    </div>
  );
}

export default Error404;
