import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {!isMobile && (
          <div className={styles.left}>
            <p>Telegram</p>
            <p>Instagram</p>
            <p>Github</p>
          </div>
        )}
        <div className={styles.right}>© 2025 Ismatov Akbarshokh</div>
      </div>
    </div>
  );
};

export default Footer;
