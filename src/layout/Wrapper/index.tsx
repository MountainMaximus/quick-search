import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";
import { Preloader } from "../Preloader";
import styles from "./Wrapper.module.scss";

export const Wrapper: React.FC = () => {
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 2300);
  }, []);
  return (
    <div className={styles.wrapper}>
      {isLoad && <Preloader mask={true} />}
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
