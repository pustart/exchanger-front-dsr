import React from "react";
import Header from "../../components/modules/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import styles from "./DefaultLayout.module.css";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.default}>{children}</div>
      <Footer />
    </>
  );
}

export const withDefaultLayout = Component =>
  function withLayoutComponent(props) {
    return (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    );
  };

export default withDefaultLayout;
