import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LatexRepresentationStyle = styled.div`
	width: 100%;
	height: 120px;
	margin-top: 12px;
  padding: 4px;
	border: 1px solid black;
`;

export default function LatexRepresentation() {
	const latexInput = useSelector(state => state.latexInput);

	return (
		<LatexRepresentationStyle>
			{latexInput}
		</LatexRepresentationStyle>
	);
}
