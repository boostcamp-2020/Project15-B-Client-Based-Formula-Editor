import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import color from "../constants/color";
import ListItem from "./ListItem";

const Item = styled.div`
  display: flex;
  align-items: center;
	cursor: pointer;
	color: ${({ theme }) => color.mainTheme0[theme]};
	padding: 4px 10px;

	> div:nth-child(3) {
		visibility: hidden;
	}

  &:hover {
    background-color: ${({ theme }) => color.mainTheme2[theme]};

		> div > div > div:first-child {
			visibility: visible;
		}
		> div:last-child {
			visibility: visible;
		}
  }
`;

const SymbolWrapper = styled.div`
  width: 40px;
  text-align: center;
`;

const Symbol = styled.div`
	position: relative;
	width: 40px;
	text-align: center;
	${({ fontSize }) => fontSize && `font-size: ${fontSize}px`};
`;

const Magnifier = styled.div`
	position: absolute;
	border: 1px solid ${({ theme }) => color.mainTheme0[theme]};;
	background-color: ${({ theme }) => color.mainTheme3[theme]};;
	left: 20px;
	transform: translate(-50%, -15px);
	width: 50px;
	height: 50px;
	z-index: 5;
	border-radius: 5px;
	visibility: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	.mq-math-mode, > div {
		font-size: 2rem;
	}

	* {
		cursor: pointer;
	}
`;

const Text = styled.div`
	font-family: -webkit-pictograph;
`;

const Name = styled.div`
	margin-left: 7px;
	${({ isMagnifier }) => !isMagnifier &&
	"font-family: Verdana, Geneva, Tahoma, sans-serif;"}
`;

function CharacterListItem({
	title,
	item,
	onClick,
	isMagnifier,
	onMouseEnter,
	previewItem,
	theme,
}) {
	const getItemComponent = WrapperComponent =>
		<SymbolWrapper>
			{isMagnifier &&
				<Magnifier theme={theme}>
					<WrapperComponent>{item.symbol}</WrapperComponent>
				</Magnifier>}
			<WrapperComponent>{item.symbol}</WrapperComponent>
		</SymbolWrapper>;

	return (
		<Item onClick={onClick(item.latex)} onMouseEnter={onMouseEnter} theme={theme}>
			{title !== "example" &&
				<>
					<Symbol>
						{item.isSymbol ? getItemComponent(StaticMathField) : getItemComponent(Text)}
					</Symbol>
					<Name isMagnifier={isMagnifier}>{item.name}</Name>
				</>}
			{title === "example" &&
				<>
					<Symbol fontSize={12}>
						<StaticMathField>f(x)</StaticMathField>
					</Symbol>
					<Name isMagnifier={isMagnifier}>{item.name}</Name>
					{previewItem.id === item.name &&
						<ListItem latex={item.latex} top={previewItem.top} />}
				</>}
		</Item>
	);
}

export default React.memo(CharacterListItem);
