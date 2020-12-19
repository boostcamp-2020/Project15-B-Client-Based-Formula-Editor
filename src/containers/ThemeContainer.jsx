import React from "react";
import { useDispatch } from "react-redux";

import { toggleThemeColor } from "../slice";

export default function ThemeContainer() {
	const dispatch = useDispatch();

	const handleThemeColor = () => {
		dispatch(toggleThemeColor());
	};

	return (
		<div>
			<button onClick={handleThemeColor}>테마</button>
		</div>
	);
}
