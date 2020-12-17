import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import FILE_PATH from "../constants/filePath";
import DownIcon from "../icons/DownIcon";
import UpIcon from "../icons/UpIcon";

const Page = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  margin-bottom: 50vh;
`;

const LogoImage = styled.img`
  width: 100%;
`;

const Title = styled.div`
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Content = styled.div`
  padding: 0 20px;
  color: ${themeColor.white};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const Highlight = styled.span`
  color: black;
  background-color: #b2a42f;
  padding: 0 3px;
`;

const PrevButton = styled.div`
  position: absolute;
  left: 50%;
  top: -180px;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
  padding: 5px 20px;
  color: ${themeColor.white};
  cursor: pointer;

  &:hover {
    color: white;

    > div {
      color: white;
    }
  }
`;

const NextButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -180px;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 20px;
  color: ${themeColor.white};
  cursor: pointer;

  &:hover {
    color: white;

    > div {
      color: white;
    }
  }
`;

const IconWrapper = styled.div`
  visibility: ${(({ name }) => name === "튜토리얼 완료" && "hidden")};
  color: ${themeColor.white};
  width: 36px;
`;

export default function TutorialPage({
	imageURL,
	title,
	content = "",
	nextButtonName = "다음",
	handleSlideUp,
	handleSlideDown,
}) {
	const [front, highlight, back] = content.split("$");

	return (
		<Page>
			<PrevButton onClick={handleSlideUp}>
				<IconWrapper name={nextButtonName}><UpIcon /></IconWrapper>이전
			</PrevButton>
			<LogoImage src={`${FILE_PATH}/${imageURL}`} />
			<Title>{title}</Title>
			<Content>
				{front}
				{highlight && <Highlight>{highlight}</Highlight>}
				{back}
			</Content>
			<NextButton onClick={handleSlideDown}>
				{nextButtonName}
				<IconWrapper name={nextButtonName}><DownIcon /></IconWrapper>
			</NextButton>
		</Page>
	);
}
