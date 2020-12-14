import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import { themeColor } from "../GlobalStyle";

const AutoKeywordLayout = styled.div`
	position: fixed;
	left: ${({ x }) => x}px;
	top: ${({ y }) => y + 15}px;
	width: fit-content;
	height: fit-content;
	background: ${themeColor.normal};
	color: white;
	box-shadow: 0 0 7px 3px black;
	visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 500;
`;

const HightLight = styled.div`
	display: flex;
	min-width: 180px;
	padding: 2px 5px;

	${({ isFocused }) => (isFocused && `
    background: #5F7E97;
    color: white;
  `)}
`;

const ItemWrapper = styled.div`
  min-width: 100px;
	margin-right: auto;
`;

const MathFieldWrapper = styled.div`
	margin-left: auto;
`;

export default function AutoComplete({
	isOpen,
	x,
	y,
	recommandationList,
	targetIndex,
}) {
	return (
		<AutoKeywordLayout x={x} y={y} isOpen={isOpen}>
			{ isOpen && recommandationList.map((item, index) => (
				<HightLight key={index} isFocused={index === targetIndex}>
					<ItemWrapper>{item}</ItemWrapper>
					<MathFieldWrapper>
						<StaticMathField key={`S${item}`}>{item}</StaticMathField>
					</MathFieldWrapper>
				</HightLight>
			))}
		</AutoKeywordLayout>
	);
}