import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const Page = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  margin-bottom: 50vh;
`;

const Logo = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const StartButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  border: none;
  border-radius: 7px;
  font-size: 32px;
  font-weight: bold;
  color: ${themeColor.white};
  background-color: ${themeColor.light};
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${themeColor.superLight};
  }
`;

export default function TutorialStart({ handleSlideMoving }) {
	return (
		<Page>
			<Logo src="../../public/dark_logo.png" />
			<StartButton onClick={handleSlideMoving}>튜토리얼 시작하기</StartButton>
		</Page>
	);
}
