import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const Item = styled.button`
	height: 50px;
	position: relative;
	color: white;
	font-weight: bold;
	background-color: ${color.normal};
	margin: 5px;
	border-radius: 10px;
	border: 2px solid ${color.dark};
	width: calc(100% - 10px); 
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: ${color.dark};
	} 
`;

export default function BookmarkAddButton({ onClick }) {
	return <Item onClick={onClick}>현재 수식 북마크에 추가</Item>;
}
