import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import FontIcon from "../icons/FontIcon";

const FontColorSelectorStyle = styled.label`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 0 5px;
	border-right: 1px dashed ${themeColor.white};

	& > svg {
		margin: 0 auto;
		fill: ${themeColor.white};
	}
	& > input {
		cursor: pointer;
		outline: none;
		height: 13px;
		border: 0;
		background-color: inherit;
		width: 30px;
	}
`;

export default function FontColorSelector({ fontColor, onChange }) {
	return (
		<FontColorSelectorStyle>
			<FontIcon />
			<input type="color" value={fontColor} onChange={onChange} />
		</FontColorSelectorStyle>
	);
}
