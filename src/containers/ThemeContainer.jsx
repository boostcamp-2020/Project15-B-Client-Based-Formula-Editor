import React from "react";
import { useDispatch } from "react-redux";

import { toggleThemeColor } from "../slice";
import ThemeButton from "../presentationals/ThemeButton";

export default function ThemeContainer({ theme }) {
	const dispatch = useDispatch();

	const handleThemeColor = () => {
		dispatch(toggleThemeColor());
	};

	return (
		<div>
			<ThemeButton onClick={handleThemeColor} theme={theme} />
		</div>
	);
}
