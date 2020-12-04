import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
import BubblePopup from "./BubblePopup";

const Layout = styled.div`
	position: relative;
`;

const FooterButtonStyle = styled.button`
	position: relative;
	z-index: 3;
	height: 40px;
	cursor: pointer;
	padding: 0 30px;
	background-color: ${color.superLight};
	border: 1px solid ${color.dark};

	&:hover {
		background-color: ${color.light};
	}
`;

export default function FooterButton({ name, onClick, isOpen, message }) {
	return (
		<Layout onClick={onClick}>
			<BubblePopup isOpen={isOpen} message={message} />
			<FooterButtonStyle>{name}</FooterButtonStyle>
		</Layout>
	);
}
