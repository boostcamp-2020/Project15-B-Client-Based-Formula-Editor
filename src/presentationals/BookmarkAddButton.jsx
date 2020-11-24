import React from "react";
import styled from "styled-components";

const Item = styled.button`
	height: 150px;
	position: relative;
	background-color: lightgrey;
	margin: 2.5px 5px;
	border-radius: 15px;
	border: 1px solid black;
	width: calc(100% - 10px); 
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: grey;
	} 
`;

export default function BookmarkAddButton() {
	return <Item>현재 수식 즐겨찾기로 추가</Item>;
}
