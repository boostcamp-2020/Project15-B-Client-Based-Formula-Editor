import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import color from "../constants/color";

const AutoKeywordLayout = styled.div`
	position: fixed;
	left: ${({ x }) => x}px;
	top: ${({ y, fontSize }) => y + fontSize}px;
	width: fit-content;
	height: fit-content;
	background: ${({ theme }) => color.mainTheme4[theme]};
	color: ${({ theme }) => color.mainTheme0[theme]};
	box-shadow: 0 0 7px 3px black;
	visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 500;
`;

const HightLight = styled.div`
	display: flex;
	min-width: 180px;
	padding: 2px 5px;

	* {
		pointer-events: none;
	}
	
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

function AutoComplete({
	isOpen,
	x,
	y,
	fontSize,
	recommandationList,
	targetIndex,
	onClick,
	onMouseEnter,
	theme,
}) {
	return (
		<AutoKeywordLayout x={x} y={y} isOpen={isOpen} fontSize={fontSize} theme={theme}>
			{ isOpen && recommandationList.map((item, index) => (
				<HightLight data-id={index} onClick={onClick} onMouseEnter={onMouseEnter}
					key={index} isFocused={index === parseInt(targetIndex, 10)}>
					{item.command ?
						<>
							<ItemWrapper>\{item.command}</ItemWrapper>
							<div key={`C${item}`}>{item.description}</div>
						</> :
						<>
							<ItemWrapper>{item}</ItemWrapper>
							<MathFieldWrapper>
								<StaticMathField key={`S${item}`}>{item}</StaticMathField>
							</MathFieldWrapper>
						</>
					}
				</HightLight>
			))}
		</AutoKeywordLayout>
	);
}

export default React.memo(AutoComplete);
