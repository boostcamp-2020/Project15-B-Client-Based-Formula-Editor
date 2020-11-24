import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: calc(100% - 10px);
  margin: 5px;
  height: 50px;
`;

export default function CustomAddButton({ isFormOn, onClick }) {
	return (
		<Button onClick={onClick}>
			{isFormOn ? "취소" : "새 커스텀 추가하기"}
		</Button>
	);
}
