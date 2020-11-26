import React from "react";
import styled from "styled-components";

const LatexRepresentationStyle = styled.textarea`
	width: 100%;
	height: 120px;
	margin-top: 12px;
  padding: 4px;
	border: 1px solid black;
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
