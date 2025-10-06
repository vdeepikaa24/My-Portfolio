import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let’s connect and collaborate!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:vdeepikaa24@gmail.com">vdeepikaa24@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/deepikaa-vijayan-89427031a">
            linkedin.com/in/deepikaa-vijayan-89427031a
          </a>
        </li>
        <li className={styles.link}>
          <img src="/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/DeepikaaVijayan24">github.com/DeepikaaVijayan24</a>
        </li>
      </ul>
    </footer>
  );
};
