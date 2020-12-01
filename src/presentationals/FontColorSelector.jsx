import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
import FontIcon from "../icons/FontIcon";

const FontColorSelectorStyle = styled.label`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 0 5px;
	border-right: 1px dashed ${color.dark};

	& > svg {
		margin: 0 auto;
		fill: ${color.dark};
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
