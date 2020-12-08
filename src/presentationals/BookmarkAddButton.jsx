import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const Item = styled.button`
	height: 50px;
	position: relative;
	color: white;
	font-weight: bold;
	background-color: ${themeColor.blue};
	margin: 5px;
	border-radius: 5px;
	border: none;
	width: calc(100% - 10px); 
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: ${themeColor.lightBlue};
	} 
`;

export default function BookmarkAddButton({ onClick }) {
	return <Item onClick={onClick}>현재 수식 북마크에 추가</Item>;
}
