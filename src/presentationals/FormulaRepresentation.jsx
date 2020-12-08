import React from "react";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

import { themeColor } from "../GlobalStyle";

addStyles();

const FormulaRepresentationStyle = styled.div.attrs(({ fontInfo }) => ({ style: { color: fontInfo.color } }))`
  height: 60vh;
	background-color: ${themeColor.dark};
	border: 1px solid ${themeColor.superLight};
	border-top: none;
	display: flex;
	flex-direction: row;
	font-size:${props => props.fontInfo.size}px;
	
	> .mq-math-mode {
		color: ${themeColor.white};
		width: 100%;
		height: 100%;
		margin: auto;
    padding: 250px;
		border: none;
		text-align: ${props => props.align};
	}

	.mq-cursor {
		background: ${themeColor.white};
	}
`;

export default function FormulaRepresentation({
	latexInput, onChange, mathquillDidMount, fontInfo, alignInfo,
}) {
	return (
		<FormulaRepresentationStyle fontInfo={fontInfo} align={alignInfo}>
			<EditableMathField
				latex={latexInput}
				onChange={onChange}
				mathquillDidMount={mathquillDidMount}
			/>
		</FormulaRepresentationStyle>
	);
}
