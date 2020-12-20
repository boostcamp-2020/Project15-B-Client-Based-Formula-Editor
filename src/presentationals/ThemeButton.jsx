import React from "react";
import styled from "styled-components";

import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import Theme from "../constants/theme";
import color from "../constants/color";

const Layout = styled.div`
  position: relative;
  margin: auto;
  background-color: ${({ theme }) => color.mainTheme1[theme]};;
  width: 60px;
  height: 30px;
  border-radius: 1em;
  cursor: pointer;
  overflow-y: hidden;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: 60px;
  top: ${({ isDarkmode }) => ((isDarkmode) ? 0 : -40)}px;
  transition: 0.3s;
  
  svg {
    position: absolute;

    :first-child {
      top: 43px;
      left: 5px;
    }
    :last-child {
      top: 3px;
      right: 5px;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isDarkmode }) => (isDarkmode ? 3 : 33)}px;
  background-color: ${({ theme }) => color.mainTheme2[theme]};
  border-radius: 100%;
  transition: 0.3s;
  z-index: 10;
`;

export default function ThemeButton({ theme, onClick }) {
	const isDarkmode = theme === Theme.DARK;

	return (
		<Layout onClick={onClick} theme={theme}>
			<IconWrapper isDarkmode={isDarkmode}>
				<SunIcon />
				<MoonIcon />
			</IconWrapper>
			<Circle isDarkmode={isDarkmode} theme={theme} />
		</Layout>
	);
}
