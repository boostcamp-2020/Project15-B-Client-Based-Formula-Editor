import React from "react";
import styled from "styled-components";

const LatexRepresentationStyle = styled.textarea`
	width:100%;
	height: 200px;
	margin-top:12px;
  padding: 4px;
  resize: none;
`;

export default function LatexRepresentation() {
	return <LatexRepresentationStyle />;
}
