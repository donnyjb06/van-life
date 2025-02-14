import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FC } from "react";


interface HeaderProps {
  children: React.ReactNode;
  logo?: string;
}

const Header: FC<HeaderProps> = ({ children, logo }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="VanLife logo" className={styles.header__logo} />
      </Link>
      {children}
    </header>

  )
};

export default Header;
