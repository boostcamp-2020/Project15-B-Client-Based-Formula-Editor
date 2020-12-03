import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const Layout = styled.div`
  position: absolute;
  transition: 0.5s;
  width: max-content;
  z-index: 2;
  transform: translate(-17%, 0);
  
  ${({ isOpen }) =>
		(isOpen ? `
      display: block;
      top: 600px;
    ` : `
      display: block;
      top: 640px;
    `)}
`;

const Message = styled.div`
  width: max-content;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.5s;

  ${({ isOpen }) =>
		(isOpen ? `
      background-color: ${color.normal};
      color: white;
    ` : `
      background-color: #4db6ac00;
      color: #ffffff00;
    `)}
`;

const Triangle = styled.div`
  margin: 0 auto;
  width: 0px;
  height: 0px;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  transition: 0.5s;

  ${({ isOpen }) =>
		(isOpen ? `
      border-top: 15px solid ${color.normal};
    ` : `
      border-top: 15px solid #4db6ac00;
    `)}
`;

export default function BubblePopup({ isOpen, message }) {
	return (
		<Layout isOpen={isOpen}>
			<Message isOpen={isOpen}>{message}</Message>
			<Triangle isOpen={isOpen}></Triangle>
		</Layout>
	);
}
