import React from "react";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

import { themeColor } from "../GlobalStyle";

addStyles();

const FormulaRepresentationStyle = styled.div.attrs(({ fontInfo }) => ({ style: { color: fontInfo.color } }))`
  height: ${prop => prop.height}px;
	min-height: 100px;
	background-color: ${themeColor.dark};
	border: 1px solid ${themeColor.superLight};
	border-top: none;
	display: flex;
	flex-direction: row;
	font-size:${props => props.fontInfo.size}px;
	
	> .mq-math-mode {
		width: 100%;
		height: 100%;
		margin: auto;
		padding: ${prop => prop.height / 2}px;
		border: none;
		text-align: ${props => props.align};
	}

	.mq-cursor {
		background-color: ${themeColor.white};
		color: ${themeColor.white};
	}
`;

export default function FormulaRepresentation({
	latexInput, onChange, mathquillDidMount, fontInfo, alignInfo, height,
}) {
	return (
		<FormulaRepresentationStyle fontInfo={fontInfo} align={alignInfo} height={height}>
			<EditableMathField
				latex={latexInput}
				onChange={onChange}
				mathquillDidMount={mathquillDidMount}
			/>
		</FormulaRepresentationStyle>
	);
}
