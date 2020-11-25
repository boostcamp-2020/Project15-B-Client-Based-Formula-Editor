import React from "react";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  margin: 15px 0;
  font-weight: 500;
`;

export default function SideBarHeader({ title }) {
	return <Title>{title}</Title>;
}
