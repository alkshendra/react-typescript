import React from "react";

// Import styles
import styles from "./styles.module.scss";

// Import assets
import defaultImage from "assets/user.png";

const Avatar: React.FC<AvatarProps> = ({ src, size, className, round }) => (
	<div
		className={`${styles.avatar} ${round ? styles.round : ""} ${className ||
			""}`}
		style={{ width: size, height: size }}
	>
		<img alt="user" src={src || defaultImage} />
	</div>
);

interface AvatarProps {
	src?: string;
	size?: number;
	className?: string;
	round?: boolean;
}

export default Avatar;
