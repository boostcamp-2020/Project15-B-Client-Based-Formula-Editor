import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import ExclamationIcon from "../icons/ExclamationIcon";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  top: 30%;
  position: absolute;
  left: 50%;
  text-align: center;
  padding: 0 20px;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 10px;
  color: ${themeColor.white};
`;

export default function EmptyItem({ content }) {
	return (
		<Layout>
			<ExclamationIcon fill={themeColor.white}/>
			<Content>{content}</Content>
		</Layout>
	);
}
