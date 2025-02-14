import { FC } from "react";
import styles from "./Card.module.scss";
import Button from "@components/Button/Button";

interface CardProps {
  topText: string;
  bottomText: string;
  btnClass: string;
  btnText: string;
  btnOnClick: () => void;
}

const Card: FC<CardProps> = ({ topText, bottomText, btnClass, btnText, btnOnClick }) => {
  return (
    <div className={styles.card}>
      <p className={styles.card__top}>{topText}</p>
      <p className={styles.card__bottom}>{bottomText}</p>
      <Button className={styles.card__button} onClick={btnOnClick}>{btnText}</Button>
    </div>
  )
}

export default Card;
