import React from "react";
import styled from "styled-components";

import color from "../constants/color";

const Bar = styled.div.attrs(({ ghostHeight }) => ({ style: { top: `${ghostHeight}px` } }))`
	position: absolute;	
	width: 100%;
  display: block; 
	border: 1px dashed ${({ theme }) => color.mainTheme1[theme]};
`;

export default function GhostBar({ ghostHeight, theme }) {
	return <Bar ghostHeight={ghostHeight} theme={theme} />;
}
