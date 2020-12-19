import React from "react";
import { EditableMathField } from "react-mathquill";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: ${themeColor.light};
	margin: 5px;
	border-radius: 5px;
	padding: 5px;

	> * {
		border: none;
		outline: none;
		background-color: ${themeColor.dark};
		color: white;
		text-align: center;
		padding: 3px;
		margin: 3px;
		border-radius: 3px;
	}

	.mq-cursor {
    border: 1px solid ${themeColor.white};
		background-color: ${themeColor.white};
	}
`;

const Button = styled.button`
	color: white;
	background-color: ${themeColor.blue};
	border: none;
	margin-top: 15px;

	&:hover {
		background-color: ${themeColor.lightBlue};
		cursor: pointer;
	}
`;

const WarningMsg = styled.div`
	margin: 0 3px;
	padding: 0;
	font-size: 11px;
	color: red;
	border: none;
	background-color: transparent;
`;

export default function CustomForm({
	value,
	onChangeCommand,
	onChangeLatex,
	onChangeDescription,
	onSubmit,
	warningMessage,
}) {
	return (
		<Form onSubmit={onSubmit}>
			<input
				value={value.command}
				onChange={onChangeCommand}
				placeholder="명령어를 입력해주세요"
				autoFocus
			/>
			{warningMessage.command && <WarningMsg>{warningMessage.command}</WarningMsg>}
			<EditableMathField latex={value.latex} onChange={onChangeLatex} name="latex" />
			{warningMessage.latex && <WarningMsg>{warningMessage.latex}</WarningMsg>}
			<input
				value={value.description}
				onChange={onChangeDescription}
				placeholder="설명을 입력해주세요"
			/>
			<Button name="submitBtn">{value.name}</Button>
		</Form>
	);
}
