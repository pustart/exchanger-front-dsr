import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../src/components/elements/Button/Button";
import styles from "../src/styles/404.module.css";
import withLayout from "../src/layouts/Layout";

export function Error404() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Image
        src="/images/404-placeholder.png"
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

export default withLayout(Error404);
