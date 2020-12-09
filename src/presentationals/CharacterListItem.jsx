import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import { themeColor } from "../GlobalStyle";

const Item = styled.div`
  display: flex;
  align-items: center;
	cursor: pointer;
	color: ${themeColor.white};
  height: 27px;
	padding: 0 10px;

  &:hover {
    background-color: #2B2D2E;

		> div > div:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
		}
  }

  > div:first-child {
    width: 40px;
    text-align: center;
  }
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
	display: none;
	z-index: 5;
	border-radius: 5px;

	.mq-math-mode, > div {
		font-size: 2rem;
	}
`;

const Text = styled.div`
	font-family: -webkit-pictograph;
`;

const Name = styled.div`
	${({ isMagnifier }) => !isMagnifier &&
	"font-family: Verdana, Geneva, Tahoma, sans-serif;"}
`;

export default function CharacterListItem({ item, onClick, isMagnifier }) {
	return (
		<Item onClick={onClick(item.latex)}>
			<Symbol>
				{item.isSymbol ?
					<>
						{isMagnifier && <Magnifier><StaticMathField>{item.symbol}</StaticMathField></Magnifier>}
						<StaticMathField>{item.symbol}</StaticMathField>
					</> :
					<>
						{isMagnifier && <Magnifier><Text>{item.symbol}</Text></Magnifier>}
						<Text>{item.symbol}</Text>
					</>
				}
			</Symbol>
			<Name isMagnifier={isMagnifier}>{item.name}</Name>
		</Item>
	);
}
