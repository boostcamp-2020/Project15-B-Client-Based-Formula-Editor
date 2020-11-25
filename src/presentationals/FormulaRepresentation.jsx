import React from "react";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

const FormulaRepresentationStyle = styled.div`
  height: 300px;
  border: 1px solid black;
	display: flex;
	flex-direction: row;

	& > .mq-math-mode {
		width: 100%;
		height: 100%;
		margin: auto;
    padding: 130px;
		border: none;
		text-align: center;
	}
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
