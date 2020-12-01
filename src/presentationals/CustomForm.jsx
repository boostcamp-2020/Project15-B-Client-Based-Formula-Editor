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

const WarningMsg = styled.p`
	display: ${({ isDisabled }) => (isDisabled ? "block" : "none")};
	margin: 0;
	padding: 0 10px;
	font-size: 11px;
	color: red;
`;


export default function CustomForm({ data, onChange, onSubmit }) {
	return (
		<Form onSubmit={onSubmit}>
			<input type="text" value={data.command} onChange={onChange("command")} name="command" placeholder="명령어를 다음과 같이 입력하세요> \cmx" />
			<WarningMsg isDisabled={data.isDisabled}>이미 있는 명령어입니다.</WarningMsg>
			<input type="text" value={data.latex} onChange={onChange("latex")} name="latex" placeholder="mathquill 자리입니다." />
			<Button name="submitBtn">{data.name}</Button>
		</Form>
	);
}
