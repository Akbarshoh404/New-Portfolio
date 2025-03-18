import React from "react";

import styles from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p>Telegram</p>
            <p>Instagram</p>
            <p>Github</p>
          </div>

          <div className={styles.right}>© 2025 Ismatov Akbarshokh</div>
        </div>
      </div>
    </>
  );
};

export default Footer;