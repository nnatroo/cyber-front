import React from "react";
import styles from "../modules/HeroSection.module.scss";
import heroImage from "../assets/Hero-Img.png";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.heroSectionWrapper} container`}>
        <div className={styles.heroContentWrapper}>
          <p className={styles.heroFirstLine}>Pro.Beyond.</p>
          <h1 className={styles.heroTitle}>
            iPhone 14 <span>Pro</span>
          </h1>
          <p className={styles.heroThirdLine}>
            Created to change everything for the better. For everyone
          </p>
          <div className={styles.heroBtnWrapper}>
            <button className={styles.whiteBtnLarge}>Shop Now</button>
          </div>
        </div>
        <figure className={styles.heroImgWrapper}>
          <img
            src={heroImage}
            alt="mobile-phone"
            className={styles.heroImg}
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
