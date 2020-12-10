import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import { SIDE_MIN_WIDTH, BODY_MIN_WIDTH } from "../constants/size";

const ResizeBarHorizontal = styled.div`
	cursor: col-resize;
	height: 100%;
	border-left: 2px solid ${themeColor.normal};
	border-right: 2px solid ${themeColor.black};

  &:hover {
		border-color: ${themeColor.superLight};
  }

  @media(max-width: ${SIDE_MIN_WIDTH + BODY_MIN_WIDTH}px) {
		& {
			display: none;
		}
	}
`;

const DashedBarHorizontal = styled.div`
	${prop => prop.isMove && `
		height: 100%;
		position: absolute;
		border-right: 2px dashed ${themeColor.superLight};
		z-index: 10;
		left: ${prop.left}%;
	`}
`;

export default function DynamicBarHorizontal({
	isMove,
	onMouseDown,
	divLeft,
}) {
	return (
		<>
			<ResizeBarHorizontal onMouseDown={onMouseDown} />
			<DashedBarHorizontal isMove={isMove} left={divLeft} />
		</>
	);
}
