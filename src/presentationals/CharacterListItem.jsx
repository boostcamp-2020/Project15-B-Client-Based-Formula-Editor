import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import { themeColor } from "../GlobalStyle";

const Item = styled.div`
  display: flex;
  align-items: center;
	cursor: pointer;
	color: ${themeColor.white};
	padding: 4px 10px;

  &:hover {
    background-color: #2B2D2E;

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
`;

const Magnifier = styled.div`
	position: absolute;
	border: 1px solid ${themeColor.white};
	background-color: ${themeColor.normal};
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
`;

const Text = styled.div`
	font-family: -webkit-pictograph;
`;

const Name = styled.div`
	margin-left: 7px;
	${({ isMagnifier }) => !isMagnifier &&
	"font-family: Verdana, Geneva, Tahoma, sans-serif;"}
`;

const FormulaViewBox = styled.div`
	position: fixed;
	left: 300px;
	transform: translateY(60px);
	z-index: 3;
	color: ${themeColor.white};
	background-color: ${themeColor.normal};
	width: 250px;
	height: 150px;
	visibility: hidden;
	margin: 5px;
	border-radius: 7px;
	border: 1px solid ${themeColor.white};

	> .mq-math-mode {
		width: 90%;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
	}
`;

const ExampleSymbolLayout = styled.div`
	width: 40px;
	text-align: center;

	> i > span:first-child {
		font-size: 16px;
	}

	> i > span:last-child {
		font-size: 10px;
		font-weight: bold;
	}
`;

export default function CharacterListItem({ title, item, onClick, isMagnifier }) {
	const getItemComponent = WrapperComponent =>
		<SymbolWrapper>
			{isMagnifier &&
				<Magnifier>
					<WrapperComponent>{item.symbol}</WrapperComponent>
				</Magnifier>}
			<WrapperComponent>{item.symbol}</WrapperComponent>
		</SymbolWrapper>;

	return (
		<Item onClick={onClick(item.latex)}>
			<Symbol>
				{item.isSymbol ? getItemComponent(StaticMathField) : getItemComponent(Text)}
			</Symbol>
			<Name isMagnifier={isMagnifier}>{item.name}</Name>
			{title === "example" &&
				<>
					<ExampleSymbolLayout>
						<i><span>f</span><span>(x)</span></i>
					</ExampleSymbolLayout>
					<Name isMagnifier={isMagnifier}>{item.name}</Name>
					<FormulaViewBox>
						<StaticMathField>{item.latex}</StaticMathField>
					</FormulaViewBox>
				</>
			}
		</Item>
	);
}
