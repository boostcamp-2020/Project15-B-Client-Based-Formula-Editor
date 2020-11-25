import React from "react";

import FontContainerLayout from "../layouts/FontContainerLayout";
import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";

export default function FontContainer() {
	const handleFontSize = () => {
		// dispatch
	};
	const handleFontColor = () => {
		// dispatch
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
			<FontSizeSelector fontSize={15} onChange={handleFontSize} />
			<FontColorSelector onChange={handleFontColor} onClick={handleClickFontColor} fontColor={"#000000"} />
			<EditTabHeaderButton onClick={handleLeftAlignmentButton} />
			<EditTabHeaderButton onClick={handleCenterAlignmentButton} />
			<EditTabHeaderButton onClick={handleRightAlignmentButton} />
		</FontContainerLayout>
	);
}
