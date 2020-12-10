import React from "react";
import styled from "styled-components";

const Bar = styled.div.attrs(({ ghostHeight }) => ({ style: { top: `${ghostHeight}px` } }))`
	position: absolute;	
	width: 100%;
  display: block; 
	border: 1px dotted white;
`;

export default function GhostBar({ ghostHeight }) {
	return <Bar ghostHeight={ghostHeight} />;
}
