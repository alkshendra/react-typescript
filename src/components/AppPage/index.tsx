import React from "react";

// Import components
import Header from "./Header";

// Import styles
import styles from "./styles.module.scss";

const AppPage: React.FC<AppPageProps> = ({ children }) => (
	<div>
		<Header />
		<main className={styles.bodyWrap}>{children}</main>
	</div>
);

interface AppPageProps {
	children: any;
}

export default AppPage;
