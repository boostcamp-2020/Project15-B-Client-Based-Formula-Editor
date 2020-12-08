import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import FontSizeIcon from "../icons/FontSizeIcon";

const Layout = styled.label`
	display: flex;
	align-items: center;
	padding: 0 5px;
	border-right: 1px dashed ${themeColor.white};
`;

const FontSizeSelectorStyle = styled.select`
	border: 0;
	color: ${themeColor.white};
	background-color: ${themeColor.dark};
	cursor: pointer;
	outline: none;
`;

export default function FontSizeSelector({ fontSize, onChange }) {
	const ableFontSize = [11, 12, 13, 14, 15, 16, 17, 18, 19];

	return (
		<Layout>
			<FontSizeIcon fill={themeColor.white}/>
			<FontSizeSelectorStyle value={fontSize} onChange={onChange} >
				{ableFontSize.map((elem, index) => <option key={index} value={elem}>{elem}</option>)}
			</FontSizeSelectorStyle>
		</Layout>
	);
}
