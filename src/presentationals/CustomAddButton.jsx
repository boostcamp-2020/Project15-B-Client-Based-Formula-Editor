import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const Button = styled.button`
	width: calc(100% - 10px); 
	margin: 5px;
	height: 50px;
	font-weight: bold;
	color: white;
	background-color: ${themeColor.blue};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	position: relative;
	outline: none;

	&:hover {
		background-color: ${themeColor.lightBlue};
	}
`;

export default function CustomAddButton({ isFormOn, onClick }) {
	return (
		<Button onClick={onClick}>
			{isFormOn ? "취소" : "새 커스텀 추가하기"}
		</Button>
	);
}
