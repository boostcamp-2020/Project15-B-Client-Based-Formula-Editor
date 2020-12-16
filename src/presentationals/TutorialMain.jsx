import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import DownIcon from "../icons/DownIcon";

const Layout = styled.div`
  overflow: auto;
  position: fixed;
  width: 100vw;
  height: 1600vh;
  background: ${themeColor.normal};
  transform: ${(({ slide }) => `translateY(${slide}vh)`)};
  transition: 1s;
  z-index: 100;
`;

const Page = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 70vh;
  margin-bottom: 50vh;
`;

const LogoImage = styled.img`
  width: 100%;
`;

const StartButton = styled.button`
  display: block;
  width: 90%;
  height: 16vh;
  margin: auto;
  margin-top: 2vh;
  font-size: 40px;
  font-weight: bold;
  color: ${themeColor.white};
  background-color: ${themeColor.normal};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Title = styled.div`
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  color: ${themeColor.white};
  font-size: 14px;
`;

const Highlight = styled.span`
  color: black;
  background-color: #b2a42f;
  padding: 0 3px;
`;

const NextButton = styled.div`
  position: absolute;
  left: 50%;
  bottom: -23vh;
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
  color: ${themeColor.white};
  width: 36px;
`;

export default function TutorialMain({ slide, handleSlideMoving }) {
	return (
		<Layout slide={slide}>
			<Page>
				<LogoImage src="../../public/dark_logo.png" />
				<StartButton onClick={handleSlideMoving(0)}>튜토리얼 시작하기</StartButton>
			</Page>
			<Page>
				<LogoImage src="../../public/FormulaRepresentation.gif" />
				<Title>이곳에서 원하시는 수식을 편집할 수 있습니다.</Title>
				<NextButton onClick={handleSlideMoving(0)}>
          다음
					<IconWrapper><DownIcon /></IconWrapper>
				</NextButton>
			</Page>
			<Page>
				<LogoImage src="../../public/FormulaRepresentation_top.gif" />
				<Title>수식을 작성하면서 필요한 도구들을 사용할 수 있습니다.</Title>
				<NextButton onClick={handleSlideMoving(0)}>
          다음
					<IconWrapper><DownIcon /></IconWrapper>
				</NextButton>
			</Page>
			<Page>
				<LogoImage src="../../public/LatexRepresantation.gif" />
				<Title>LaTeX 코드를 입력하여 수식을 만들 수 있습니다.</Title>
				<NextButton onClick={handleSlideMoving(0)}>
          다음
					<IconWrapper><DownIcon /></IconWrapper>
				</NextButton>
			</Page>
			<Page>
				<LogoImage src="../../public/SideBar_character.gif" />
				<Title>수식에 필요한 기호나 연산자 등을 가져다 사용할 수 있습니다.</Title>
				<NextButton onClick={handleSlideMoving(0)}>
          다음
					<IconWrapper><DownIcon /></IconWrapper>
				</NextButton>
			</Page>
			<Page>
				<LogoImage src="../../public/SideTab_top.gif" />
				<Title>
          임시 저장된 수식이나 북마크, 커스텀 명령어 지정을 사용 할 수 있습니다.
					<Content>(커스텀 명령어는 <Highlight>#[명령어][스페이스]</Highlight> 로 사용 가능합니다.)</Content>
				</Title>
				<NextButton onClick={handleSlideMoving(0)}>
          다음
					<IconWrapper><DownIcon /></IconWrapper>
				</NextButton>
			</Page>
			<Page>
				<LogoImage src="../../public/SideTab_bottom.gif" />
				<Title>
          수식을 임시저장하거나 수식 링크 공유, 그리고 수식을 이미지로 저장할 수 있습니다.
					<Content>(수식 링크 저장을 통해 다른 사람에게 공유하면, 해당 사용자가 링크를 클릭했을 때 동일한 수식을 볼 수 있습니다.)</Content>
				</Title>
				<NextButton onClick={handleSlideMoving(200)}>튜토리얼 완료</NextButton>
			</Page>
		</Layout>
	);
}
