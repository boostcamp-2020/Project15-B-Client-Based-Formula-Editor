import React from "react";

export default function FontSizeSelector({ fontSize, onChange }) {
	const ableFontSize = [11, 13, 15, 17, 19];

	return (
		<select value={fontSize} onChange={onChange} >
			{ ableFontSize.map((elem, index) => <option key={index} value={elem}>{elem}</option>)}
		</select >
	);
}
