import React from "react";
import styled from "styled-components";
import { addStyles, StaticMathField } from "react-mathquill";

addStyles();

const DropdownItemStyle = styled.button`
	min-height: 30px;
	padding: 2px;
	margin: 2px;
	border: 1px solid black;
	background-color: white;
	cursor: pointer;

	${({ isFormulaType }) => (isFormulaType ? `width: 240px;` : `width: 30px;`)}

	& > .mq-math-mode {
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
