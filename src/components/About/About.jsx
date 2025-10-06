import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
     <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
            src="/about/aboutImage.png"
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src="/about/cursorIcon.png"
                    alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            Emerging frontend developer, continuously learning and crafting responsive, optimized web experiences.
                        </p>
                    </div>
                </li>
                 <li className={styles.aboutItem}>
                    <img 
                    src="/about/serverIcon.png"
                    alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            Growing expertise in designing responsive and optimized back-end systems and APIs.
                        </p>
                    </div>
                </li>
                 <li className={styles.aboutItem}>
                    <img 
                    src="/about/uiIcon.png"
                    alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                           Building skills in creating landing pages and developing design systems.
                           </p>
                    </div>
                </li>
            </ul>
        </div>

     </section>
  );
};