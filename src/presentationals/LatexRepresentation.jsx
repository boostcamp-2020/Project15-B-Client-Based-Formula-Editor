import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const LatexRepresentationStyle = styled.textarea`
	color: ${themeColor.white};
	width: 100%;
	height: 20vh;
	margin-top: 12px;
  padding: 4px;
	background-color: ${themeColor.dark};
	border: 1px solid ${themeColor.superLight};
	resize: none;
`;

export default function LatexRepresentation({ latexInput, onChange }) {
	return (
		<LatexRepresentationStyle
			value={latexInput}
			onChange={onChange}
		/>
	);
}
