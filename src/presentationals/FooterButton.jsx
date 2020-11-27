import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const FooterButtonStyle = styled.button`
	height: 40px;
	cursor: pointer;
	padding: 0 30px;
	background-color: ${color.superLight};
	border: 1px solid ${color.dark};

	&:hover {
		background-color: ${color.light};
	}
`;

export default function FooterButton({ name, onClick }) {
	return (
		<FooterButtonStyle onClick={onClick}>{name}</FooterButtonStyle>
	);
}
