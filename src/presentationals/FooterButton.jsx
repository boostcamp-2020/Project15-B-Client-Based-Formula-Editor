import React from "react";
import styled from "styled-components";

const FooterButtonStyle = styled.button`
	width: 25%;
	height: 40px;
	cursor:pointer;
`;

export default function FooterButton({ name, onClick }) {
	return (
		<FooterButtonStyle onClick={onClick}>{name}</FooterButtonStyle>
	);
}
