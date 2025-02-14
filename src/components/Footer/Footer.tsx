import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer__text}>&copy; 2025 #VANLIFE</p>
		</footer>
	);
};

export default Footer;
