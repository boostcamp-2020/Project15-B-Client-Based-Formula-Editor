import React from "react";
import { EditableMathField } from "react-mathquill";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: white;
	margin: 5px;
	border: 1px solid black;
	border-radius: 5px;
	padding: 5px;

	.mq-math-mode{
		background-color: white;
	}
	> * {
		text-align: center;
		padding: 3px;
		margin: 1px;
		border: 1px solid black;
		border-radius: 3px;
	}
`;

const Button = styled.button`
	color: white;
	background-color: ${color.normal};
	border: 1px solid black;
	margin-top: 15px;
	font-weight: bold;

	&:hover {
		background-color: ${color.dark};
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

export default function CustomForm({ data, onChangeCommand, onChangeLatex, onSubmit }) {
	return (
		<Form onSubmit={onSubmit}>
			<input
				type="text"
				value={data.command}
				onChange={onChangeCommand}
				name="command"
				placeholder="명령어를 입력해주세요"
				autoFocus
			/>
			<WarningMsg isDisabled={data.isDisabled}>이미 있는 명령어입니다.</WarningMsg>
			<EditableMathField latex={data.latex} onChange={onChangeLatex} name="latex" placeholder="mathquill 자리입니다." />
			<Button name="submitBtn">{data.name}</Button>
		</Form>
	);
}
