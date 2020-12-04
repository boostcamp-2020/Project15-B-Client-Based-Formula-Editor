import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const transition = "0.5s";

const Layout = styled.div`
  position: absolute;
  transition: ${transition};
  width: max-content;
  z-index: 2;
  transform: translateX(-17%);
  display: block;
  top: ${({ isOpen }) => (isOpen ? "-70" : "-30")}px;
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

const Triangle = styled.div`
  margin: 0 auto;
  width: 0;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 15px solid ${({ isOpen }) => (isOpen ? color.normal : `transparent`)};
  transition: ${transition};
`;

export default function BubblePopup({ isOpen, message }) {
	return (
		<Layout isOpen={isOpen}>
			<Message isOpen={isOpen}>{message}</Message>
			<Triangle isOpen={isOpen}></Triangle>
		</Layout>
	);
}
