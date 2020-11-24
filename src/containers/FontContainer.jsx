import React from "react";

import FontColorSelector from "../presentationals/FontColorSelector";
import FontSizeSelector from "../presentationals/FontSizeSelector";

export default function FontContainer() {
	const handleFontSize = () => {
		// dispatch
	};
	const handleFontColor = () => {
		// dispatch
	};

	return (
		<div>
			<FontSizeSelector fontSize={15} onChange={handleFontSize} />
			<FontColorSelector onChange={handleFontColor} onClick={handleFontColor} fontColor={"#ffffff"} />

			{/* 폰트 크기
			폰트 색
			폰트 종류...?
			정렬 좌,중,우 */}
		</div>
	);
}
