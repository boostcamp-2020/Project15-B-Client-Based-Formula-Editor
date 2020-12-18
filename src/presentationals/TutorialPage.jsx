import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import FILE_PATH from "../constants/filePath";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";
import FlagIcon from "../icons/FlagIcon";

const Page = styled.div`
  display: flex;
  align-items: center;
  width: ${(({ browserWidth }) => browserWidth)}px;
`;

const Layout = styled.div`
  position: relative;
  margin: 0 auto;
  width: 60%;
`;

const LogoImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.div`
  color: white;
  padding: 20px;
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

const MovingButton = styled.div`
  color: ${themeColor.white};
  cursor: pointer;
  margin: 50px;
  width: 36px;

  &:hover {
    color: white;

    > div {
      color: white;
    }
  }
`;

export default function TutorialPage({
	browserWidth,
	imageURL,
	title,
	content = "",
	handleSlideUp,
	handleSlideDown,
	end = false,
}) {
	return (
		<Page browserWidth={browserWidth}>
			<MovingButton onClick={handleSlideUp}>
				<PrevIcon />
			</MovingButton>
			<Layout>
				<LogoImage src={`${FILE_PATH}/${imageURL}`} />
				<Title>{title}</Title>
				<Content>
					{content}
				</Content>
			</Layout>
			<MovingButton onClick={handleSlideDown}>
				{end ? <FlagIcon /> : <NextIcon />}
			</MovingButton>
		</Page>
	);
}
