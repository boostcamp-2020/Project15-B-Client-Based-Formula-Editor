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
		width: 40px;
		height: 40px;
	}
`;

export default function EditTabHeaderButton({ onClick }) {
	return (
		<EditTabHeaderButtonStyle onClick={onClick}>
			<svg></svg>
		</EditTabHeaderButtonStyle>
	);
}
