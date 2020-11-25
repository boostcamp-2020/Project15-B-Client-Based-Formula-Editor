import React from "react";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

const FormulaRepresentationStyle = styled.div`
  height: 300px;
  border: 1px solid black;
	display: flex;
	flex-direction: row;
`;

export default function FormulaRepresentation({ latexInput, handleLatexInput, mathquillDidMount }) {
	return (
		<FormulaRepresentationStyle>
			<EditableMathField
				latex={latexInput}
				onChange={handleLatexInput}
				mathquillDidMount={mathquillDidMount}
			/>
		</FormulaRepresentationStyle>
	);
}
