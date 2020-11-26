import React from "react";
import styled from "styled-components";
import { addStyles, StaticMathField } from "react-mathquill";

addStyles();

const DropdownItemStyle = styled.button`
	width: ${({ isFormulaType }) => (isFormulaType ? "240" : "30")}px;
	min-height: 30px;
	padding: 2px;
	margin: 2px;
	border: 1px solid black;
	background-color: white;
	cursor: pointer;

	> .mq-math-mode {
		cursor: pointer;
	}
`;

export default function DropdownItem({ item, onClick }) {
	const isFormulaType = item.formula;

	return (
		<DropdownItemStyle onClick={onClick} isFormulaType={isFormulaType}>
			{isFormulaType ?
				<StaticMathField>{item.name}</StaticMathField> : item.name}
		</DropdownItemStyle>
	);
}
