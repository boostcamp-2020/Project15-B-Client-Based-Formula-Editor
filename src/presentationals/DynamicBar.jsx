import React from "react";
import styled from "styled-components";

import AngleUpIcon from "../icons/AngleUpIcon";
import AngleDownIcon from "../icons/AngleDownIcon";

import { themeColor } from "../GlobalStyle";

const DynamicBarStyle = styled.div.attrs(({ top }) => ({ style: { top: `${top}px` } }))`
	border-top: 1px solid ${themeColor.dark};
	border-bottom: 1px solid ${themeColor.dark};
	height: 3px;
	width: 100%;
  background-color: ${themeColor.superLight};
	position: absolute;
	display: grid;
  cursor: row-resize;

	svg {
		pointer-events: none;
		position: relative;
		opacity: 0;
		margin: 0 auto;
		padding: 4px;
		transition: 0.2s;

		:first-child {
			top: -120%
		}
		:last-child {
			top: -60%
		}
	}

	:hover {
		height: 4px;
		> svg {
			opacity: 1;
		}
	} 
`;

export default function DynamicBar({ onMouseDown, top }) {
	return (
		<DynamicBarStyle onMouseDown={onMouseDown} top={top}>
			<AngleUpIcon fill={themeColor.white} />
			<AngleDownIcon fill={themeColor.white} />
		</DynamicBarStyle>
	);
}
