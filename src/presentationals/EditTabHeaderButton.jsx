import React from "react";
import styled from "styled-components";

const EditTabHeaderButtonStyle = styled.button`
	width: 40px;
	height: 39px;
	border: 1px solid gray;
	outline: none;
	:hover {
		background-color: white;
	}
	& > svg {
		width: 25px;
		height: 25px;
	}
`;

export default function EditTabHeaderButton({ onClick, icon }) {
	return (
		<EditTabHeaderButtonStyle onClick={onClick}>
			{icon}
		</EditTabHeaderButtonStyle>
	);
}
