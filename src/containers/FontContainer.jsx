import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FontContainerLayout from "../layouts/FontContainerLayout";
import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";
import { setAlign, setFont } from "../slice";

export default function FontContainer() {
	const fontInfo = useSelector(state => state.fontInfo);
	const dispatch = useDispatch();

	const handleFontSize = e => {
		dispatch(setFont({ color: fontInfo.color, size: e.target.value }));
	};
	const handleFontColor = e => {
		dispatch(setFont({ color: e.target.value, size: fontInfo.size }));
	};
	const handleLeftAlignmentButton = () => {
		dispatch(setAlign("left"));
	};
	const handleCenterAlignmentButton = () => {
		dispatch(setAlign("center"));
	};
	const handleRightAlignmentButton = () => {
		dispatch(setAlign("right"));
	};

	return (
		<FontContainerLayout>
			<FontSizeSelector fontSize={fontInfo.size} onChange={handleFontSize} />
			<FontColorSelector onChange={handleFontColor} fontColor={fontInfo.color} />
			<EditTabHeaderButton onClick={handleLeftAlignmentButton} Icon="L" />
			<EditTabHeaderButton onClick={handleCenterAlignmentButton} Icon="C" />
			<EditTabHeaderButton onClick={handleRightAlignmentButton} Icon="R" />
		</FontContainerLayout>
	);
}
