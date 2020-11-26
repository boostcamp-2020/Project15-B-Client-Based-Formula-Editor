import styled from "styled-components";

import { color } from "../GlobalStyle";

const FormulaDropdownLayout = styled.div`
	display: inline-block;
	width: 260px;
	height: 250px;
	border: 1px solid ${color.normal};
	padding: 8px;
	background-color: ${color.normal};
	z-index: 5;
`;

export default FormulaDropdownLayout;
