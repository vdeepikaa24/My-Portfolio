import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepikaa Vijayan</h1>
        <p className={styles.description}>
          Aspiring Full Stack Developer exploring React, Node.js, and AWS,
          building responsive, scalable web applications while continuously
          learning modern web technologies.
        </p>
        <a href="mailto:vdeepikaa24@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src="/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
