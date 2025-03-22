// Footer.jsx
import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {!isMobile && (
          <div className={styles.left}>
            <p>
              <a
                href="https://t.me/MrAkbarshoh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/mr.akbarshokh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Akbarshoh404"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/akbarshoh-ismatov-4179b52a8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        )}
        <div className={styles.right}>
          <a href="mailto:your.email@example.com" rel="noopener noreferrer">
            © 2025 Ismatov Akbarshokh
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
