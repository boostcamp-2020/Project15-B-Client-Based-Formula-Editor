import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import { SIDE_MIN_WIDTH, BODY_MIN_WIDTH } from "../constants/size";

const ResizeBarHorizontal = styled.div`
	cursor: col-resize;
	height: 100%;
	border-left: 2px solid ${({ theme }) => color.mainTheme3[theme]};
	border-right: 2px solid ${({ theme }) => color.mainTheme3[theme]};
	transition: 0.2s;

  &:hover {
		border-right: 2px solid ${({ theme }) => color.mainTheme1[theme]};;
  }

  @media(max-width: ${SIDE_MIN_WIDTH + BODY_MIN_WIDTH}px) {
		& {
			display: none;
		}
	}
`;
const DashedBarHorizontal = styled.div.attrs(({ left }) => ({ style: { left: `${left}%` } }))`
	${({ isMove, theme }) => isMove && `
		height: 100%;
		position: absolute;
		border-right: 2px dashed ${color.mainTheme1[theme]};
		z-index: 10;
	`}
`;

export default function DynamicBarHorizontal({ isMove, onMouseDown, divLeft, theme }) {
	return (
		<>
			<ResizeBarHorizontal onMouseDown={onMouseDown} theme={theme} />
			<DashedBarHorizontal isMove={isMove} left={divLeft} theme={theme} />
		</>
	);
}
