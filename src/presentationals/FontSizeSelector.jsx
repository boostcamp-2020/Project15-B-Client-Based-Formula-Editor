import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
import FontSizeIcon from "../icons/FontSizeIcon";

const Layout = styled.div`
	display: flex;
	align-items: center;
`;

const FontSizeSelectorStyle = styled.select`
	// width: 50px;
	// height: 100%;
	border: 0;
	color: ${color.dark};
	background-color: inherit;
`;

export default function FontSizeSelector({ fontSize, onChange }) {
	const ableFontSize = [11, 12, 13, 14, 15, 16, 17, 18, 19];

	return (
		<Layout>
			<FontSizeIcon fill={color.dark}/>
			<FontSizeSelectorStyle value={fontSize} onChange={onChange} >
				{ableFontSize.map((elem, index) => <option key={index} value={elem}>{elem}</option>)}
			</FontSizeSelectorStyle>
		</Layout>
	);
}
