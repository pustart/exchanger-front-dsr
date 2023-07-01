import React from "react";
import Image from "next/image";
import styles from "./Error500.module.css";

export function Error500() {
  return (
    <div className={styles.container}>
      <Image
        priority
        src="/images/500-placeholder.webp"
        width={1100}
        height={830}
        alt="Error 500."
        className={styles.img}
      />
    </div>
  );
}

export default Error500;
