import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "simple" | "luxury" | "rugged";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, className }) => {
  return (
    <button className={classNames(styles.button, styles[`button--${variant}`], className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
