import React from "react";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

import { color } from "../GlobalStyle";

addStyles();

const FormulaRepresentationStyle = styled.div.attrs(({ fontInfo }) => ({ style: { color: fontInfo.color } }))`
  height: 300px;
	border: 1px solid ${color.dark};
	border-top: none;
	display: flex;
	flex-direction: row;
	font-size:${props => props.fontInfo.size}px;
	
	> .mq-math-mode {
		width: 100%;
		height: 100%;
		margin: auto;
    padding: 130px;
		border: none;
		text-align: ${props => props.align};
	}
`;

export default function FormulaRepresentation({
	latexInput, handleLatexInput, mathquillDidMount, fontInfo, alignInfo,
}) {
	return (
		<FormulaRepresentationStyle fontInfo={fontInfo} align={alignInfo}>
			<EditableMathField
				latex={latexInput}
				onChange={handleLatexInput}
				mathquillDidMount={mathquillDidMount}
			/>
		</FormulaRepresentationStyle>
	);
}
