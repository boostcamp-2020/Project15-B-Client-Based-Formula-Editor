import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const EditTabButtonStyle = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 1em 1em 0 0;
	outline: none;
	float: right;
	background-color: ${color.superLight};
	border: 1px solid ${color.dark};
	border-bottom: none;
`;

export default function EditTabButton() {
	return <EditTabButtonStyle>수식 편집 창</EditTabButtonStyle>;
}
