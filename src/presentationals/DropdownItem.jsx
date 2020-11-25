import React from "react";
import styled from "styled-components";

const DropdownItemStyle = styled.button`
	width: 30px;
	height: 30px;
	padding: 2px;
	margin: 2px;
	border: 1px solid black;
	background-color: green;
`;

export default function DropdownItem({ value, onClick }) {
	return <DropdownItemStyle onClick={onClick}>
		{value}
	</DropdownItemStyle>;
}
