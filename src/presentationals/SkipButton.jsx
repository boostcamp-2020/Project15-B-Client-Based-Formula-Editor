import React from "react";
import styled from "styled-components";

import color from "../constants/color";

const Layout = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => color.mainTheme0[theme]};
  background-color: ${({ theme }) => color.mainTheme3[theme]};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 150;
  padding: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export default function SkipButton({ handleSlideEnd, theme }) {
	return <Layout onClick={handleSlideEnd} theme={theme}>Skip &gt;</Layout>;
}
