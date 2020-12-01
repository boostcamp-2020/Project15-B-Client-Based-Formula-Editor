import React from "react";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: lightgrey;
	margin: 5px;
	border: 1px solid black;
	border-radius: 15px;

	> * {
		margin: 5px;
		padding: 3px;
	}
`;

const Button = styled.button`
	background-color: white;
	border: 1px solid black;
	&:hover {
		background-color: grey;
		cursor: pointer;
	}
`;

export default function CustomForm({ onSubmit, onClick, onChange, buttonName }) {
	return (
		<Form onSubmit={onSubmit}>
			<input type="text" name="command" onChange={onChange} placeholder="명령어를 다음과 같이 입력하세요> \cmx" />
			<input type="text" name="latex" placeholder="mathquill 자리입니다." />
			<Button onClick={onClick}>{buttonName}</Button>
		</Form>
	);
}
