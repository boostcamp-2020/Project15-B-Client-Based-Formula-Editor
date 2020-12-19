import React from "react";
import styled from "styled-components";

import color from "../constants/color";

const interval = 12;

const Item = styled.button`
	color: white;
	background-color: ${color.blue};
	margin: ${interval}px;
	margin-top: 0;
	border: none;
	width: calc(100% - ${interval * 2}px); 
	cursor: pointer;
	outline: none;
	padding: 7px;

	&:hover {
		background-color: ${color.lightBlue};
	} 
`;

export default function BlueButton({ value, onClick }) {
	return <Item onClick={onClick}>{value}</Item>;
}
