import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import FILE_PATH from "../constants/filePath";

const Page = styled.div`
	overflow: hidden;
  width: ${({ browserWidth }) => browserWidth}px;
`;

const Layout = styled.div`
  position: relative;
  top: 50%;
  margin: 0 auto;
  width: 60%;
  transform: translateY(-50%);
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
`;

const StartButton = styled.button`
  display: block;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  border: none;
  border-radius: 7px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => color.mainTheme0[theme]};
  background-color: ${({ theme }) => color.mainTheme3[theme]};
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SkipButton = styled.button`
  display: block;
  position: fixed;
  right: 0;
  color: ${({ theme }) => color.mainTheme0[theme]};
  background-color: ${({ theme }) => color.mainTheme3[theme]};
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 10px 10px 80px;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function TutorialStart({ browserWidth, handleSlideDown, handleSlideEnd, theme }) {
	const fileURL = `${FILE_PATH}/dark_logo.png`;

	return (
		<Page browserWidth={browserWidth}>
			<Layout>
				<Logo src={fileURL} />
				<StartButton onClick={handleSlideDown} theme={theme}>튜토리얼 시작하기</StartButton>
				<SkipButton onClick={handleSlideEnd} theme={theme}>Skip &gt;</SkipButton>
			</Layout>
		</Page>
	);
}
