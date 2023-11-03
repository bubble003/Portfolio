import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>MERN Stack Developer</h3>
              <p>
                I'm a MERN Stack developer along with experience in Next.js and
                building responsive,optimized & high performance sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programmer </h3>
              <p>I have solved 500+ questions on Leetcode and Codeforces.</p>
              <br></br>
              <div className={styles.links}>
                <li>
                  Leetcode :{" "}
                  <a
                    className={styles.link}
                    href="https://leetcode.com/bubble__/"
                  >
                    bubble__
                  </a>
                </li>
                <li>
                  Codeforces :{" "}
                  <a
                    className={styles.link}
                    href="https://codeforces.com/profile/bubble_"
                  >
                    bubble_
                  </a>
                </li>
                <li>
                  Codechef :{" "}
                  <a
                    className={styles.link}
                    href="https://www.codechef.com/users/bubble003"
                  >
                    bubble003
                  </a>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
