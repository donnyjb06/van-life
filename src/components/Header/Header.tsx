import styles from "./Header.module.scss";
import { FC } from "react";


interface HeaderProps {
  children: React.ReactNode;
  logo?: string;
}

const Header: FC<HeaderProps> = ({ children, logo }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="VanLife logo" className={styles.header__logo} />
      {children}
    </header>

  )
};

export default Header;
