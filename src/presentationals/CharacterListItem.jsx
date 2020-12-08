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
  }

  > div:first-child {
    width: 40px;
    text-align: center;
  }
`;

export default function CharacterListItem({ item, onClick }) {
	return (
		<Item onClick={onClick(item.latex)}>
			<div>
				{item.isSymbol ?
					<StaticMathField>{item.symbol}</StaticMathField> :
					<div>{item.symbol}</div>
				}
			</div>
			<div>{item.name}</div>
		</Item>
	);
}
