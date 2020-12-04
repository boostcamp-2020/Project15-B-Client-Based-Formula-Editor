import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const Button = styled.button`
	width: calc(100% - 40px);
  margin: 15px 20px 0px 20px;
	height: 50px;
	font-weight: bold;
	color: white;
	background-color: ${color.normal};
	border: 2px solid ${color.dark};
	border-radius: 10px;
	cursor: pointer;

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
