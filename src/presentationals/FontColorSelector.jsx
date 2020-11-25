import React from "react";
import styled from "styled-components";

const FontColorSelectorStyle = styled.label`
	display: flex;
	flex-direction: column;
	width: 45px;
	cursor: pointer;
	& > svg {
		pointer-events: none;
		margin: 4px auto auto;
		border: 1px solid black;
		display: inline-block;
		width: 24px;
		height: 100%;
	}
	& > input {
		cursor: pointer;
		margin: auto;
		outline: none;
		height: 15px;
		border: 0px solid black;
		background-color: white;
	}
`;

export default function FontColorSelector({ fontColor, onClick, onChange }) {
	return (
		<FontColorSelectorStyle for='colorInput' onClick={onClick}>
			<svg></svg>
			<input id='colorInput' type="color" value={fontColor} onChange={onChange} />
		</FontColorSelectorStyle>
	);
}
