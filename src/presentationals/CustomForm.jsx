import React from "react";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  margin: 5px;
  border: 1px solid black;
  border-radius: 15px;

  > * {
    margin: 5px;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 100%;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export default function CustomForm({ buttonName }) {
	return (
		<Form>
			<input type="text" placeholder="명령어를 다음과 같이 입력하세요> \cmx" />
			<input type="text" placeholder="mathquill 자리입니다." />
			<Buttons>
				<Button>{buttonName}</Button>
			</Buttons>
		</Form>
	);
}
