import React from "react";
import styled from "styled-components";

const FontSizeSelectorStyle = styled.select`
	width:50px;
	height:100%;
	border:0px solid black;
`;

export default function FontSizeSelector({ fontSize, onChange }) {
	const ableFontSize = [11, 13, 15, 17, 19];

	return (
		<FontSizeSelectorStyle value={fontSize} onChange={onChange} >
			{ ableFontSize.map((elem, index) => <option key={index} value={elem}>{elem}</option>)}
		</FontSizeSelectorStyle>
	);
}
