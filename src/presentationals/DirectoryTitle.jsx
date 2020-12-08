import React from "react";
import styled from "styled-components";

import DownIcon from "../icons/DownIcon";
import RightIcon from "../icons/RightIcon";

const color = "#86C290";

const Layout = styled.div`
  display: flex;
  cursor: pointer;
  height: 27px;
  align-items: center;
  position: relative;
  padding: 0 10px;

  &:hover {
    background-color: #2B2D2E;
  }

  > svg {
    width: 12px;
    margin-right: 10px;
  }
`;
const Title = styled.div`
  color: ${color};
`;

const Number = styled.div`
  color: ${color};
  position: absolute;
  right: 20px;
  font-size: 13px;
`;

export default function DirectoryTitle({ title, onClick, isOpen, length }) {
	return (
		<Layout onClick={onClick} isOpen={isOpen}>
			{isOpen ? <DownIcon /> : <RightIcon/>}
			<Title>{title}</Title>
			<Number>{length}</Number>
		</Layout>
	);
}
