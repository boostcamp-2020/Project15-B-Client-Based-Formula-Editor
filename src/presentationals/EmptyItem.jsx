import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import ExclamationIcon from "../icons/ExclamationIcon";

const Layout = styled.div`
  text-align: center;
  padding-top: 80px;
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
