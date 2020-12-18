import React from "react";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

import { themeColor } from "../GlobalStyle";

addStyles();

const FormulaRepresentationStyle = styled.div.attrs(({ fontInfo }) => ({ style: { color: fontInfo.color } }))`
  height: ${prop => prop.height}px;
	min-height: 100px;
	background-color: ${themeColor.dark};
	border-top: none;
	display: flex;
	flex-direction: row;
	font-size:${props => props.fontInfo.size}px;
	
	> .mq-math-mode {
		width: 100%;
		height: 100%;
		margin: auto;
		padding: ${prop => (prop.height - prop.fontInfo.size) / 2}px 0;
		border: none;
		text-align: ${props => props.align};
		box-shadow: none;
	}

	.mq-cursor {
    border: 1px solid ${themeColor.white};
		background-color: ${themeColor.white};
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
