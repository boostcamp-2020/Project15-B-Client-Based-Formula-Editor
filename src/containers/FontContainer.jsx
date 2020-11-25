import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FontContainerLayout from "../layouts/FontContainerLayout";
import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";
import { setFont } from "../slice";

export default function FontContainer() {
	const fontInfo = useSelector(state => state.fontInfo);
	const dispatch = useDispatch();

	const handleFontSize = e => {
		dispatch(setFont({ color: fontInfo.color, size: e.target.value }));
	};
	const handleFontColor = e => {
		dispatch(setFont({ color: e.target.value, size: fontInfo.size }));
	};
	const handleClickFontColor = () => {
		// dispatch
	};
	const handleLeftAlignmentButton = () => {
		console.log("clicked left");
	};
	const handleCenterAlignmentButton = () => {
		console.log("clicked center");
	};
	const handleRightAlignmentButton = () => {
		console.log("clicked right");
	};

	return (
		<FontContainerLayout>
			<FontSizeSelector fontSize={fontInfo.size} onChange={handleFontSize} />
			<FontColorSelector onChange={handleFontColor} onClick={handleClickFontColor}
				fontColor={fontInfo.color} />
			<EditTabHeaderButton onClick={handleLeftAlignmentButton} />
			<EditTabHeaderButton onClick={handleCenterAlignmentButton} />
			<EditTabHeaderButton onClick={handleRightAlignmentButton} />
		</FontContainerLayout>
	);
}
