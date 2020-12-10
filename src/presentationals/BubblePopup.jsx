import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const transition = "0.5s";

const Layout = styled.div`
  position: fixed;
  transition: ${transition};
  width: max-content;
  z-index: 2;
  transform: translateX(-10%);
  height: 30px;
  display: block;
  margin-bottom: 30px;
  bottom: 5px;
  right: ${({ isOpen }) => (isOpen ? "0" : "-15")}px;
`;

const Message = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  transition: ${transition};
  background-color: ${color.normal};
  color: white;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export default function BubblePopup({ isOpen, message }) {
	return (
		<Layout isOpen={isOpen}>
			<Message isOpen={isOpen}>{message}</Message>
		</Layout>
	);
}
