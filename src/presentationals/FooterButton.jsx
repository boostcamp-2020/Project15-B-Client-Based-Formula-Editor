import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import BubblePopup from "./BubblePopup";

const Layout = styled.div`
	position: relative;
  ${({ marginRight }) => marginRight && `
    margin-right: ${marginRight};
  `}
`;

const FooterButtonStyle = styled.button`
	position: relative;
	z-index: 3;
	height: 40px;
	cursor: pointer;
	padding: 0 30px;
	background-color: ${themeColor.dark};
	border: 1px solid ${themeColor.white};
	color: ${themeColor.white};

	&:hover {
		background-color: ${themeColor.superLight};
	}
`;

export default function FooterButton({ name, onClick, isOpen, message, marginRight }) {
	return (
		<Layout marginRight={marginRight}>
			<BubblePopup isOpen={isOpen} message={message} />
			<FooterButtonStyle onClick={onClick}>{name}</FooterButtonStyle>
		</Layout>
	);
}
