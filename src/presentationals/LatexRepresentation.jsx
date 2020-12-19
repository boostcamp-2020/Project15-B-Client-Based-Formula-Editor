import React from "react";
import styled from "styled-components";

import color from "../constants/color";

const LatexRepresentationStyle = styled.textarea`
	color: ${({ theme }) => color.mainTheme0[theme]};
	width: 100%;
	height: ${props => props.height}px;
	min-height: 100px;
  padding: 16px 8px;
	background-color: ${({ theme }) => color.mainTheme4[theme]};
	border: none;
	outline: none;
	resize: none;
	font-size: 17px;
`;

export default function LatexRepresentation({ height, latexInput, onChange, theme }) {
	return (
		<LatexRepresentationStyle
			height={height}
			value={latexInput}
			onChange={onChange}
			theme={theme}
		/>
	);
}
