import React from "react";

// Import components
import { Avatar } from "components";

// Import assets
import logo_beta from "assets/logo_beta.svg";
import messages from "assets/message.svg";

// Import styles
import styles from "./styles.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrap}>
				<img src={logo_beta} />
				<div className={styles.headerActions}>
					<button>Share Resume</button>
					<a className={styles.messagesAct} href="#">
						<img src={messages} />
						<div>Messages</div>
					</a>
					<a href="#">
						<Avatar size={28} round />
						<div>Profile</div>
					</a>
				</div>
			</div>
		</header>
	);
}
