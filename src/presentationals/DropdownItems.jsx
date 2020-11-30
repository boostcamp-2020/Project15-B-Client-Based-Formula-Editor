import React from "react";
import styled from "styled-components";

import DropdownItem from "../presentationals/DropdownItem";
import characterLatex from "../constants/characterLatex";
import { color } from "../GlobalStyle";

const FormulaDropdownLayout = styled.div`
	display: inline-block;
	width: 260px;
	background-color: ${color.light};
	transition: 0.3s;

	${({ isOpen }) => (isOpen ?
		`
		height: 250px;
		border: 1px solid ${color.normal};
		padding: 8px;
		z-index: 10;
		`		:
		`
		height: 0;
		border: 0;
		padding: 0;
		z-index: 8;
		* {
			display: none;
		}
	`)}
`;

export default function DropdownItems({ name, onItemClick, isOpen }) {
	return (
		<FormulaDropdownLayout isOpen={isOpen}>
			{characterLatex[name].map((item, index) =>
				<DropdownItem key={index} item={item} onClick={onItemClick(item.latex)} />)}
		</FormulaDropdownLayout>
	);
}
