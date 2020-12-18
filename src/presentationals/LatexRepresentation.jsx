import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const LatexRepresentationStyle = styled.textarea`
	color: ${themeColor.white};
	width: 100%;
	height: ${props => props.height}px;
	min-height: 100px;
  padding: 16px 8px;
	background-color: ${themeColor.dark};
	border: none;
	outline: none;
	resize: none;
	font-size: 17px;
`;

export default function LatexRepresentation({ height, latexInput, onChange }) {
	return (
		<LatexRepresentationStyle
			height={height}
			value={latexInput}
			onChange={onChange}
		/>
	);
}
