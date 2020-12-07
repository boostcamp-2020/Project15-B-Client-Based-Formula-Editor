import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const Layout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  background-color: ${color.light};
  border: 1px solid ${color.dark};
  transition: 0.5s;
  z-index: 20;
  ${({ isOpen }) => !isOpen && "transform: translateY(-100%);"}
`;
const Message = styled.div``;
const Buttons = styled.div``;
const Button = styled.button``;

export default function ConfirmModal({ isOpen, message, onClickYes, onClickNo }) {
	return (
		<Layout isOpen={isOpen}>
			<Message>{message}</Message>
			<Buttons>
				<Button onClick={onClickYes}>Yes</Button>
				<Button onClick={onClickNo}>No</Button>
			</Buttons>
		</Layout>
	);
}
