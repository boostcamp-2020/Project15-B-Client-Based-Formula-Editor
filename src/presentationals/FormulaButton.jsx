import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const FormulaButtonStyle = styled.button`
	width: 80px;
	height: 80px;
	cursor: pointer;
	background-color: ${({ isSelected }) => (isSelected ? color.light : color.superLight)};
	border: 1px solid ${color.dark};
	outline: none;
	
	&:hover {
		background-color: ${color.light};
	}

	svg {
		width: 50px;
		height: 50px;
		fill: ${color.dark};
	}
`;

export default function FormulaButton({ children, onClick, isSelected }) {
	return (
		<FormulaButtonStyle onClick={onClick} isSelected={isSelected}>
			{children}
		</FormulaButtonStyle>
	);
}
