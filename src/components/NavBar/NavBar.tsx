import React, { FC } from 'react';
import styles from "./NavBar.module.scss";
interface NavBarProps {
    children: React.ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navBar__list}>
              {children}
            </ul>
        </nav>
    );
};

export type { NavBarProps };
export default NavBar;
