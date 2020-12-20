import React from "react";
import styled from "styled-components";

import color from "../constants/color";
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
  background-color: ${({ theme }) => color.mainTheme3[theme]};
  box-shadow: 0 0 7px 3px ${color.deepDark};
  color: ${({ theme }) => color.mainTheme0[theme]};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  > svg {
    width: 20px;
    position: relative;
    top: 4px;
    right: 8px;
  }
`;

function BubblePopup({ isOpen, message, theme }) {
	return (
		<Layout isOpen={isOpen}>
			<Message isOpen={isOpen} theme={theme}>
				<NotificationIcon fill={color.blue} />
				{message}
			</Message>
		</Layout>
	);
}

export default React.memo(BubblePopup);
