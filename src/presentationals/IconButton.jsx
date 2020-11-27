import React from "react";
import styled from "styled-components";

const Button = styled.button`
	padding: 0 5px;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	${({ isHover }) => isHover && `
		&:hover {
			svg {
				fill-opacity: 0.7;
			}
		}
	`}
	
`;

export default function IconButton({ icon, onClick, isHover }) {
	return (
		<Button onClick={onClick} isHover={isHover}>{icon}</Button>
	);
}
