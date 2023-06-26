import React from "react";
import Image from "next/image";
import styles from "../src/styles/500.module.css";
import withLayout from '@/src/layouts/layout';

export function Error500() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/500-placeholder.png"
        width={1100}
        height={830}
        alt="Error 500."
        className={styles.img}
      />
    </div>
  );
}

export default withLayout(Error500);
