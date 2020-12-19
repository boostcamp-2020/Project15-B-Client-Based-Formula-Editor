import React from "react";
import styled from "styled-components";

import color from "../constants/color";

const Layout = styled.input.attrs({ placeholder: "Search" })`
	background-color: ${({ theme }) => color.mainTheme2[theme]};
	border: 1px solid ${({ theme }) => color.mainTheme2[theme]};
	color: ${({ theme }) => color.mainTheme0[theme]};
	outline: none;
	padding: 5px;
	margin: 12px;

	&:focus {
		border: 1px solid #247BC3;
	}

	&::placeholder {
		color: #979797;
	}
`;

export default function Filter({ onChange, theme }) {
	return (
		<Layout onChange={onChange} theme={theme} />
	);
}
