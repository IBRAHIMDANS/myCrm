import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ibrahimdans"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with&nbsp;❤️&nbsp;&nbsp; by&nbsp;<b>Ibrahima</b>
      </a>
    </footer>
  );
};

export default Footer;
