import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const FontSizeSelectorStyle = styled.select`
	width: 50px;
	height: 100%;
	border: 0;
	color: ${color.dark};
	background-color: inherit;
`;

export default function FontSizeSelector({ fontSize, onChange }) {
	const ableFontSize = [11, 12, 13, 14, 15, 16, 17, 18, 19];

	return (
		<FontSizeSelectorStyle value={fontSize} onChange={onChange} >
			{ableFontSize.map((elem, index) => <option key={index} value={elem}>{elem}</option>)}
		</FontSizeSelectorStyle>
	);
}
