import React from "react";
import styled from "styled-components";

import DropdownItem from "../presentationals/DropdownItem";
import characterLatex from "../constants/characterLatex";
import { color } from "../GlobalStyle";

const FormulaDropdownLayout = styled.div`
	display: inline-block;
	width: 260px;
	height: 250px;
	border: 1px solid ${color.normal};
	padding: 8px;
	background-color: ${color.normal};
	z-index: 5;
`;

export default function DropdownItems({ name, onItemClick }) {
	return (
		<FormulaDropdownLayout>
			{characterLatex[name].map((item, index) =>
				<DropdownItem key={index} item={item} onClick={onItemClick(item.latex)} />)}
		</FormulaDropdownLayout>
	);
}
