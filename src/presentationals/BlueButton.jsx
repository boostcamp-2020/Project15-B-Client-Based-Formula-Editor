import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const Item = styled.button`
	color: white;
	background-color: ${themeColor.blue};
	margin: 0 10px 10px 10px;
	border: none;
	width: calc(100% - 20px); 
	cursor: pointer;
	outline: none;
	padding: 7px;

	&:hover {
		background-color: ${themeColor.lightBlue};
	} 
`;

export default function BlueButton({ value, onClick }) {
	return <Item onClick={onClick}>{value}</Item>;
}
