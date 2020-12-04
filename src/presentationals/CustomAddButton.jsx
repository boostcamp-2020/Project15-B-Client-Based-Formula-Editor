import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const Button = styled.button`
	width: calc(100% - 10px); 
	margin: 5px;
	height: 50px;
	font-weight: bold;
	color: white;
	background-color: ${color.normal};
	border: 2px solid ${color.dark};
	border-radius: 10px;
	cursor: pointer;
	position: relative;
	outline: none;

	&:hover {
		background-color: ${color.dark};
	}
`;

export default function CustomAddButton({ isFormOn, onClick }) {
	return (
		<Button onClick={onClick}>
			{isFormOn ? "취소" : "새 커스텀 추가하기"}
		</Button>
	);
}
