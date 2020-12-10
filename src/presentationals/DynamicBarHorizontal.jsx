import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const ResizeBarHorizontal = styled.div`
	cursor: col-resize;
	height: 100%;
	border-right: 2px solid ${themeColor.normal};

  &:hover {
    border-right: 2px solid ${themeColor.superLight};
  }

  @media(max-width: ${({ maxWidth }) => maxWidth}px) {
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
		left: ${prop.left}%;
	`}
`;

export default function DynamicBarHorizontal({
	isMove,
	onMouseDown,
	divLeft,
	maxWidth,
}) {
	return (
		<>
			<ResizeBarHorizontal onMouseDown={onMouseDown} maxWidth={maxWidth}/>
			<DashedBarHorizontal isMove={isMove} left={divLeft}/>
		</>
	);
}
