import React from "react";
import styled from "styled-components";

const Button = styled.button`
	width: 40px;
	padding: 0 5px;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	${({ isHover, hoverColor }) => isHover && `
		&:hover {
			svg {
				${hoverColor ? `fill: ${hoverColor}` : "fill-opacity: 0.7"};
			}
		}
	`}
	
`;

function IconButton({ icon, onClick, isHover, hoverColor }) {
	return (
		<Button {...{
			onClick,
			isHover,
			hoverColor,
		}}>{icon}</Button>
	);
}

export default React.memo(IconButton);
