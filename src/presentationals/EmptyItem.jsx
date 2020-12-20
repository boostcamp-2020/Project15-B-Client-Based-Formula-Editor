import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import ExclamationIcon from "../icons/ExclamationIcon";

const Layout = styled.div`
  text-align: center;
  padding-top: 80px;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => color.mainTheme0[theme]};
`;

export default function EmptyItem({ content, theme }) {
	return (
		<Layout>
			<ExclamationIcon fill={color.mainTheme0[theme]}/>
			<Content theme={theme}>{content}</Content>
		</Layout>
	);
}
