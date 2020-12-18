import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import NotificationIcon from "../icons/NotificationIcon";

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
  padding: 15px 30px;
  font-weight: bold;
  transition: ${transition};
  background-color: ${themeColor.normal};
  box-shadow: 0 0 7px 3px black;
  color: white;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  > svg {
    width: 20px;
    position: relative;
    top: 4px;
    right: 8px;
  }
`;

function BubblePopup({ isOpen, message }) {
	return (
		<Layout isOpen={isOpen}>
			<Message isOpen={isOpen}>
				<NotificationIcon fill={themeColor.blue} />
				{message}
			</Message>
		</Layout>
	);
}

export default React.memo(BubblePopup);
