import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import styles from "./NavBar.module.scss";

interface NavBarLinkProps {
	children: React.ReactNode;
	href: string;
}

const NavBarLink: FC<NavBarLinkProps> = ({ children, href }) => {
	return (
		<li className={styles.navBar__listItem}>
			<NavLink
				to={href}
				className={({ isActive }) =>
					`${styles.navBar__link} ${isActive ? styles.navBar__link_active : ""}`
				}
			>
				{children}
			</NavLink>
		</li>
	);
};

export default NavBarLink;
