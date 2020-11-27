import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
import FontIcon from "../icons/FontIcon";

const FontColorSelectorStyle = styled.label`
	display: flex;
	flex-direction: column;
	width: 45px;
	cursor: pointer;
	& > svg {
		margin: 6px auto auto;
		fill: ${color.dark};
	}
	& > input {
		cursor: pointer;
		margin: auto;
		outline: none;
		height: 15px;
		border: 0;
		background-color: inherit;
	}
`;

export default function FontColorSelector({ fontColor, onClick, onChange }) {
	return (
		<FontColorSelectorStyle onClick={onClick}>
			<FontIcon />
			<input type="color" value={fontColor} onChange={onChange} />
		</FontColorSelectorStyle>
	);
}
