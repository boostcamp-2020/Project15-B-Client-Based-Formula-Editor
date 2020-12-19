import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import AngleUpIcon from "../icons/AngleUpIcon";
import AngleDownIcon from "../icons/AngleDownIcon";

const DynamicBarStyle = styled.div.attrs(({ top }) => ({ style: { top: `${top}px` } }))`
	border-top: 1px solid ${({ theme }) => color.mainTheme4[theme]};
	border-bottom: 1px solid ${({ theme }) => color.mainTheme4[theme]};
	height: 3px;
	width: 100%;
  background-color: ${({ theme }) => color.mainTheme1[theme]};
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
			top: -100%
		}
		:last-child {
			top: -90%
		}
	}

	:hover {
		height: 4px;
		> svg {
			opacity: 1;
		}
	} 
`;

export default function DynamicBarVertical({ onMouseDown, top, theme }) {
	return (
		<DynamicBarStyle onMouseDown={onMouseDown} top={top} theme={theme}>
			<AngleUpIcon fill={color.mainTheme0[theme]} />
			<AngleDownIcon fill={color.mainTheme0[theme]} />
		</DynamicBarStyle>
	);
}
