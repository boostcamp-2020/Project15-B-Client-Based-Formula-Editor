import React from "react";
import { EditableMathField } from "react-mathquill";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: #313131;
	margin: 5px;
	border-radius: 5px;
	padding: 5px;

	> * {
		background-color: #1E1E1E;
		color: white;
		text-align: center;
		padding: 3px;
		margin: 3px;
		border: 1px solid black;
		border-radius: 3px;
	}
`;

const Button = styled.button`
	color: white;
	background-color: ${themeColor.blue};
	border: 1px solid black;
	margin-top: 15px;
	font-weight: bold;

	&:hover {
		background-color: ${themeColor.lightBlue};
		cursor: pointer;
	}
`;

const WarningMsg = styled.p`
	display: ${({ isDisabled }) => (isDisabled ? "block" : "none")};
	margin: 0;
	padding: 0 10px;
	font-size: 11px;
	color: red;
	border: none;
`;

export default function CustomForm({
	data, onChangeCommand, onChangeLatex, onChangeDescription, onSubmit,
}) {
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
			<EditableMathField latex={data.latex} onChange={onChangeLatex} name="latex" />
			<input value={data.description} onChange={onChangeDescription} name="description" placeholder="설명을 입력해주세요." />
			<Button name="submitBtn">{data.name}</Button>
		</Form>
	);
}
