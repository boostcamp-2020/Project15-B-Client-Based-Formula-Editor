import React from "react";
import styled from "styled-components";

const FontColorSelectorStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 45px;
	& > svg {
		margin: 4px auto auto;
		border: 1px solid black;
		display: inline-block;
		width: 24px;
		height: 100%;
	}
	input {
		margin: auto;
		outline: none;
		height: 15px;
		border: 0px solid black;
		background-color: white;
	}
`;

export default function FontColorSelector({ fontColor, onClick, onChange }) {
	return (
		<FontColorSelectorStyle onClick={onClick}>
			<svg></svg>
			<input type="color" value={fontColor} onChange={onChange} />
		</FontColorSelectorStyle>
	);
}
