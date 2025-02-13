import styles from "./Header.module.scss";
import logo from "../../../assets/vanlife-logo.svg";
import { FC } from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="VanLife logo" className={styles.header__logo} />
      {children}
    </header>

  )
};

export default Header;
