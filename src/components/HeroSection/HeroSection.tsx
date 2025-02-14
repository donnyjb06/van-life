import React from "react";
import styles from "./HeroSection.module.scss";
import Button from "@components/Button/Button";

interface HeroSectionProps {
  mainTitle: string;
  subTitle: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle,
  subTitle,
  ctaText,
}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSection__container}>
        <h1 className={styles.heroSection__title}>{mainTitle}</h1>
        <p className={styles.heroSection__subtitle}>{subTitle}</p>
        <Button className={styles.heroSection__cta}>{ctaText}</Button>
      </div>
      <div className={styles.heroSection__overlay}></div>
    </section>
  );
};

export default HeroSection;
