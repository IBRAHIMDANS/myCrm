import styles from "../styles/Home.module.css";
import withAuth from "../hooks/withAuth";
import { DesktopView, MobileView } from "../components";
import isDesktop from "../hooks/isDesktop";
import React from "react";
import SendMessageBtn from "../components/SendMessage";

const Home = () => {
  return (
    <div className={styles.container}>
      <SendMessageBtn/>

      {isDesktop() ?
        <DesktopView/>
        :
        <MobileView/>
      }
    </div>
  );
};
export default withAuth(Home);
