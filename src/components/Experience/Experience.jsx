import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";



export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
          skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img 
                  src={ skill.imageSrc }
                   alt={skill.title}
                    />
                </div>
                <p>
                    {skill.title}
                    </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};