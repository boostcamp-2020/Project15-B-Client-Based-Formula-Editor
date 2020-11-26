import React from "react";
import styled from "styled-components";

const LatexRepresentationStyle = styled.div`
	width: 100%;
	height: 120px;
	margin-top: 12px;
  padding: 4px;
	border: 1px solid black;
`;

export default function LatexRepresentation({ latexInput }) {
	return (
		<LatexRepresentationStyle>
			{latexInput}
		</LatexRepresentationStyle>
	);
}
