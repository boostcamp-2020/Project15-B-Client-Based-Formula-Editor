import React from "react";
import FontSizeSelector from "../presentationals/FontSizeSelector";

export default function FontContainer() {
	const handleFontSize = () => {
		// dispatch
	};

	return (
		<div>
			<FontSizeSelector fontSize={15} onChange={handleFontSize} />
			{/* 폰트 크기
			폰트 색
			폰트 종류...?
			정렬 좌,중,우 */}
		</div>
	);
}
