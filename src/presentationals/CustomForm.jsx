import React from "react";
import { EditableMathField } from "react-mathquill";
import styled from "styled-components";

import color from "../constants/color";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => color.mainTheme2[theme]};
	margin: 5px;
	border-radius: 5px;
	padding: 5px;

	> * {
		border: none;
		outline: none;
		background-color: ${({ theme }) => color.mainTheme4[theme]};
		color: white;
		text-align: center;
		padding: 3px;
		margin: 3px;
		border-radius: 3px;
	}

	.mq-cursor {
    border: 1px solid ${({ theme }) => color.mainTheme0[theme]};
		background-color: ${({ theme }) => color.mainTheme0[theme]};
	}
`;

const Button = styled.button`
	color: white;
	background-color: ${color.blue};
	border: none;
	margin-top: 15px;

	&:hover {
		background-color: ${color.lightBlue};
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
	theme,
}) {
	return (
		<Form onSubmit={onSubmit} theme={theme}>
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
