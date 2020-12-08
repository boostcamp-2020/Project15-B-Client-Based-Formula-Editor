import React from "react";
import styled from "styled-components";

import AngleUpIcon from "../icons/AngleUpIcon";
import AngleDownIcon from "../icons/AngleDownIcon";

import { themeColor } from "../GlobalStyle";

const DynamicBarStyle = styled.div`
	height: 5px;
	width: 100%;
  background-color: white;
	position: relative;
	display: grid;
  cursor: ns-resize;
	svg {
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
	:hover > svg {
		opacity: 1;
	}
`;

export default function DynamicBar({ onDrag, onDragStart }) {
	return (
		<DynamicBarStyle draggable='true' onDrag={onDrag} onDragStart={onDragStart}>
			<AngleUpIcon fill={themeColor.white}/>
			<AngleDownIcon fill={themeColor.white}/>
		</DynamicBarStyle>
	);
}
