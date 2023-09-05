import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Aditya <br />
          Sonkusare
        </h1>
        <p className={styles.description}>
          I'm a Frontend developer with experience in tech <br /> stack: 
          React.js, Next.js, Firebase and MongoDB.
        </p>
        <a
          href="mailto:adityasonkusare17@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/profile.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
