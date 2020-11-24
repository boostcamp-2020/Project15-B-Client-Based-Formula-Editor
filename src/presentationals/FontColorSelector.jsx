import React from "react";
import styled from "styled-components";

const FontColorSelectorStyle = styled.div`
	display:flex;
	flex-direction:column;
	& > svg{
		width:20px;
		height:20px;
	}
	input{
		outline:none;
		border:0px solid black;
		background-color:white;
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
