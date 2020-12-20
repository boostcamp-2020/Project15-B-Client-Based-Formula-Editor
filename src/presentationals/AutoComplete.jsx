import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import color from "../constants/color";

const AutoKeywordLayout = styled.div`
	position: fixed;
	left: ${({ x }) => x}px;
	top: ${({ top }) => top}px;
	width: fit-content;
	height: fit-content;
	${({ theme }) => `
		background: ${color.mainTheme4[theme]};
		color: ${color.mainTheme0[theme]};
		box-shadow: 0 0 5px 2px ${color.mainTheme1[theme]};
	`}
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
		<AutoKeywordLayout
			x={x}
			top={y + fontSize}
			isOpen={isOpen && recommandationList.length}
			theme={theme}>
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
