import styles from "../styles/Home.module.css";
import withAuth from "../hooks/withAuth";
import { DesktopView, MobileView, PopoverButton } from "../components";
import isDesktop from "../hooks/isDesktop";
import React from "react";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <div className={styles.container}>
      <PopoverButton label={"Envoyé un Message"} />
      {isDesktop() ?
        <DesktopView/>
        :
        <MobileView/>
      }
    </div>
  );
};
export default withAuth(Home);
